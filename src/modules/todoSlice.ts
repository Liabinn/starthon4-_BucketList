import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"
import { RootState } from "../store/store";

interface TodosType {
  id: string,
  title: string
}

const initialState: TodosType[] = [{
  id: uuidv4(),
  title: '테스트',
}]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addCard: (state, action) => {
      return [action.payload, ...state]
    },
    deleteCard: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export default todoSlice.reducer;
export const {addCard, deleteCard} = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todoSlice;