import { configureStore } from '@reduxjs/toolkit'
import { FounderReducer } from './reducers/founderReducer';

import { UsersReducer } from './reducers/usersReducer';
import { UserResReducer } from './reducers/user_responseReducer';



export const store = configureStore({
  reducer: {
    user: UsersReducer, founder: FounderReducer, response: UserResReducer

  },
})