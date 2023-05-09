import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { batch } from 'react-redux'

// import { setSnacks } from '../actions/snackActions'
// import { setDrinks } from '../actions/drinkAction'
// import { setDataFetched } from '../actions/isDataFetchedAction'
import { setSnacks } from '../slice/snackSlice'
import { setDrinks } from '../slice/drinkSlice'
import { setIsDataFetched } from '../slice/isDataFetchedSlice'

const URL = "https://gist.githubusercontent.com/andasan/9813b43095e8b135285b0e9e11e98d7e/raw/28cf4ed3ec4e520a9229f8367310ea24834b4b96/inventory.json"

export const getSnacks = createAsyncThunk(
    "inventory/getSnacks",
    async () => {
        const response = await axios.get(URL)
        return response.data.snackData
    }
)

export const getDrinks = createAsyncThunk(
    "inventory/getDrinks",
    async () => {
        const response = await axios.get(URL)
        return response.data.drinksData
    }
)

export const fetchData = () => {

    return async (dispatch) => {
        try {
            const response = await axios.get(URL)

            batch(() => {
                dispatch(setSnacks(response.data.snackData))
                dispatch(setDrinks(response.data.drinksData))
                dispatch(setIsDataFetched())
            })
        } catch (error) {
            console.error(error)
        }
    }
}


