import { Table} from 'react-bootstrap';
import {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "./../store.js";

function Cart(){
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    console.log(state.cart)
    return(
    <Table>
    <thead>
        <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경하기</th>
        </tr>
    </thead>
    <tbody>
    {
        state.cart.map((product,i)=>
        <tr key={i}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.count}</td>
        <td><button onClick={({product})=>{
            dispatch(changeCount(product))
        }}>수량증가</button></td>
        </tr>
        )
    }
    </tbody>
    </Table> 
    )
}



export default Cart;