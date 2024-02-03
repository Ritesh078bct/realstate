import { configureStore } from '@reduxjs/toolkit'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import userReducer from "./user/userSlice.js"

export default configureStore({
  reducer: {user:useReducer},
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  }),

})