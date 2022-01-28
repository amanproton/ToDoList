const Task = (props) =>{

    const deleteItem = (item) =>{
        console.log(item.target.key)
    }

    return<>
        <div id="tasks">

            {
                props.newTask.map( (element , index)=>{
                    return <div 
                        key={index}
                        className="task">{element} 
                        
                        <i 
                            onClick={()=>{
                                props.onselect(index)
                            }} 
                            className='bx bx-trash'>    
                        </i>
                    
                    </div>
                })
            }
    
        </div>
    </>
}

export default Task;