import { configureStore } from '@reduxjs/toolkit'
import masterSlice from './slice/masterSlice'


export const store = configureStore({
  reducer: {
    masterSlice
  },
})