import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import {useStore, testStore} from '../store.js';

function Detail(){
    const { bears, increasePopulation, removeAllBears } = useStore(state => state);
    const { cart, increaseCount } = testStore(state => state);
    return(
        <div>
            <h1>{bears} around here ...</h1>
            <button onClick={increasePopulation}>one up</button>
            <button onClick={removeAllBears}>remove all</button>
            <p>test</p>
            {
              cart.map((data,i)=>{
                return (
                  <div key = {i}>
                    <h2>{data.name}</h2>
                    <h3>{data.count}
                      <button onClick={()=>{increaseCount(data.id)}}>
                        +
                      </button>
                    </h3>
                  </div>
                )
              })
            }
        </div>
    )
}

export default Detail;