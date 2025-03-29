import { MovieData } from "@/types";
import Link from "next/link";
import style from "./all-movie-item.module.css";
export default function AllMovieItem({ id, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} />
    </Link>
  );
}
