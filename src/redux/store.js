import { configureStore } from '@reduxjs/toolkit'

import { UsersReducer } from './reducers/usersReducer';



export const store = configureStore({
  reducer: {
    user: UsersReducer

  },
})