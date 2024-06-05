import { CompletedBox } from './CompletedBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CompletedBox component', () => {
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
        render(<CompletedBox
            items={tasks}
        />
        );
    });
    it('tasks render', () => {
        expect(screen.getByText('написать тесты')).toBeInTheDocument();
        expect(screen.getByText('написать другие тесты')).toBeInTheDocument();
    });
});