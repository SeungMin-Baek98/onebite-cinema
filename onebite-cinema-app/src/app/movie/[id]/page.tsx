import style from "./page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${(await params).id}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return <div>책 정보를 불러오는데 실패하였습니다 ...</div>;
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
