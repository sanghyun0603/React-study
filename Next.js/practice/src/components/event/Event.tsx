import { ReactNode } from "react";

interface EventPropsType {
  children: ReactNode;
}

export default function CardEvent({ children }: EventPropsType) {
  return (
    <div>
      <p>현대카드 무이자 이벤트중</p>
      {children}
    </div>
  );
}
