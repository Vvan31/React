import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    size:100,
    isLoading: false,
    error: null
}

const sizeSlice = createSlice({
    name: 'size',
    initialState,
    reducers: {
        changeSize: (state, action) => { state.size = state.size + action.payload }  },
})

export const { changeSize } = sizeSlice.actions
export default sizeSlice.reducer
