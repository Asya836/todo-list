import React, { useState } from 'react'
import '../css/create.css'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { createTodo } from '../redux/todoSlice';
import type { todoType } from '../types/Types';


function ToDoCreate() {

    const dispatch = useDispatch();

    const [newtodo, setNewtodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newtodo.trim().length === 0) {
            alert("Lütfen todo giriniz!")
        } else {
            const payload: todoType = {
                id: Math.floor(Math.random() * 1000),
                description: newtodo
            }
            dispatch(createTodo(payload))
            setNewtodo('')
        }
    }

    return (
        <div className='todo-create'>
            <input value={newtodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewtodo(e.target.value)} type='text' placeholder='To Do Ekle' />
            <button onClick={handleCreateTodo}>OLUŞTUR</button>
        </div>
    )
}

export default ToDoCreate