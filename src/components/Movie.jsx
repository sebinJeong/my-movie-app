import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, overview }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.movieCard}>
        <div className={styles.posterContainer}>
          <img src={coverImg} alt={title} className={styles.poster} />
        </div>
        <h2 className={styles.posterTitle}>{title}</h2>
        <p className={styles.overview}>{overview}</p>
      </div>
    </Link>
  );
}

// 요즘은 잘 쓰지 않고 타입스크립트로 대체
Movie.PropTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
