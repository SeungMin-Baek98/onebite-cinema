"use client";

import { useActionState, useRef } from "react";
import { toast } from "react-toastify";

import { reviewDeleteButton } from "@/actions/delete-review-action";

export default function ReviewDeleteButton({
  reviewId,
  movieId,
}: {
  reviewId: number;
  movieId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    async (_: any, formData: FormData) => {
      const result = await reviewDeleteButton(_, formData);

      if (result?.state) {
        toast.success("리뷰가 성공적으로 삭제되었습니다!", {
          position: "bottom-center",
          theme: "dark",
          toastId: "review",
        });
      } else {
        toast.error(result.error ?? "리뷰 삭제에 실패하였습니다.", {
          position: "bottom-center",
          theme: "dark",
        });
      }

      return result;
    },
    null
  );
  return (
    <form action={formAction} ref={formRef}>
      <input name="reviewId" value={reviewId} hidden readOnly />
      <input name="movieId" value={movieId} hidden readOnly />
      <div onClick={() => formRef.current?.requestSubmit()}>
        {isPending ? "🗑️ 리뷰 삭제중 ..." : "🗑️ 리뷰 삭제하기"}
      </div>
    </form>
  );
}
