import { ADD_DRINK_QTY, REMOVE_DRINK_QTY, SET_DRINKS } from '../constants/actionTypes'

export const addDrinkQty = (id) => ({
    type: ADD_DRINK_QTY,
    payload: id
})

export const removeDrinkQty = (id) => {
    return {
        type: REMOVE_DRINK_QTY,
        payload: id
    };
}

export const setDrinks = (drinks) => {
    return {
        type: SET_DRINKS,
        payload: drinks
    };
}