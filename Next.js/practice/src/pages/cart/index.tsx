import Link from "next/link";
import CardEvent from "../../components/event/Event";

const CartPage = () => {
  return (
    <div>
      <h1 className="mt-48 text-center">장바구니페이지이다.</h1>
      <div className="flex flex-row justify-between">
        <div>
          <button className=" text-red-600 text-3xl hover:text-blue-500">
            <Link href="/cart/payment">결제하기</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
CartPage.getLayout = CardEvent;

export default CartPage;
