import tw from "tailwind-styled-components";
import CartItems from "@/components/CartItem";

export default function Cart() {
  let jang: string[] = ["Tomatos", "Pasta"];
  return (
    <div>
      <h1 className="text-center">장바구니입니다.</h1>
      {jang.map((ja, i) => {
        return <CartItems ja={ja} key={i} />;
      })}
    </div>
  );
}
