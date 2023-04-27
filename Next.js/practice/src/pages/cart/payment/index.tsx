import CardEvent from "@/components/event/Event";
import Navbar from "@/components/navbar/Navbar";
import type { ReactElement, ReactNode } from "react";
import type { NextPageWithLayout } from "@/pages/_app";

function PaymentPage() {
  return (
    <div>
      <h1 className="mt-48 text-center">결제페이지입니다.</h1>
    </div>
  );
}
PaymentPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Navbar>
      <CardEvent>{page}</CardEvent>
    </Navbar>
  );
};
export default PaymentPage;
