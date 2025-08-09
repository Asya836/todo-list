import React from 'react'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import type { todoType } from '../types/Types'

function ToDoList() {
    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div>
            {todos && todos.map((todo: todoType) => (
                <ToDo key={todo.id} todoProps={todo} />
            ))}
        </div>
    )
}

export default ToDoList