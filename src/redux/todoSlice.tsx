import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { todoInitialState, todoType } from '../types/Types'

const initialState: todoInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: todoInitialState, actions: PayloadAction<todoType>) => {
            state.todos.push(actions.payload)
        },
        deleteTodo: (state: todoInitialState, actions: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo: todoType) => todo.id !== actions.payload)
        },
        updateTodo: (state: todoInitialState, actions: PayloadAction<todoType>) => {
            state.todos = state.todos.map((todo: todoType) => todo.id !== actions.payload.id ? todo : actions.payload)
        }
    }
})

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer