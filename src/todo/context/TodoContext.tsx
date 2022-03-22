import { createContext, useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

export type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: (id:string) => void,
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({type: 'TOGGLE_TODO', payload: {id}})
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}