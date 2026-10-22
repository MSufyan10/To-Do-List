import React, {useState} from 'react'

function ToDoList(){


    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleinputchange(){
        setNewTask(event.target.value);
    }

    function addtask(){

        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask]);
            setNewTask("")
        }

        
    }

    function deletetask(index){
        
        const updatedtasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedtasks);
    }

    function movetaskup(index){
        if (index > 0) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index -1]] =
            [updatedtasks[index -1], updatedtasks[index]];
            setTasks(updatedtasks)
        }


    }

    function movetaskdown(index){
        if (index < tasks.length -1) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index +1]] =
            [updatedtasks[index +1], updatedtasks[index]];
            setTasks(updatedtasks)
        }
    }

    return(
        <div className='todolist'>

            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder='Enter a Task...' value={newTask} onChange={handleinputchange} />
                <button className='addbutton' onClick={addtask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((tasks, index) => 
                    <li key={index}>
                        <span className='text'> {tasks} </span>
                        <button className='deletebutton' onClick={() => deletetask(index)}>
                                Delete
                        </button>

                         <button className='movebutton' onClick={() => movetaskup(index)}>
                                Up
                        </button>

                        <button className='movebutton' onClick={() => movetaskdown(index)}>
                                Down
                        </button>
                    </li>
                )}
            </ol>

        </div>
    );

}

export default ToDoList