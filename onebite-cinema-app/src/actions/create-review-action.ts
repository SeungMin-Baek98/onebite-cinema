"use server";

import { revalidateTag } from "next/cache";

export async function createMovieReview(_: any, formData: FormData) {
  const movieId = formData.get("movieId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!movieId || !content || !author) {
    return { state: false, error: "모든 항목을 입력해주세요." };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/12`,
      { method: "POST", body: JSON.stringify({ movieId, content, author }) }
    );

    if (!response.ok) {
      return { state: false, error: "리뷰 작성 실패 (응답 오류)" };
    }

    revalidateTag(`/review/${movieId}}`);
    return { state: true };
  } catch (error) {
    return { state: false, error: "리뷰 작성 실패 (서버 오류)" };
  }
}
