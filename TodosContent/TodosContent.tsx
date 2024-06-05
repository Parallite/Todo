import { useState } from "react"
import { TodoTasks, Variant } from "../../types";
import { Form } from "../Form/Form";
import { StyledContentBox } from "../../styles/StyledContentBox";
import { StyledButtonsBox } from "../../styles/StyledButtonsBox";
import { ActiveBox } from "../ActiveBox/ActiveBox";
import { CompletedBox } from "../CompletedBox/CompletedBox";
import { VariantButton } from "../../styles/VariantButton";

const initialTasks: TodoTasks = [
    {
        id: "1",
        text: 'Выполнить тестовое задание',
        completed: false
    },
    {
        id: "2",
        text: 'Чистый код',
        completed: false
    },
    {
        id: "3",
        text: 'Покрыт тестами',
        completed: false
    }
]

export const TodosContent = () => {
    const [todosItems, setTodosItems] = useState<TodoTasks>(initialTasks);
    const [completedTodos, setCompletedTodos] = useState<TodoTasks>([])
    const [variant, setVariant] = useState<Variant>('Active');

    const addTodo = (todoText: string) => {
        const newTodo = {
            id: String(Math.floor(Math.random() * 1000)),
            text: todoText,
            completed: false
        }
        setTodosItems([...todosItems, newTodo]);
    }

    const removeTodo = (id: string) => {
        const changedTodos = todosItems.filter((todo) => todo.id !== id);
        setTodosItems(changedTodos);
    }

    const toogleCompleted = (id: string) => {
        const toogledTodos = todosItems.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo
            }
        })
        setTodosItems(toogledTodos);
    }

    const handleCompletedButton = () => {
        const newCompletedTodos = todosItems.filter((todo) => todo.completed === true);
        setCompletedTodos([...completedTodos, ...newCompletedTodos]);
        const updatedTodoItems = todosItems.filter((todo) => todo.completed !== true);
        setTodosItems(updatedTodoItems);
    }

    const toggleVariant = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const type = e.currentTarget.name;
        if (type === 'all') {
            setVariant("All");
        } else if (type === 'active') {
            setVariant("Active");
        } else {
            setVariant("Completed");
        }
    }

    return (
        <StyledContentBox>
            <div>
                <h1>Todos App</h1>
                <Form addTodo={addTodo} />
                <StyledButtonsBox>
                    <VariantButton onClick={toggleVariant} name="active" role="variant-active">Активные: {todosItems.length}</VariantButton>
                    <VariantButton onClick={toggleVariant} name="completed" role="variant-completed">Завершенные: {completedTodos.length}</VariantButton>
                    <VariantButton onClick={toggleVariant} name="all" role="variant-all">Все: {todosItems.length + completedTodos.length}</VariantButton>
                </StyledButtonsBox>
                <hr />
            </div>
            {
                variant === "All" && (
                    <>
                        <ActiveBox
                            items={todosItems}
                            toogleCompleted={toogleCompleted}
                            removeTodo={removeTodo}
                            handleCompletedButton={handleCompletedButton}
                        />
                        <CompletedBox items={completedTodos} />
                    </>
                )
            }
            {
                variant === 'Completed' && <CompletedBox items={completedTodos} />
            }
            {
                variant === 'Active' && (
                    <ActiveBox
                        items={todosItems}
                        toogleCompleted={toogleCompleted}
                        removeTodo={removeTodo}
                        handleCompletedButton={handleCompletedButton}
                    />
                )}
        </StyledContentBox>
    )
}