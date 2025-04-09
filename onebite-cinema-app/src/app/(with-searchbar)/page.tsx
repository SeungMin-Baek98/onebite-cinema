import { MovieData } from "@/types";

import MovieItem from "../components/movie-item";
import style from "./page.module.css";

// 모든 영화
async function AllMovies() {
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

export default function Home() {
  return (
    <div className={style.container}>
      <section className={style.reco_section}>
        <h3>지금 가장 추천하는 영화</h3>

        <div className={style.reco_section_img}>
          <RecoMovies />
        </div>
      </section>

      <section className={style.all_section}>
        <h3>등록된 모든 영화</h3>

        <div className={style.all_section_img}>
          <AllMovies />
        </div>
      </section>
    </div>
  );
}
