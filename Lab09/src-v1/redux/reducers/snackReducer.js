import { createAction, createReducer} from '@reduxjs/toolkit'
import { SET_SNACKS, ADD_SNACK_QTY, REMOVE_SNACK_QTY } from '../constants/actionTypes'

const addSnackQty = createAction(ADD_SNACK_QTY);
const removeSnackQty = createAction(REMOVE_SNACK_QTY);
const setSnack = createAction(SET_SNACKS);

const snackReducer = createReducer([], {
  [addSnackQty]: (state, action) => {
    return state.map(snack => {
      if(snack.id === action.payload){
        return {...snack, quantity: snack.quantity + 1}
      }

      return snack
    })
  },
  [removeSnackQty]: (state, action) => {
    return state.map(snack => {
      if(snack.id === action.payload){
        return {...snack, quantity: snack.quantity - 1}
      }

      return snack
    })
  },
  [setSnack]: (state, action) => {
    return action.payload;
  }
})

export {
  addSnackQty,
  removeSnackQty,
  setSnack,
  snackReducer
}