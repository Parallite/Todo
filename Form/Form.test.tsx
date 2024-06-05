import { Form } from './Form';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
    const addTodo = jest.fn();
    beforeEach(() => {
        render(<Form addTodo={addTodo} />);
    });
    it('render input element', () => {
        expect(screen.getByRole('todo')).toBeInTheDocument();
    });
    it('render input element with placeholder "Введите имя задачи"', () => {
        expect(screen.getByPlaceholderText(/введите имя задачи/i)).toBeInTheDocument();
    });
    it('render button element', () => {
        expect(screen.getByText(/добавить новую задачу/i)).toBeInTheDocument();
    });
    it('button is disabled', () => {
        expect(screen.getByText(/добавить новую задачу/i)).toBeDisabled();
    });
    it('button is not disabled with inputs filled', () => {
        const input = screen.getByPlaceholderText(/введите имя задачи/i) as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'Написать тесты' } });

        expect(input.value).toBe('Написать тесты');
        expect(screen.getByText(/добавить новую задачу/i)).not.toBeDisabled();
    });
    it('the input is cleared after the button is pressed', () => {
        const input = screen.getByPlaceholderText(/введите имя задачи/i) as HTMLInputElement;
        const button = screen.getByText(/добавить новую задачу/i) as HTMLButtonElement;
        fireEvent.change(input, { target: { value: 'Написать тесты' } });
        expect(input.value).toBe('Написать тесты');

        userEvent.click(button);
        expect(input.value).toBe('');
    });
});