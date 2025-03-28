import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-all-movies";
import MovieItem from "@/components/movie-item";
import fetchRandomMovie from "@/lib/fetch-random-movie";
import SearchableLayout from "@/components/searchable-layout";

import { ReactNode } from "react";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovie(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section className={style.reco_movie_section}>
        <h3>지금 가장 추천하는 영화</h3>
        <div>
          {recoMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section className={style.all_movie_section}>
        <h3>등록된 모든 영화</h3>
        <div>
          {allMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
