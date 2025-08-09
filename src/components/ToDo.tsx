import React, { useState } from 'react'
import '../css/todos.css'
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import type { todoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todoSlice';
import { FaCheck } from "react-icons/fa";


interface todoProps {
    todoProps: todoType
}

function ToDo({ todoProps }: todoProps) {
    const { id, description } = todoProps

    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(description)

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }

    const handleUpdateTodo = () => {
        const payload: todoType = {
            id: id,
            description: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false)
    }

    return (
        <div className='list-container'>
            {editable ? <input type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> :
                <div className='list'>{description}</div>}
            <div className='list-item'>
                <MdDelete onClick={handleDeleteTodo} />
                {editable ? <FaCheck onClick={handleUpdateTodo} /> : <HiPencilAlt onClick={() => setEditable(true)} />}

            </div>
        </div>
    )
}

export default ToDo