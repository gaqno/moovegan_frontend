import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/users/usersApiSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>