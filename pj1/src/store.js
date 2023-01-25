import {create} from 'zustand' // create로 zustand를 불러옵니다.

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
function increaseCounts(ca,id) {
  ca.map((cas)=>{
    if (id === cas.id) {
      cas.count += 1;
    }
    return cas
  })
  return ca
}
const testStore = create(set => ({
    cart : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1}
    ],
    increaseCount : (id) => {
      set(state => ({ cart : increaseCounts(state.cart,id)}));
    }
}))

export {useStore, testStore}