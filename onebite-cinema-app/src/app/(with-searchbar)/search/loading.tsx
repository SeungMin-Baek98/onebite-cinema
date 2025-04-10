import style from "./loading.module.css";

export default function Loading() {
  return (
    <div className={style.loading_container}>
      <p>Loading ...</p>
    </div>
  );
}
