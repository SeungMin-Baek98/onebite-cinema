import ReviewDeleteButton from "./review-delete-button";
import style from "./review-item.module.css";

import { ReviewData } from "@/types";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.container_header}>
        <span className={style.author}>{author}</span>
        <span className={style.created_at}>
          {new Date(createdAt).toLocaleString()} 작성됨
        </span>
      </div>

      <div className={style.content}>{content}</div>
      <div className={style.delete_btn}>
        <ReviewDeleteButton reviewId={id} movieId={id} />
      </div>
    </div>
  );
}
