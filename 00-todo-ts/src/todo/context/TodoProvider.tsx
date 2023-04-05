

import { useReducer } from 'react'
import { TodoState } from '../interfaces/interfaces'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'

interface props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            description: 'Recolectar la piedra del infinito',
            completed: false,
        },
        {
            id: '2',
            description: 'Recolectar la piedra del alma',
            completed: false,
        },
    ],
    completedCount: 0,
    pendingCount: 2,

}


const TodoProvider = ({ children }: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({
            type: 'toggle',
            payload: { id },
        })
    }

    return (
        <TodoContext.Provider
            value={{
                todoState,
                toggleTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoProvider
}

export default TodoContext

