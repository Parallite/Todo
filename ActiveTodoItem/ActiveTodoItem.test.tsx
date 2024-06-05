import { ActiveTodoItem } from './ActiveTodoItem';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('ActiveTodoItem component', () => {
    const toogleCompleted = jest.fn();
    const removeTodo = jest.fn();
    beforeEach(() => {
        const task = {
            id: '1',
            text: 'написать тесты',
            completed: false
        }
        render(<ActiveTodoItem
            item={task}
            toogleCompleted={toogleCompleted}
            removeTodo={removeTodo}
        />
        );
    });
    it('task render', () => {
        expect(screen.getAllByRole('checkbox').length).toBe(1);
    });
    it('render X button element', () => {
        expect(screen.getAllByRole('remove').length).toBe(1);
    });
    it('removeTodo called on click X button', () => {
        const button = screen.getByRole('remove');
        userEvent.click(button);
        expect(removeTodo).toHaveBeenCalledTimes(1);
    });
    it('checking selection checkbox by label', () => {
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
        userEvent.click(screen.getByLabelText(/написать тесты/i));
        expect(checkbox).toBeChecked();
    });
});
