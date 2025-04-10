import MovieItem from "@/app/components/movie-item";
import style from "./page.module.css";

import { MovieData } from "@/types";
import { delay } from "@/app/util/delay";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  await delay(3000);
  const { q } = await searchParams;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`
  );

  if (!response.ok) {
    return <div>검색 결과를 불러오는데 실패하였습니다 ...</div>;
  }

  const movie: MovieData[] = await response.json();

  const filteredMovie = movie.filter((movie) => movie.title.includes(q));

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
