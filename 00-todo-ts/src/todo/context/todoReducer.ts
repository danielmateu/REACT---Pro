

import { Todo, TodoState } from '../interfaces/interfaces';

type TodoAction =
    | { type: 'addTodo', payload: Todo }
    | { type: 'deleteTodo', payload: { id: string } }
    | { type: 'toggle', payload: { id: string } }
    | { type: 'edit', payload: { id: string, description: string } }
    | { type: 'completeAll' } | { type: 'clearCompleted' };

export const todoReducer = (state: TodoState, action: TodoAction) => {

    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoCount: state.todoCount + 1,
                pendingCount: state.pendingCount + 1
            };
        
        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
                todoCount: state.todoCount - 1,
                completedCount: state.completedCount - (state.todos.find(todo => todo.id === action.payload.id)?.completed ? 1 : 0),
                pendingCount: state.pendingCount - (!state.todos.find(todo => todo.id === action.payload.id)?.completed ? 1 : 0)
            };

        case 'toggle':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
                completedCount: state.completedCount + (state.todos.find(todo => todo.id === action.payload.id)?.completed ? -1 : 1),
                pendingCount: state.pendingCount + (!state.todos.find(todo => todo.id === action.payload.id)?.completed ? -1 : 1)
            };

        case 'edit':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, description: action.payload.description } : todo)
            };

        case 'completeAll':
            return {
                ...state,
                todos: state.todos.map(todo => ({ ...todo, completed: true })),
                completedCount: state.todoCount,
                pendingCount: 0
            };

        case 'clearCompleted':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed),
                completedCount: 0,
                pendingCount: state.todoCount
            };

        default:
            break;
    }
}
