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
      <div className={style.delete_btn}>🗑️ 리뷰 삭제하기</div>
    </div>
  );
}
