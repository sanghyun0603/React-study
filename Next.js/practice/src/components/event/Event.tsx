import { ReactNode } from "react";

interface EventPropsType {
  children: ReactNode;
}

export default function Event({ children }: EventPropsType) {
  return (
    <div>
      <p>현대카드 무이자 이벤트중</p>
      {children}
    </div>
  );
}
