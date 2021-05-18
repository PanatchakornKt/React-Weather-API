import React from 'react'

const DisplayBox = ({todos, onDeleteTask}) => {

    const renderdTasks = todos.map((todo) => {
        return(
            <div key={todo.id}>
               {todo.task} 
               <button
               onClick = {() => onDeleteTask(todo)}
               >delete</button>
            </div>
        )
    })

    return(
        <div>
            {renderdTasks}
        </div>
    )
}

export default DisplayBox