import {configureStore } from '@reduxjs/toolkit'
import appChatReducer from './reducers/appChatReducer'

export const store = configureStore ({
    reducer: {
        appChatReducer: appChatReducer,
    }
})