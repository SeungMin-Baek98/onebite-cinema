import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Home() {
  const router = useRouter();
  const onClickDetail = () => {
    router.push("/movie/123");
  };
  return (
    <>
      <div style={{ margin: "20px 0px" }}>
        임시 버튼 - 클릭 시 서치바 사라짐
      </div>

      <button onClick={onClickDetail}>상세 페이지 이동</button>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
