// movie id에 따라서 detail 페이지를 보여주기 위한 라우팅
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";
import MovieCredits from "../components/MovieCredits";
import styles from "../css/Movie.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getDetailData = async () => {
      try {
        const [movieDResp, movieCResp] = await Promise.all([
          fetch(
            `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`,
          ),
          fetch(
            `https://nomad-movies.nomadcoders.workers.dev/movies/${id}/credits?sort_by=order`,
          ),
        ]);
        const movieJson = await movieDResp.json();
        const creditJson = await movieCResp.json();

        //주연 배우 먼저 나오도록 sorted
        const sortedCredits = creditJson.sort(
          (a, b) => a.order - b.order,
        );
        setMovie(movieJson);
        setCredits(sortedCredits);
        setLoading(false);
      } catch (e) {
        console.error("데이터를 불러오는 데 실패했습니다.", e);
      }
    };
    getDetailData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <MovieDetail
            id={movie.id}
            title={movie.title}
            origin_title={movie.original_title}
            voteAverage={movie.vote_average}
            releaseDate={movie.release_date}
            runtime={movie.runtime}
            overview={movie.overview}
            backDropImg={movie.backdrop_path}
            genres={movie.genres}
          >
            <div>
              {credits.slice(0, 4).map((credit) => (
                <div key={credit.id}>
                  <MovieCredits
                    id={credit.id}
                    name={credit.name}
                    gender={credit.gender}
                    character={credit.character}
                  />
                </div>
              ))}
              {credits?.length > 4 && (
                <div className={styles.moreText}>...more</div>
              )}
            </div>
          </MovieDetail>
        </div>
      )}
    </>
  );
}

export default Detail;
