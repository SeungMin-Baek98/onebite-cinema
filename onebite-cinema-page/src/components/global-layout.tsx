import style from "./global-layout.module.css";
import Link from "next/link";

import { ReactNode } from "react";

// 전역에 보여질 글로벌 레이아웃
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
