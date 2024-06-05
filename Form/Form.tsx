import React, { FC, useState } from 'react'
import { StyledTasksForm } from '../../styles/StyledTasksForm';
import { Button } from '../../styles/StyledButton';

interface FormProps {
    addTodo: (todoText: string) => void;
}

export const Form: FC<FormProps> = ({
    addTodo,
}) => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue('')
        if (value) {
            addTodo(value);
            setValue('')
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <StyledTasksForm onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo">Имя задачи</label>
                <input
                    role='todo'
                    value={value}
                    id='todo'
                    type="text"
                    onChange={handleChange}
                    placeholder='Введите имя задачи'
                />
            </div>
            <Button disabled={!value} role='button'>Добавить новую задачу</Button>
        </StyledTasksForm>
    )
}
