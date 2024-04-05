"use client";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
const storedTodoList =
  typeof window !== "undefined" ? window.localStorage.getItem("tasks") : [];

const initialState = {
  tasks: typeof storedTodoList === "string" ? JSON.parse(storedTodoList) : [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(
      state,
      action: { payload: { icon: any; label: string; color: any } }
    ) {
      console.log("Add Task", addTask);
      const id = Math.random().toString(36).substring(2, 15);

      const tasks = [...state.tasks, { id, ...action.payload }];
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    removeTask: (state, action) => {
      const taskList = [...current(state.tasks)];
      let newTaskList = taskList.filter((task) => task.id !== action.payload);
      state.tasks = newTaskList;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
