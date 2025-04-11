import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";
import style from "./all-movie-item-skeleton.module.css";

export default function AllMovieItemSkeleton({ count }: { count: number }) {
  return (
    <div className={style.container}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          baseColor="#ccc"
          highlightColor="#e0e0e0"
          duration={1.5}
          width={156}
          height={222}
        />
      ))}
    </div>
  );
}
