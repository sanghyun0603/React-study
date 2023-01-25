import {create} from 'zustand' // create로 zustand를 불러옵니다.

const useStore = create(set => ({
  bears: 0,
  increasePopulation: (a) => {
    console.log(a);  
    console.log(useStore.bears);
    set(state => ({ bears : state.bears + 1 }));
  },
  removeAllBears: () => {
    // set({ bears : 0 });
    set(state => ({ bears : 0 }));
  }
}))

const testStore = create(set => ({
    cart : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1}
    ],
    increaseCount : (id) => {
      console.log(id);

    }
}))

export {useStore, testStore}