import React, {useState} from 'react'
import AddTask from './AddTask'
import DisplayBox from './DisplayBox'

const App = () => {

    const [todos, setTodos] = useState([])

    const onAddTask = task => {
        const id = Math.random() * 1000
        const newTask = {
            id,
            task,
            completed : false
        }
        setTodos([...todos, newTask])
        console.log(todos)
    }

    const onDeleteTask = task => {
       setTodos(todos.filter(todo => todo.id !== task.id)) 
    }

    return(
        <React.Fragment>
            <AddTask 
            onAddTask = {onAddTask} />
            <DisplayBox 
            todos = {todos}
            onDeleteTask = {onDeleteTask}/>
        </React.Fragment>
    )
}

export default App