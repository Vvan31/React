import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: [],
    currentColor: "#fff",
    isLoading: false,
    error: null
}

const colorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        changeColor: (state, action) => { state.currentColor = action.payload }
    }
})

export const { changeColor } = colorSlice.actions
export default colorSlice.reducer
