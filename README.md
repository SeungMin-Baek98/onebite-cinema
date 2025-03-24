# `ONEBITE-CINEMA`

- 한 입 크기로 잘라먹는 Next.js 일일 챌린지와 함께 진행될 예정인 한입 씨네마 프로젝트 입니다.
- [한 입 크기로 잘라먹는 Next.js(v15) 강의](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)
  ![onebite-cinema](https://github.com/user-attachments/assets/08d05f7d-9987-48e1-a6af-b07d6712022a)

# 2025. 03.24

> Next App (Page Router) 버전 생성 완료

- 각 페이지별 라우팅 설정

  - "/" : 인덱스 페이지
  - "/search" : 검색 페이지 ← `useRouter()` 훅을 활용하여 `query` 프로퍼티로 쿼리 스트링 값 받아오기 완료!
  - "/movie/[id]" : 영화 상세 페이지 ← `useRouter()` 훅을 활용하여 query 프로퍼티로 상세 페이지의 `id` 값 받아오기 완료!

- "next.config.mjs"

```TypeScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // true -> false로 변경
};

export default nextConfig;

```
