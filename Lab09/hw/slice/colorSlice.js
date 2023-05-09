import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: [],
    isLoading: false,
    error: null
}

const colorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        changeColor: (state, action) => { state.color = action.payload }
    }
})

export const { changeColor } = colorSlice.actions
export default colorSlice.reducer
