import React from "react";

import TaskList from "./TaskList";
import {render, screen } from '@testing-library/react'

describe('<TaskList />', () => {
    it('must render tasks', () => {
        const tasks = ['Do this', 'Do that', 'Do nothing'];
        render(<TaskList tasks={tasks} />); 

        const renderedTasks = tasks.map(taks => screen.getByText('Do this'));
        expect(renderedTasks.length).toBe(3);
    })
})