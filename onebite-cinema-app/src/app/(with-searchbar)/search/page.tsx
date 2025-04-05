import MovieItem from "@/app/components/movie-item";
import movie from "@/mock/dummy.json";
import style from "./page.module.css";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  return (
    <div className={style.container}>
      {movie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
