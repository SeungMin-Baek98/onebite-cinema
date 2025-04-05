import style from "./page.module.css";

const movie = {
  id: 13,
  title: "극장판 진격의 거인 완결편 더 라스트 어택",
  releaseDate: "2025-03-13",
  company: "㈜애니플러스",
  genres: ["애니메이션"],
  subTitle: "더 라스트 어택",
  description:
    '"이것이 최후의 "진격"---!" 거인의 위협으로부터 몸을 지키기 위해 거대한 벽을 쌓고 그 안에서 숨을 죽이고 살고 있는 인류. 백 년의 평화는 초대형 거인의 습격으로 파괴됐고, 어머니를 잃은 소년 엘런 예거는 모든 거인을 없앨 것을 맹세하고 거인과 싸우는 조사병단의 일원이 되었다. 글자 그대로 목숨을 건 싸움 속에서 엘런 예거는 자신도 거인이 되는 능력을 손에 넣었고 인류의 승리에 공헌하면서 조금씩 세계의 진실에 가까워지고 있었다. 이윽고 시간이 흘러 벽 밖으로 나간 엘런은 조사병단의 동료들과 갈라섰고 어떤 무시무시한 계획을 실행한다. 수많은 거인을 이끌고, 이 세계의 살아있는 모든 것들을 짓밟는 「땅울림」. 미카사와 아르민을 시작으로 남겨진 자들은 세계를 멸망시키려 하는 엘런을 막기 위해 최후의 싸움에 나선다.',
  runtime: 144,
  posterImgUrl:
    "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250307_77%2F1741311863302jElLf_JPEG%2Fmovie_image.jpg",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
