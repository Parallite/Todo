import { FC } from 'react'
import { TodoTasks } from '../../types'
import { EmptyState } from '../../components/EmptyState';
import { StyledCompletedBox, } from '../../styles/StyledCompletedBox';
import { LuCheckCircle } from "react-icons/lu";

interface CompletedBoxProps {
    items: TodoTasks;
}

export const CompletedBox: FC<CompletedBoxProps> = ({
    items
}) => {
    return (
        <StyledCompletedBox>
            <h2>Завершенные задачи:</h2>
            <ul>
                {
                    items.length !== 0 ? (
                        <li data-testid='completed-task'>
                            {items.map((item) => (
                                <div key={item.id}>
                                    <p>{item.text}</p>
                                    <LuCheckCircle />
                                </div>
                            ))}
                        </li>
                    ) : (
                        <EmptyState />
                    )
                }
            </ul>
        </StyledCompletedBox>
    )
}
