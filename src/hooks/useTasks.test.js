import { renderHook, act } from '@testing-library/react';
import useTasks from './useTasks';
import {getTasks, createTask as apiCreateTask, updateTask} from '../api';

// this is just a little hack to silence a warning that we'll get until we
// upgrade to 16.9. See also: https://github.com/facebook/react/pull/14853
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})


// Generator Function in jest.mock
// jest.mock('../api', () => ({
//     getTasks: jest.fn()
// }));
jest.mock('../api');

describe('#useTasks', () => {
    it('must request tasks', async () => {
        const { result, hydrate } = renderHook(() => useTasks());
        expect(result.current[0]).toBe(null);

        hydrate();

        expect(result.current[0].length).toBe(2);
        expect(result.current[0][0].label).toBe('Do this');
        expect(getTasks).toHaveBeenCalled();
    });

    it('must create tasks', async () => {
        const {result, hydrate} = renderHook(() => useTasks());
        hydrate();

        const [,{createTask}] = result.current;
        await act(() => createTask('New task!'));

        const [tasks] = result.current;
        expect(tasks[tasks.length - 1]).toEqual({id: expect.anything(), label: 'New task!', completed: false});
        expect(apiCreateTask).toHaveBeenCalledWith('New task!');
    });

    it('must update tasks', async () => {
        const {result, hydrate} = renderHook(() => useTasks());
        hydrate();
        const [tasks, {toggleTask}] = result.current;

        await act(() => toggleTask(0));
        expect(updateTask).toHaveBeenCalledWith({...tasks[0], completed: !tasks[0].completed});
        expect(updateTask).toHaveBeenCalled();

    });
});