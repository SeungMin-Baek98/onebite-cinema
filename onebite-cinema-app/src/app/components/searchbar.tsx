"use client";

import style from "./searchbar.module.css";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const q = useSearchParams().get("q");
  const router = useRouter();

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onSearch = () => {
    if (!search || q === search) {
      return;
    } else {
      router.push(`/search?q=${search}`);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        placeholder="검색어를 입력하세요 ..."
      />
      <button onClick={onSearch}>검색</button>
    </div>
  );
}
