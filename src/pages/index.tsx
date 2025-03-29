import RecoMovieItem from "@/components/recommend-movie-item";
import SearchableLayout from "@/components/searchable-layout";
import movies from "@/mock/mock.json";
import style from "./index.module.css";
import { ReactNode } from "react";
import AllMovieItem from "@/components/all-movie-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section className={style.reco_movie_section}>
        <h3>지금 가장 추천하는 영화</h3>
        <div>
          {movies
            .map((movie) => <RecoMovieItem key={movie.id} {...movie} />)
            .slice(0, 3)}
        </div>
      </section>
      <section className={style.all_movie_section}>
        <h3>등록된 모든 영화</h3>
        <div>
          {movies.map((movie) => (
            <AllMovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
