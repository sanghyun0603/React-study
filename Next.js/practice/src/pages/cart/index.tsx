import Link from "next/link";
import CardEvent from "../../components/event/Event";
import Navbar from "@/components/navbar/Navbar";
import type { ReactElement, ReactNode } from "react";
import type { NextPageWithLayout } from "../_app";
import Hello from "@/components/homework/Hello";
//index.tsx 등 대충만드는 컴포넌트들은 전부 server component이다.
// 장점 : 페이지 로드시 자바스크립트가 별로 필요가 없어서 빠름
// 단점 : html 안에 자바스크립트 못 넣습니다. useState, useEffect, onClick 이런거 사용불가능하다.
// 컴포넌트 만들 때 페이지 맨 위에 'use client' 라는 코드를 넣으면 그 밑에 있는 모든 컴포넌트들은 client component가 된다.
// 장점 : html 안에 자바스크립트 넣어서 기능개발 가능
// 단점 : 쓸데없는 자바스크립트로 인해 페이지 용량도 커지고 페이지 로딩속도로 약간 느려진다.
// 특히 client compoonent를 로드하려면 hydration이라는 과정을 거치게 되는데 html을 로드하고나서 거기에 리액트 문법을 적용하기 위해
/// 컴퓨터가 html을 읽고 분석하는 과정이 필요한데 그걸 hydration이라고 부른다.

// 큰 페이지들은 보통 server component로 만들고
// 자바스크립트 기능이 필요한 특정 부분은 client component로 만들어서 넣는게 좋은 습관이다.

const CartPage = () => {
  return (
    <div>
      <h1 className="mt-48 text-center">장바구니페이지이다.</h1>
      <Hello />
      <div className="flex flex-row justify-between">
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <div>
          <button className=" text-red-600 text-3xl hover:text-blue-500">
            <Link href="/cart/payment">결제하기</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
CartPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Navbar>
      <CardEvent>{page}</CardEvent>
    </Navbar>
  );
};

export default CartPage;
