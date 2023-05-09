import { createSlice } from '@reduxjs/toolkit';
import { getMoods } from '../api';

const initialState = {
    mood: [],
    isLoading: false,
    error: null
}

const moodSlice = createSlice({
    name: 'moods',
    initialState,
    reducers: {
        setMoods: (state, action) => {
            console.log(action)
            return action.payload
        },
        changeMood: (state, action) => { state.mood = action.payload }
    },
    extraReducers: {
        [getMoods.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        }
    }
})

export const { changeMood, setMoods } = moodSlice.actions
export default moodSlice.reducer


