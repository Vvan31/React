import { combineReducers } from 'redux'
import { snackReducer } from './snackReducer'
import { drinkReducer } from './drinkReducer'
import { isDataFetchedReducer } from './isDataFetchedReducer'

export const rootReducer = combineReducers({
    snacksData: snackReducer,
    drinksData: drinkReducer,
    isDataFetched: isDataFetchedReducer
})