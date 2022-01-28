import { useState } from "react";

import Task from './Task'

const Header = () =>{

    const amanjimahan = (e) =>{
        changeTaskContainer( (prevElement)=>{

            let tempArray = prevElement.props.newTask;
            tempArray.splice(e,1);
            
            return <Task onselect={amanjimahan} newTask={tempArray} />
            
        })
    }

    const [newTask , updateTask] = useState("");

    const changeTask = (element)=>{
        updateTask(element.target.value)
    }
    
    const [taskContainer , changeTaskContainer] = useState(<Task newTask={[]} />)
    
    const submitTask = () =>{

        changeTaskContainer( (prevElement)=>{

            return <Task onselect={amanjimahan} newTask={[...prevElement.props.newTask,
                newTask]} />

        })
        
        updateTask("")
    }


    return<>
        
        <div id="heading">
            Todo List
        </div>
        <div id="input">
            <input type="text" placeholder="Enter task..." value={newTask} name="task" onChange={changeTask} />
            <button onClick={submitTask} >+</button>
        </div>
        {taskContainer}

    </>
}

export default Header;