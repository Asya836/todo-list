import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { todoInitialState, todoType } from '../types/Types'

const getInitialTodos = (): todoType[] => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
};

const initialState: todoInitialState = {
    todos: getInitialTodos()
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: todoInitialState, actions: PayloadAction<todoType>) => {
            state.todos.push(actions.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo: (state: todoInitialState, actions: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo: todoType) => todo.id !== actions.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo: (state: todoInitialState, actions: PayloadAction<todoType>) => {
            state.todos = state.todos.map((todo: todoType) => todo.id !== actions.payload.id ? todo : actions.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
})

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer