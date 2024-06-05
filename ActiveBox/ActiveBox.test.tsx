import { ActiveBox } from './ActiveBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('ActiveBox component', () => {
    const toogleCompleted = jest.fn();
    const removeTodo = jest.fn();
    const handleCompletedButton = jest.fn();
    beforeEach(() => {
        const tasks = [{
            id: '1',
            text: 'написать тесты',
            completed: false
        },
        {
            id: '2',
            text: 'написать другие тесты',
            completed: false
        }]
        render(<ActiveBox
            items={tasks}
            toogleCompleted={toogleCompleted}
            removeTodo={removeTodo}
            handleCompletedButton={handleCompletedButton}
        />
        );
    });
    it('tasks render', () => {
        expect(screen.getAllByRole('checkbox').length).toBe(2);
    });
    it('render button element', () => {
        const button = screen.getByRole('toCompleted') as HTMLButtonElement;
        expect(button).toBeInTheDocument();
    });
    it('render X button elements', () => {
        expect(screen.getAllByRole('remove').length).toBe(2);
    });
    it('removeTodo called on click X button', () => {
        const buttons = screen.getAllByRole('remove');
        const firstButton = buttons[0] as HTMLButtonElement;

        userEvent.click(firstButton);
        expect(removeTodo).toHaveBeenCalledTimes(1);
    });
    it('checking selection checkbox by label', () => {
        const checkboxes = screen.getAllByRole('checkbox');
        const firstCheckbox = checkboxes[0];
        expect(firstCheckbox).not.toBeChecked();
        const firstLabel = screen.getByLabelText(/написать тесты/i);
        userEvent.click(firstLabel);
        expect(firstCheckbox).toBeChecked();
    });
    it('handleCompletedButton called on click toCompleted button', () => {
        const checkboxes = screen.getAllByRole('checkbox');
        const firstCheckbox = checkboxes[0];
        const firstLabel = screen.getByLabelText(/написать тесты/i);
        const button = screen.getByRole('toCompleted') as HTMLButtonElement;

        userEvent.click(firstLabel);
        expect(firstCheckbox).toBeChecked();

        userEvent.click(button)
        expect(toogleCompleted).toHaveBeenCalledTimes(1)
        expect(handleCompletedButton).toHaveBeenCalledTimes(1)
    });
});