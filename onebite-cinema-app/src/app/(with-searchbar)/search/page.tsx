import MovieItem from "@/app/components/movie-item";

import style from "./page.module.css";
import { MovieData } from "@/types";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${
      (
        await searchParams
      ).q
    }`
  );

  if (!response.ok) {
    return <div>검색 결과를 불러오는데 실패하였습니다 ...</div>;
  }

  const movie: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
