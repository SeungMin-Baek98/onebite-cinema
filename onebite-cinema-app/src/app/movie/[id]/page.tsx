import style from "./page.module.css";

import { MovieData } from "@/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
      {
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      console.log("영화 데이터를 불러오는데 실패하였습니다.");
      return [];
    }

    const movieIds: MovieData[] = await response.json();

    return movieIds.map((movie) => ({
      id: movie.id.toString(),
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${id}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
  }

  const movie = await response.json();

  const {
    posterImgUrl,
    title,
    releaseDate,
    genres,
    runtime,
    company,
    subTitle,
    description,
  } = movie;
  return (
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
  );
}
