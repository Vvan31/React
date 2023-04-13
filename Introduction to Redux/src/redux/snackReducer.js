const initialState = {
    snackData: [
        { id: 1, food: "Doritos", quantity: 10 },
        { id: 2, food: "Cheetos", quantity: 5 },
        { id: 3, food: "Chips Ahoy", quantity: 2 },
        { id: 4, food: "Kit Kat", quantity: 8 },
        { id: 5, food: "Senbei", quantity: 6 },
    ],
    drinkData:[
        { id: 1, drink: "Coke", quantity: 10 },
        { id: 2, drink: "Pepsi", quantity: 5 },
        { id: 3, drink: "Sprite", quantity: 2 },
        { id: 4, drink: "Fanta", quantity: 8 },
        { id: 5, drink: "Dr. Pepper", quantity: 6 },
        { id: 6, drink: "Mountain Dew", quantity: 6}

    ]
}

export const snackReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SNACK_QUANTITY":
            const newSnackState = state.snackData.map(snack => {
                return snack.id !== action.payload.id
                ? snack
                : action.payload.operator === "+"
                ? { ...snack, quantity: snack.quantity + 1 }
                : { ...snack, quantity: snack.quantity - 1 }
            })

            return {
                ...state,
                snackData: newSnackState
            }
        case "UPDATE_DRINK_QUANTITY":
            const newDrinkState = state.drinkData.map(drink => {
                return drink.id !== action.payload.id
                ? drink
                : action.payload.operator === "+"
                ? { ...drink, quantity: drink.quantity + 1 }
                : { ...drink, quantity: drink.quantity - 1 }
            })

            return {
                ...state,
                drinkData: newDrinkState
            }
        default:
            return state
    }
}