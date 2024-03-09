import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    todoSlice,
  }
})

// redux store의 state type
export type RootState = ReturnType<typeof store.getState>;
// redux action을 dispatch하는 함수의 type
export type AppDispatch = typeof store.dispatch;

export default store;