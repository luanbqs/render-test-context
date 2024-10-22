import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ToDosSlice {
  toDos: ToDo[];
}

const initialState: ToDosSlice = {
  toDos: [
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 3,
      text: "Build something fun!",
      completed: false,
    },
  ],
};

export const toDosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.toDos.push({
        text: action.payload,
        id: Number(Math.random().toFixed(5)) * 100000,
        completed: false,
      });
    },
    remove: (state, action) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
    },
    edit: (state, action: PayloadAction<ToDo>) => {
      state.toDos = state.toDos.map((toDo) => {
        if (toDo.id === action.payload.id) {
          return {
            ...toDo,
            ...action.payload,
          };
        }
        return toDo;
      });
    },
  },
  selectors: {
    selectToDos: (state) => state.toDos,
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, edit } = toDosSlice.actions;
export const { selectToDos } = toDosSlice.selectors;

export default toDosSlice.reducer;
