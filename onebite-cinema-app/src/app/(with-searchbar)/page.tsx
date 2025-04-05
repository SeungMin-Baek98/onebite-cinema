import MovieItem from "../components/movie-item";
import style from "./page.module.css";
import movies from "@/mock/dummy.json";

export default function Home() {
  return (
    <div className={style.container}>
      <section className={style.reco_section}>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.reco_section_img}>
          {movies
            .map((movie) => <MovieItem key={movie.id} {...movie} />)
            .slice(0, 3)}
        </div>
      </section>
      <section className={style.all_section}>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_section_img}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
