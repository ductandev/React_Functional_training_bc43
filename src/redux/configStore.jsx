import {configureStore } from '@reduxjs/toolkit'
import appChatReducer from './reducers/appChatReducer'
import userReducer from './reducers/userReducer'
import quanLyPhimReducer from './reducers/quanLyPhimReducer'
import modalReducer from './reducers/modalReducer'

export const store = configureStore ({
    reducer: {
        appChatReducer: appChatReducer,
        userReducer:userReducer,
        quanLyPhimReducer: quanLyPhimReducer,
        modalReducer: modalReducer,
    }
})