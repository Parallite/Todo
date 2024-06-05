import { TodosContent } from './TodosContent';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('TodosContent component', () => {
    beforeEach(() => {
        render(<TodosContent />);
    });
    it('checking tasks after preccing buttons: All, Active, Completed', () => {
        const variantActive = screen.getByRole('variant-active') as HTMLButtonElement;
        const variantCompleted = screen.getByRole('variant-completed') as HTMLButtonElement;
        const variantAll = screen.getByRole('variant-all') as HTMLButtonElement;
        expect(screen.getAllByRole('checkbox').length).toBe(3);

        userEvent.click(variantAll)
        expect(screen.getAllByRole('checkbox').length).toBe(3);

        userEvent.click(variantCompleted);
        const emptyMessage = screen.getByTestId('empty-list');
        expect(emptyMessage).toBeInTheDocument();

        userEvent.click(variantActive);
        expect(screen.getAllByRole('checkbox').length).toBe(3);
    });
    it('checking tasks after add new task', () => {
        const input = screen.getByPlaceholderText(/введите имя задачи/i) as HTMLInputElement;
        const button = screen.getByText(/добавить новую задачу/i) as HTMLButtonElement;
        fireEvent.change(input, { target: { value: 'Написать тесты' } });
        expect(input.value).toBe('Написать тесты');

        userEvent.click(button);
        expect(input.value).toBe('');

        expect(screen.getAllByRole('checkbox').length).toBe(4);
    });

    it('checking tasks after changing status task to completed status', async () => {
        const variantCompleted = screen.getByRole('variant-completed') as HTMLButtonElement;
        userEvent.click(variantCompleted);
        const emptyMessage = screen.getByTestId('empty-list');
        expect(emptyMessage).toBeInTheDocument();

        const variantActive = screen.getByRole('variant-active') as HTMLButtonElement;
        userEvent.click(variantActive);
        const firstLabel = screen.getByLabelText(/выполнить тестовое задание/i);
        userEvent.click(firstLabel);
        expect(firstLabel).toBeChecked();
        const button = screen.getByRole('toCompleted') as HTMLButtonElement;
        userEvent.click(button);

        userEvent.click(variantCompleted);
        expect((await screen.findAllByRole('completed-task')).length).toBe(1);
    });

    it('checking active tasks after remove one task', async () => {
        const variantActive = screen.getByRole('variant-active') as HTMLButtonElement;
        userEvent.click(variantActive);
        expect(screen.getAllByRole('checkbox').length).toBe(3);

        const buttons = screen.getAllByRole('remove');
        const firstButton = buttons[0] as HTMLButtonElement;
        userEvent.click(firstButton);

        expect(screen.getAllByRole('checkbox').length).toBe(2)
    });
});