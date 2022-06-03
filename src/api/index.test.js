import {createTask, getTasks, updateTask} from './index';

describe('#createTask', () => {
    it('must create task', async () => {
        fetch.mockResponseOnce(JSON.stringify({id: 2, label: 'Do this too', completed: false}));

        const result = await createTask('Do this too');

        expect(result).toEqual({id: 2, label: 'Do this too', completed: false});
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/tasks/), {
            method: 'POST',
            body: JSON.stringify({label: 'Do this too', completed: false})
        });
    });
});

describe('#updateTask', () => {
    it('must update a task', async () => {
        fetch.mockResponseOnce(JSON.stringify({id: 1, label: 'Do this', completed: true}));

        const result = await updateTask({id: 1, label: 'Do this', completed: true});

        expect(result).toEqual({id: 1, label: 'Do this', completed: true});
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/tasks\/1/), {
            method: 'PUT',
            body: JSON.stringify({id: 1, label: 'Do this', completed: true})
        });
    });
});

describe('#getTasks', () => {
    it('must get tasks', async () => {
        fetch.mockResponseOnce(JSON.stringify([{id: 1, label: '1', completed: true}]));
    
        let result = await getTasks();

        expect(result.length).toEqual(1);
        expect(result[0]).toEqual({id: 1, label: '1', completed: true});
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/tasks/));
    });
});