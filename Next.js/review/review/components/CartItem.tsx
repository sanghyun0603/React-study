import tw from "tailwind-styled-components";

export default function CartItems({ ja }: { ja: string }) {
  return (
    <CartItem>
      <p>{ja}</p>
      <p>$40ㅇd</p>
      <p>1개</p>
    </CartItem>
  );
}

const CartItem = tw.div`
p-5 
flex 
justify-around 
border-b-2 
border-solid 
border-b-gray-500
`;
