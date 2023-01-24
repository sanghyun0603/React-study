import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 1, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCount(state,product){
            console.log(product)
        }
    }
  })

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
   }
}) 

export let { changeCount } = cart.actions