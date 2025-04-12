import style from "./review-editor.module.css";

import { createMovieReview } from "@/actions/create-review-action";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <form action={createMovieReview} className={style.form_container}>
      <input name="movieId" value={movieId} hidden readOnly />
      <textarea name="content" placeholder="리뷰 내용" />
      <div className={style.bottom_container}>
        <input name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </div>
    </form>
  );
}
