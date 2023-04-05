
import { useTodos } from '../hooks/useTodos'

export const Title = () => {

    const {pendingTodos} = useTodos()

    return (
        <h1>Todo List Pendientes: {pendingTodos}</h1>
    )
}
