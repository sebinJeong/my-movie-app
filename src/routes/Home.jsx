import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/App.module.css";
import stylesM from "../css/Movie.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://nomad-movies.nomadcoders.workers.dev/movies`,
        );
        const json = await response.json();
        console.log(json);
        setMovies(json);
        setLoading(false);
      } catch (error) {
        console.error("데이터를 불러오는 데 실패했습니다.", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div className={styles.home}>
        <h1 className={`${styles.title} ${styles.font}`}>movieCat</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={stylesM.movieGrid}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
