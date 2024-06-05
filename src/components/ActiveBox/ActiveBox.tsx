import { FC } from 'react'
import { TodoTasks } from '../../types'
import { EmptyState } from '../../components/EmptyState';
import { ActiveTodoItem } from '../../components/ActiveTodoItem';

import { StyledTasksBox } from '../../styles/StyledTasksBox';
import { StyledActiveBox } from '../../styles/StyledActiveBox';
import { Button } from '../../styles/StyledButton';

interface ActiveBoxProps {
    items: TodoTasks;
    toogleCompleted: (id: string) => void;
    removeTodo: (id: string) => void;
    handleCompletedButton: () => void;
}

export const ActiveBox: FC<ActiveBoxProps> = ({
    items,
    toogleCompleted,
    removeTodo,
    handleCompletedButton
}) => {
    return (
        <StyledActiveBox>
            <h2>Активные задачи:</h2>
            <ul>
                {
                    items.length !== 0 ? (
                        items.map((item) => (
                            <StyledTasksBox key={item.id}>
                                <ActiveTodoItem
                                    item={item}
                                    toogleCompleted={toogleCompleted}
                                    removeTodo={removeTodo}
                                />
                            </StyledTasksBox>
                        ))
                    ) : (
                        <EmptyState />
                    )
                }
            </ul>
            {
                items.length !== 0 && (
                    <Button
                        role='toCompleted'
                        $primary
                        type='button'
                        onClick={handleCompletedButton}
                    >
                        Переместить в "Завершенные"
                    </Button>
                )
            }
        </StyledActiveBox>
    )
}
