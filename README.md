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

# 2025.03.25

> 백엔드 서버 세팅 완료

<img src="https://github.com/user-attachments/assets/39ff770b-3879-4dc9-a0b6-e54a1a9f63b2" width="300" />

# 2025.03.26

> 전역 스타일링 및 레이아웃 설정 완료

- GlobalLayout 및 SearchableLayout 컴포넌트 생성
- "/" , "/search" : 서치박스 나타내기

# 2025.03.28

> 임시 데이터를 이용한 메인 화면 UI , 검색 결과 UI , 상세 페이지 UI 구현 완료

1. 메인 화면 UI

   <img src="https://github.com/user-attachments/assets/d6091f4f-00af-454e-9e5c-6a6deb4178a4" width="300px" />

2. 검색 결과 UI

   <img src="https://github.com/user-attachments/assets/dd50b497-690d-475c-8a9b-e5b640544ad6" width="300px" />

3. 영화 상세 UI

   <img src="https://github.com/user-attachments/assets/8223d481-1cfa-4ac3-ab1b-490c57f5c850" width="300px" />

# 2025.03.29

> 임시 데이터 파일 삭제 및 최신화 영화 데이터 업데이트로 인한 백엔드 서버 재설정 완료

1. 메인 화면 UI

   <img src="https://github.com/user-attachments/assets/229c9963-9b7b-4bc8-85b2-9d165b8172f4" width="300px" />

2. 검색 결과 UI

   <img src="https://github.com/user-attachments/assets/5645cf3e-a107-4a46-b17f-699aad32e5b7" width="300px" />

3. 영화 상세 UI

   <img src="https://github.com/user-attachments/assets/d0d75c07-7922-4f19-8c0e-8fb893bbb4af" width="300px" />

# 2025.03.31

> 기존의 SSR 방식의 페이지를 SSG 방식으로 변경

# 2025.04.01

> index/page ISR 적용 및 Page Router 버젼 vercel 배포 완료
> 각 페이지별 meta 태그 설정
> [배포 링크](https://onebite-cinema-xi.vercel.app/)

# 2025.04.02

> Onebite-cinema App Router버전 설치 완료
>
> 전역 레이아웃(글로벌 레이아웃) 및 페이지별 레이아웃(with-searchbar) <- Routes Group 설정

# 2025.04.04

> Onebite-cinema 컴포넌트 폴더생성 및 서치바 파일 생성
>
> useSearchParams() 훅을 이용하여 쿼리스트링 (q) 받아오기
>
> 👉[useRouterParams() 공식문서](https://nextjs.org/docs/app/api-reference/functions/use-search-params)

# 2025.04.05

> App Router 버전 한입 씨네마 UI 구현 및 스타일링 완료!

1. 메인 화면 UI

   <img src="https://github.com/user-attachments/assets/a4f41900-0009-47ff-b660-1067b39bec17" width="300px" />

2. 검색 결과 UI

   <img src="https://github.com/user-attachments/assets/beb5c869-e922-43be-a850-159cabbf6899" width="300px" />

3. 영화 상세 UI

   <img src="https://github.com/user-attachments/assets/2008695e-ade4-4fd3-855c-f168de83ff26" width="300px" />

# 2025.04.08

> App Router 데이터 패칭 및 각각의 캐싱 옵션 설정 완료
