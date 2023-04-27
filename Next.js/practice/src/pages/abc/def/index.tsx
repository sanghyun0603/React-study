import Navbar from "@/components/navbar/Navbar";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@/pages/_app";

export default function Homework() {
  return (
    <div>
      <h1>def페이지입니다.</h1>
    </div>
  );
}

Homework.getLayout = function getLayout(page: ReactElement) {
  return <Navbar>{page}</Navbar>;
};
