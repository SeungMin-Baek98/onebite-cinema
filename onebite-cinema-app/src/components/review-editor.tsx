"use client";

import style from "./review-editor.module.css";

import { createMovieReview } from "@/actions/create-review-action";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  const router = useRouter();
  const [state, actionForm, isPending] = useActionState(
    async (_: any, formData: FormData) => {
      const result = await createMovieReview(_, formData);

      if (result?.state) {
        toast.success("리뷰 작성을 완료하였습니다.", {
          position: "bottom-center",
          theme: "dark",
          toastId: "review",
        });
      } else {
        toast.error(result?.error ?? "리뷰 작성에 실패하였습니다.", {
          position: "bottom-center",
          theme: "dark",
        });
      }
    },
    null
  );
  return (
    <form action={actionForm} className={style.form_container}>
      <input name="movieId" value={movieId} hidden readOnly />
      <textarea name="content" placeholder="리뷰 내용" disabled={isPending} />
      <div className={style.bottom_container}>
        <input name="author" placeholder="작성자" disabled={isPending} />
        <button type="submit">{isPending ? "작성중 ..." : "작성하기"}</button>
      </div>
      <ToastContainer
        pauseOnHover={false}
        autoClose={1500}
        position="bottom-center"
        hideProgressBar
        toastClassName="toast-blur"
      />
    </form>
  );
}
