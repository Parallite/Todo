import { FC, useState } from 'react'
import { TodoTask } from '../../types'
import { Button } from '../../styles/StyledButton';

interface ActiveTodoItemProps {
    item: TodoTask;
    toogleCompleted: (id: string) => void;
    removeTodo: (id: string) => void;
}

export const ActiveTodoItem: FC<ActiveTodoItemProps> = ({
    item,
    toogleCompleted,
    removeTodo
}) => {
    const [checked, setChecked] = useState<boolean>(false);

    const toogleCheckbox = () => {
        setChecked(!checked)
        toogleCompleted(item.id)
    }

    const handleClick = () => {
        removeTodo(item.id)
    }

    return (
        <div>
            <div>
                <input
                    role='checkbox'
                    id={item.id}
                    type="checkbox"
                    checked={checked}
                    onChange={toogleCheckbox}
                />
                <label htmlFor={item.id}>{item.text}</label>
            </div>
            <Button
                role='remove'
                $widthSmall
                $primary
                onClick={handleClick}>
                X
            </Button>
        </div>
    );
}