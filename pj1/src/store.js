import {create} from 'zustand' // create로 zustand를 불러옵니다.
import { persist } from "zustand/middleware"; // localStorage 


const useStore = create(set => ({
  bears: 0,
  increasePopulation: (a) => {
    set(state => ({ bears : state.bears + 1 }));
  },
  removeAllBears: () => {
    // set({ bears : 0 });
    set(state => ({ bears : 0 }));
  }
}))

const testStore = create(
    persist(
      (set) => ({
        cart : [
            {id : 0, name : 'White and Black', count : 2},
            {id : 1, name : 'Grey Yordan', count : 1}
        ],
        increaseCount : (id) => {
          set(state => ({ cart : increaseCounts(state.cart, id )}));
        },
        decreaseCount : (id) => {
          set(state => ({ cart : decreaseCounts(state.cart, id )}));
        }
    }),
      { name : "cartStore"}
    )
  )

const increaseCounts = (cart,id) => {
  cart.map((item)=>{
    if (id === item.id) {
      item.count += 1;
    }
    return item
  })
  return cart
}

const decreaseCounts = (cart,id) => {
  cart.map((item) => {
    if (id === item.id && item.count > 0) {
      item.count -= 1;
    }
    return item
  })
  return cart
}

export {useStore, testStore}