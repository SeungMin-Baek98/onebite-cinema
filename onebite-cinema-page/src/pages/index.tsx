import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-all-movies";
import MovieItem from "@/components/movie-item";
import fetchRandomMovie from "@/lib/fetch-random-movie";
import SearchableLayout from "@/components/searchable-layout";

import { ReactNode } from "react";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";

// SSR 방식
/*
export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovie(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
  };
};
*/

// SSG 방식
// 메인 페이지는 실시간으로 변경되는 데이터가 없기 때문에,
// 빌드 타임(build time)에 사전 렌더링을 수행하는 SSG 방식을 적용했다.
//
// 모든 영화 데이터를 build 시점에 미리 fetch하여 HTML로 생성하고,
// 사용자에게는 정적으로 만들어진 페이지를 제공함으로써
// 매우 빠른 속도로 콘텐츠를 렌더링할 수 있다.
export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovie(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
    // ISR 방식
    revalidate: 5,
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입 씨네마</title>
        <meta property="og:title" content="한입 씨네마" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:description"
          content="최신 영화의 정보를 지금 바로 확인해 보세요"
        />
      </Head>
      <div className={style.container}>
        <section className={style.reco_movie_section}>
          <h3>지금 가장 추천하는 영화</h3>
          <div>
            {recoMovies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
          <section className={style.all_movie_section}>
            <h3>등록된 모든 영화 : 안일주</h3>
            <div>
              {allMovies.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
              ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
