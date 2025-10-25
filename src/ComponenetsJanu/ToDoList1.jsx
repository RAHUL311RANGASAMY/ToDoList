import React from 'react';
import './ToDoList1.css';

const ToDoList1 = React.memo(({ data = [], setData }) => {
    console.log('ToDoList1 rendered, data length:', data.length);  // Temporary debug log
    const removeTask = (index) => {
        setData(data.filter((_, i) => i !== index));
    };

    return (
        <div className='todolist1container'>
            {data.length === 0 ? (
                <h2 className='noTasksMessage'>Add task</h2>
            ) : (
                data.map((item, index) => (
                    <div className='content' key={index}>
                        <h1 className='taskText'>{item}</h1>
                        <button onClick={() => removeTask(index)} className='removeButton'>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
});

export default ToDoList1;