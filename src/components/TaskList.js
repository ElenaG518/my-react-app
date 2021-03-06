import React from "react";
import Task from "./Task";

const TaskList = ({tasks, onToggleTask}) => {
    if (tasks?.length > 0) {
        return (
    
        <ul>
            {tasks.map((task, idx) => 
            <Task key={idx} task={task} onToggle={() => onToggleTask(idx)}/>
            )}
        </ul>
    );
    } else {
        return ('Loading...');
    }
    
};

export default TaskList;