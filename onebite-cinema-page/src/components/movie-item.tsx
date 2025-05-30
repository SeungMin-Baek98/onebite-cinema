import Link from "next/link";
import style from "./movie-item.module.css";

import { MovieData } from "@/types";

export default function MovieItem({ id, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} />
    </Link>
  );
}
