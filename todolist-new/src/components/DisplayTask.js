import React from 'react'

const DisplayTask = ({todos, onDeleteTask, onComplete}) => {

    const renderdTasks = todos.map((todo) => {
        return(
            <div key={todo.id}>
               {todo.task} 
               <button
               onClick = {() => onDeleteTask(todo)}
               >Delete</button>
               <button
               onClick = {() => onComplete(todo)}
               >Done</button>
            </div>
        )
    })

    return(
        <div>
            {renderdTasks}
        </div>
    )
}

export default DisplayTask
