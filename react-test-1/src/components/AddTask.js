import React, {useState} from 'react'

const AddTask = ({todos, onAddTask}) => {

    const [task, setTask] = useState('')

    return(
        <div>
        <label>Task</label>
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