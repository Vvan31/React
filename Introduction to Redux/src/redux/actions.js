export const snackUpdate = (operator, id) => {
    return {
        type: "UPDATE_SNACK_QUANTITY",
        payload: { operator, id }
    }
}
export const drinkUpdate = (operator, id) => {
    return {
        type: "UPDATE_DRINK_QUANTITY",
        payload: { operator, id }
    }
}