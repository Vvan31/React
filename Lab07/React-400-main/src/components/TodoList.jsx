import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodoList({ todos, deleteTodo }) {
    
    return (
        <ul>
            {todos?.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todoItem={todo}
                    deleteTodo={deleteTodo}
                />
            )}
        </ul>
    )
}

export default TodoList