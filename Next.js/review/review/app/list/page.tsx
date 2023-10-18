"use client";

import { CsBtn } from "@/components/CustomButton";
import "../globals.css";
import Image from "next/image";
import { useState } from "react";

export default function list() {
  let goods = ["Tomato", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <div className="text-center">
        <div className="text-red-500">Products</div>
        {goods.map((good, i) => {
          return (
            <div className="food" key={i}>
              <Image
                src={`/food${i}.png`}
                alt="no_img"
                width={250}
                height={250}
              />
              <h4>{good}</h4>
              <div className="flex justify-around">
                <CsBtn
                  color="bg-red-300"
                  round="rounded-lg"
                  onClick={() => {
                    let temp = [...count];
                    if (temp[i] > 0) {
                      temp[i]--;
                    }

                    setCount(temp);
                  }}
                >
                  +
                </CsBtn>
                <div>{count[i]}</div>
                <CsBtn
                  color="bg-red-300"
                  round="rounded-lg"
                  onClick={() => {
                    let temp = [...count];
                    temp[i]++;
                    setCount(temp);
                  }}
                >
                  +
                </CsBtn>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
