import { useState, useRef } from 'react'

import EditModal from '@/components/EditModal'

import styles from '@/style/TodoItem.module.scss'

function TodoItem({ todoItem, deleteTodo }) {

    const [todo, setTodo] = useState(todoItem)
    const [editing, setEditing] = useState(false)

    const inputRef = useRef(null)

    let viewMode = {}
    let editMode = {}

    if(editing) {
        viewMode.display = "none"
    }else{
        editMode.display = "none"
    }

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateSubmit = () => {
        setTodo({
            ...todo,
            title: inputRef.current.value
        })
        setEditing(false)
    }

    const handleChange = () => {
        setTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    return (
        <li>
            <div style={viewMode} className={styles.item}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleChange}
                />
                <span style={ todo.completed ? { textDecoration: "line-through"}: null}>
                    {todo.title}
                </span>
                <button onClick={handleEditing}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>

            <div style={editMode} className={styles.item}>
                <EditModal 
                    showModal={editing} 
                    handleModal={handleUpdateSubmit} 
                    title={todo.title}
                    inputRef = {inputRef} />
            </div>
        </li>
    )
}

export default TodoItem