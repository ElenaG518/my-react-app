import React from "react";

import TaskList from "./TaskList";
import {fireEvent, render, screen } from '@testing-library/react'

describe('<TaskList />', () => {
    const tasks = [
        {label: 'Do this', completed: false},
        {label: 'Do that', completed: true},
      ];

    it('must render tasks', () => {
        render(<TaskList tasks={tasks} />); 
        const renderedTasks = tasks.map(taks => screen.getByText('Do this'));
        expect(renderedTasks.length).toBe(2);
    });

    it('must call onToggleTask with correct task index', () => {
          const mockOnToggle = jest.fn();
          render(<TaskList tasks={tasks} onToggleTask={mockOnToggle} />);
          const renderedTasks = tasks.map(task => screen.getByText(task.label));
          fireEvent.click(renderedTasks[1]);
          expect(mockOnToggle).toHaveBeenCalledWith(1);
        
    });
})