import styles from "../css/Detail.module.css";

function MovieDetail({
  children,
  id,
  title,
  origin_title,
  voteAverage,
  releaseDate,
  runtime,
  poster,
  overview,
  backDropImg,
  genres,
}) {
  const hour = Math.floor(runtime / 60);
  const minute = runtime % 60;

  return (
    <div className={styles.container}>
      <div className={styles.backdropWrapper}>
        <img
          src={backDropImg}
          alt={title}
          className={styles.backDropImg}
        />
      </div>
      <div className={styles.detailContainer}>
        <div className={styles.movieWrapper}>
          <h1 className={styles.movieTitle}>{title}</h1>
          <img className={styles.poster} src={poster} alt={title} />
        </div>
        <h3>{origin_title}</h3>
        <div className={styles.infoSection}>
          <div className={styles.mainInfo}>
            <div className={styles.metaDataBox}>
              <span>{releaseDate}</span>
              <span className={styles.divider}>|</span>
              <span>
                {hour > 0 ? `${hour}H` : ""}
                {` ${minute}M `}
              </span>
              <span className={styles.divider}>|</span>
              <span>⭐ {voteAverage.toFixed(1)}</span>
            </div>
            <p>{overview}</p>
          </div>
          <div className={styles.subInfo}>
            <div className={styles.creditsList}>
              <span>credits : </span>
              {children}
            </div>
            <p className={styles.genresBox}>
              genres : {genres.map((g) => g.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
