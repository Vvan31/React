import { combineReducers } from 'redux'
import drinkSliceReducer from './drinkSlice'
import snackSliceReducer from './snackSlice'
import isDataFetchedSliceReducer from './isDataFetchedSlice'

export const rootReducer = combineReducers({
    snacksData: snackSliceReducer,
    drinksData: drinkSliceReducer,
    isDataFetched: isDataFetchedSliceReducer
})