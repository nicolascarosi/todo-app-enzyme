import { useTodos } from "../hooks/useTodos";

export const Title = () => {

    const { pendingTodos } = useTodos();

    return (
        <h1>
            Todos: <b data-testid="pending-todos">{pendingTodos}</b>
        </h1>
    )
}