import Navbar from "@/components/navbar/Navbar";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Image from "next/image";
import food from "../../../public/food0.png";

const List = () => {
  let arr = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <div className="text-center font-bold">Products</div>
      {arr.map((data, i) => {
        return (
          <div className="food" key={i}>
            <Image src={food} alt="no_img" />
            <h4>{data} $40</h4>
          </div>
        );
      })}
    </div>
  );
};

List.getLayout = function getLayout(page: ReactElement) {
  return <Navbar>{page}</Navbar>;
};

export default List;
