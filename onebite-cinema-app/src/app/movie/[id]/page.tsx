import style from "./page.module.css";

import { notFound } from "next/navigation";
import { MovieData, ReviewData } from "@/types";

import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

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

async function MovieDetail({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
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
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} alt={`${title} 포스터`} />
      </div>
      <h1 className={style.title}>{title}</h1>
      <div className={style.meta}>
        {releaseDate} / {genres.join(", ")} / {runtime}분
      </div>
      <div className={style.meta}>{company}</div>
      <h2 className={style.subtitle}>{subTitle}</h2>
      <p className={style.description}>{description}</p>
    </section>
  );
}

async function ReviewList({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`,
    { next: { tags: [`/movie/${movieId}`] } }
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed!! ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();
  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={style.container}>
      <MovieDetail movieId={id} />
      <ReviewEditor movieId={id} />
      <ReviewList movieId={id} />
    </div>
  );
}
