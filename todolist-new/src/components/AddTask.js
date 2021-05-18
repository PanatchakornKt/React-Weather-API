import React, {useState} from 'react'

const AddTask = ({todos, onAddTask}) => {

    const [task, setTask] = useState('')

    return(
        <div>
        <h1>Todo List</h1>
        <label>Add task</label>
        <input 
            type = "text"
            value = {task}
            onChange = {e => setTask(e.target.value)}
        />
        <button onClick = {() => onAddTask(task)} >Add</button>
        </div>
    )
}

export default AddTask