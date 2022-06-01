import React from 'react'

import Task from './Task';
import {fireEvent, render, screen} from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';

describe('<Task />', () => {
    const completedTask = {
        label: 'Do this',
        completed: true
    };

    const uncompletedTask = {
        label: 'Do that',
        completed: false
    };

    it('renders the task', () => {
        render(<Task task={completedTask}/>);
        expect(screen.getByText(completedTask.label)).toBeInTheDocument();
    });

    it('assigns completed class', () => {
        render(<Task task={completedTask}/>);
        expect(screen.getByText(completedTask.label)).toHaveClass('completed');

        render(<Task task={uncompletedTask}/>);
        expect(screen.getByText(uncompletedTask.label)).not.toHaveClass('completed');
    });

    it('fires onToggle callback', async () => {
        const mockToggleClass = jest.fn();
        render(<Task task={completedTask} onToggle={mockToggleClass}/>);
        const taskNode = screen.getByText(completedTask.label);
        fireEvent.click(taskNode);
        expect(mockToggleClass).toHaveBeenCalled();
    });
});