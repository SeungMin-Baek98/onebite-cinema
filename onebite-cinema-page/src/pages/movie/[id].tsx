import fetchMovies from "@/lib/fetch-all-movies";
import style from "./[id].module.css";
import fetchOneMovie from "@/lib/fetch-one-movie";

import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";

// SSR 방식
/*
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.id;
  const movie = await fetchOneMovie(Number(id));
  return {
    props: { movie },
  };
};
*/

// SSG 방식

// [id]와 같은 동적 경로를 SSG로 처리할 때는
// getStaticProps()와 함께 반드시 getStaticPaths()도 함께 작성해야 한다.
//
// getStaticPaths는 빌드 시 어떤 경로들을 정적으로 생성할지 알려주는 역할을 하며,
// 반환값에는 반드시 paths 배열과 fallback 옵션이 포함되어야 한다.
//
// fallback: true인 경우, paths에 없는 경로는 처음 요청 시 서버에서 HTML을 생성하고,
// 그 이후 캐싱되어 정적으로 렌더링된다.

export const getStaticPaths = async () => {
  const movieIds = await fetchMovies();
  return {
    paths: movieIds.map((movie) => ({
      params: { id: movie.id.toString() },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));
  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // 데이터 fallback 상태일경우
  if (router.isFallback) {
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
        <div>로딩중 입니다...</div>;
      </>
    );
  }

  if (!movie) {
    return <div>영화에 관한 정보가 없습니다. 😭</div>;
  }

  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          style={{ backgroundImage: `url('${posterImgUrl}')` }}
          className={style.cover_img_container}
        >
          <img src={posterImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div>
          {releaseDate} / {genres.join(", ")} / {runtime}
        </div>
        <div>{company}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
