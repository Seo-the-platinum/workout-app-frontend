import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import recordsReducer from '../features/records/recordsSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    records: recordsReducer,
  },
})