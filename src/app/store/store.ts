import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/loginUser";
import taskReducer from "./reducer/taskStore";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const makeStore = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppStore = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
