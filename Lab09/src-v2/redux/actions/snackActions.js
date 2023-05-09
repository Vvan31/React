import { ADD_SNACK_QTY, REMOVE_SNACK_QTY, SET_SNACKS } from '../constants/actionTypes'

export const addSnackQty = (id) => ({
    type: ADD_SNACK_QTY,
    payload: id
})

export const removeSnackQty = (id) => {
    return {
        type: REMOVE_SNACK_QTY,
        payload: id
    };
}

export const setSnacks = (snacks) => {
    return {
        type: SET_SNACKS,
        payload: snacks
    };
}