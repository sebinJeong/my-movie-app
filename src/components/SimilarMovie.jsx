import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "./Movie";
import stylesS from "../css/SimilarMovie.module.css"
import stylesM from "../css/Movie.module.css";

function SimilarMovie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [smovies, setSmovie] = useState([]);

  useEffect(() => {
    const getSimilarMovie = async () => {
      try {
        const response = await fetch(
          `https://nomad-movies.nomadcoders.workers.dev/movies/${id}/similar`,
        );
        const json = await response.json();
        setSmovie(json);
        setLoading(false);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
      }
    };
    getSimilarMovie();
  }, [id]);
  return (
    <div className={stylesS.recommandWrapper}>
      <span className={stylesS.title}>Movies like this...</span>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={stylesM.movieGrid}>
          {smovies.map((smovie) => (
            <Movie
              key={smovie.id}
              id={smovie.id}
              coverImg={smovie.poster_path}
              title={smovie.title}
              overview={smovie.overview}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SimilarMovie;
