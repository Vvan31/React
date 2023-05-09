import { Provider } from 'react-redux'
import { legacy_createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'

// import { rootReducer } from './reducers'
import { rootReducer } from './slice'

let middleware = [thunk]
if (import.meta.env.DEV) {
    middleware = [...middleware, logger]
}

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = legacy_createStore(persistedReducer, applyMiddleware(...middleware))
const store = configureStore({
    reducer: persistedReducer,
    middleware
})
const persistor = persistStore(store)

export const AppProvider = ({ children }) => (
    <Provider store={store}>
        <PersistGate persistor={persistor} >
            {children}
        </PersistGate>
    </Provider>
)