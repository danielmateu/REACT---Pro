import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoItem } from "./TodoItem"
import { useTodos } from "../hooks/useTodos"
import { Title } from "./Title"


export const TodoList = () => {

    // const { todoState } = useContext(TodoContext)
    // console.log(todoState);
    // const { todos } = todoState

    const {todos, pendingTodos} = useTodos()

    console.log(pendingTodos);

    return (
        <>
            {/* <h1>TodoList Component</h1> */}
            <Title/>
            <ul>
                {
                    todos.map(todo => <TodoItem
                        key={todo.id}
                        todo={todo}
                    />)
                }
            </ul>
        </>
    )
}
