import { useState } from 'react'

function TodoItem({ todoItem, deleteTodo }) {
    const [todo, setTodo] = useState(todoItem)

    const handleChange = () => {
        setTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
            />
            <span style={ todoItem.completed ? { textDecoration: "line-through"}: null}>
                {todoItem.title}
            </span>
            <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
        </li>
    )
}

export default TodoItem