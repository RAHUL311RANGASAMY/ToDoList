// import React, { useRef, useState } from 'react'
// import './ToDo.css'
// import ToDoList1 from './ToDoList1';
// const ToDo = () => {
//     const [data,setData]=useState([]);
//     const inputRef=useRef(null);

//     const addTask = () => {
//     const task = inputRef.current.value.trim(); // Trim to avoid adding empty spaces
//     if (task) {
//       setData([...data, task]); // Add the task to the list
//       inputRef.current.value = ''; // Clear the input field
//     }
//   };
//   return (
//     <div className='todoContainer'>
//        <h1>ToDoList</h1>
//         <input ref={inputRef} type="text" placeholder='Enter your task'/>
//         <button onClick={()=>{addTask()}}>Add</button>
//         {/*<button onClick={()=>{setData([...data,inputRef.current.value=' '])}}>Add</button>*/}
//       {/* {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})} */}
//         <ToDoList1  data={data} setData={setData}/>
//     </div>
//   )
// }

// export default ToDo


import React, { useRef, useState, useEffect } from 'react';  // Added useEffect
import './ToDo.css';
import ToDoList1 from './ToDoList1';

const ToDo = () => {
    const [data, setData] = useState([]);
    const inputRef = useRef(null);

    // Load data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('todoData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    // Save data to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(data));
    }, [data]);

    const addTask = () => {
        const task = inputRef.current.value.trim(); // Trim to avoid adding empty spaces
        if (task) {
            setData([...data, task]); // Add the task to the list
            inputRef.current.value = ''; // Clear the input field
        }
    };

    return (
        <div className='todoContainer'>
            <h1 className='todoTitle'>ToDoList</h1>
            <input ref={inputRef} type="text" placeholder='Enter your task' className='todoInput' />
            <button onClick={() => { addTask() }} className='addButton'>Add</button>
            <ToDoList1 data={data} setData={setData} />
        </div>
    );
};

export default ToDo;