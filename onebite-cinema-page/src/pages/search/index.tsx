import style from "./index.module.css";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-all-movies";
import SearchableLayout from "@/components/searchable-layout";
import Head from "next/head";

import { ReactNode, useEffect, useState } from "react";
import { MovieData } from "@/types";
import { useRouter } from "next/router";

// SSR 방식
/*
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const searchResults = await fetchMovies(q as string);
  return {
    props: { searchResults },
  };
};
*/

// SSG 방식

// 검색은 사용자 입력(query)에 따라 결과가 달라지므로
// 사전 빌드 시점(getStaticProps)에는 query 정보를 알 수 없다.
// 검색 결과는 정적으로 생성할 수 없기 때문에, 이 페이지는 CSR 방식으로 구성했다.
//
// 따라서 페이지 자체는 미리 정적으로 렌더링을 하고,
// 실제 검색 결과는 클라이언트 측에서 useEffect를 통해 쿼리(query)값이 있을 경우
// fetch 요청을 보내 데이터를 받아오도록 처리했다.
//
// 이렇게 하면 사용자가 검색어를 입력해서 들어오는 경우,
// SSG처럼 빠른 반응 속도를 제공하면서도 동적 데이터를 처리할 수 있다.

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);
  return (
    <div className={style.container}>
      <Head>
        <title>한입 씨네마 - 검색결과</title>
        <meta property="og:title" content="한입 씨네마 - 검색결과" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:description"
          content="최신 영화의 정보를 지금 바로 확인해 보세요"
        />
      </Head>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
