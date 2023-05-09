import { createSlice } from '@reduxjs/toolkit'
import { getDrinks } from '../middleware/api'

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

const drinkSlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        addDrinkQty: (state, action) => {
            return state.map(drink => {
                if (drink.id === action.payload) {
                    return { ...drink, quantity: drink.quantity + 1 }
                }

                return drink
            })
        },
        removeDrinkQty: (state, action) => {
            return state.map(drink => {
                if (drink.id === action.payload) {
                    return { ...drink, quantity: drink.quantity - 1 }
                }

                return drink
            })
        },
        setDrinks: (state, action) => {
            console.log(action)
            return action.payload
        }
    },
    extraReducers: {
        [getDrinks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        [getDrinks.pending]: (state) => {
            state.isLoading = true
        }
    }
})

export const { addDrinkQty, removeDrinkQty, setDrinks } = drinkSlice.actions
export default drinkSlice.reducer