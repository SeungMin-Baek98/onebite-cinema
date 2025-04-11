import style from "./page.module.css";
import MovieItem from "@/app/components/movie-item";
import RecoMovieItemSkeleton from "@/app/skeleton/reco-movie-item-skeleton";

import { MovieData } from "@/types";
import { delay } from "@/app/util/delay";
import { Suspense } from "react";

async function SearchResult({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  await delay(1500);
  const { q } = await searchParams;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`
  );

  if (!response.ok) {
    return <div>검색 결과를 불러오는데 실패하였습니다 ...</div>;
  }

  const movie: MovieData[] = await response.json();

  const filteredMovie = movie.filter((movie) =>
    movie.title.replace(/ /g, "").includes(q as string)
  );

  return (
    <div className={style.container}>
      {filteredMovie.length > 0 ? (
        filteredMovie.map((movie) => <MovieItem key={movie.id} {...movie} />)
      ) : (
        <div>찾으시는 영화가 없습니다.</div>
      )}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div style={{ marginTop: "15px" }}>
      <Suspense key={q || ""} fallback={<RecoMovieItemSkeleton count={3} />}>
        <SearchResult searchParams={searchParams || ""} />
      </Suspense>
    </div>
  );
}
