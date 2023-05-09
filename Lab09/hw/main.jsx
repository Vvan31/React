import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {combineReducers, configureStore} from '@reduxjs/toolkit'

import { Provider } from 'react-redux'

// Slice reducer
import moodSlice  from './slice/moodSlice'
import  colorSlice  from './slice/colorSlice'
import  sizeSlice from './slice/sizeSlice'

// root reducer
const rootReducer = combineReducers({
  mood: moodSlice,
  color: colorSlice,
  size: sizeSlice
})

const store = configureStore({ 
  reducer: rootReducer,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
)
