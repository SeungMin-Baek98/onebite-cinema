import SearchableLayout from "@/components/searchable-layout";

import movies from "@/mock/mock.json";
import { ReactNode, useEffect, useState } from "react";
import style from "./index.module.css";
import { useRouter } from "next/router";

import AllMovieItem from "@/components/all-movie-item";

export default function Page() {
  const [filteredMovie, setFilteredMovie] = useState(movies);
  const router = useRouter();

  // 쿼리스트링
  const { q } = router.query;

  useEffect(() => {
    //쿼리스트링이 있다는건 검색결과가 있다는 것!
    const filtered = movies.filter((movie) =>
      movie.title.includes(q as string)
    );
    setFilteredMovie(filtered);
  }, [q]);

  return (
    <div className={style.container}>
      {filteredMovie.length > 0 ? (
        filteredMovie.map((movie) => <AllMovieItem key={movie.id} {...movie} />)
      ) : (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          검색 결과가 없습니다.😭
        </h1>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
