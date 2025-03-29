import { MovieData } from "@/types";
import Link from "next/link";
import style from "./recommend-movie-item.module.css";
export default function RecoMovieItem({ id, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} />
    </Link>
  );
}
