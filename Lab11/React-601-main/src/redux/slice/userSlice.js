import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        unSetUser: (state) => {
            state.user = null
        }
    }
})

export const { setUser, unSetUser } = userSlice.actions
export default userSlice.reducer