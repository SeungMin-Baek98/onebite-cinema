import style from "./page.module.css";
import MovieItem from "../components/movie-item";
import RecoMovieItemSkeleton from "../skeleton/reco-movie-item-skeleton";
import AllMovieItemSkeleton from "../skeleton/all-movie-item-skeleton";

import { delay } from "../util/delay";
import { Suspense } from "react";
import { MovieData } from "@/types";

// 모든 영화
async function AllMovies() {
  await delay(2500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    return <div>데이터를 불러오는데 실패하였습니다 ...</div>;
  }

  const movies: MovieData[] = await response.json();
  return movies.map((movie) => <MovieItem key={movie.id} {...movie} />);
}

// 추천 영화
async function RecoMovies() {
  await delay(2500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    {
      next: { revalidate: 3 },
    }
  );

  if (!response.ok) {
    return <div>데이터를 불러오는데 실패하였습니다 ...</div>;
  }

  const movies: MovieData[] = await response.json();
  return movies.map((movie) => <MovieItem key={movie.id} {...movie} />);
}

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className={style.container}>
      <section className={style.reco_section}>
        <h3>지금 가장 추천하는 영화</h3>

        <div className={style.reco_section_img}>
          <Suspense fallback={<RecoMovieItemSkeleton count={3} />}>
            <RecoMovies />
          </Suspense>
        </div>
      </section>

      <section className={style.all_section}>
        <h3>등록된 모든 영화</h3>

        <div className={style.all_section_img}>
          <Suspense fallback={<AllMovieItemSkeleton count={17} />}>
            <AllMovies />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
