import Navbar from "@/components/navbar/Navbar";
import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

export default function Home({}: NextPageWithLayout) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      여긴 메인페이지이다. ddddddddddddd
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Navbar>{page}</Navbar>;
};
