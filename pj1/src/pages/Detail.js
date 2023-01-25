import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import {useStore} from '../store.js';

function Detail(){
    const { bears, increasePopulation, removeAllBears } = useStore(state => state)

    return(
        <div>
            <h1>{bears} around here ...</h1>
            <button onClick={increasePopulation}>one up</button>
            <button onClick={removeAllBears}>remove all</button>
            <p>test</p>
        </div>
    )
}

export default Detail;