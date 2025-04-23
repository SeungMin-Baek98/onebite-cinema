"use server";

import { revalidateTag } from "next/cache";

export async function reviewDeleteButton(_: any, formData: FormData) {
  const reviewId = formData.get("reviewId")?.toString();
  const movieId = formData.get("movieId")?.toString();

  if (!reviewId || !movieId) {
    return { state: false, error: "리뷰 ID 또는 영화 ID가 누락되었습니다." };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      return { state: false, error: "삭제 요청이 실패했습니다." };
    }

    revalidateTag(`/review-${movieId}`);

    return { state: true, error: "" };
  } catch (error) {
    return {
      state: false,
      error: `삭제 중 오류 발생: ${error}`,
    };
  }
}
