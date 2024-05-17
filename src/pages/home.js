import './home.css'
import { task } from '../tasks';
export const Home=()=>{

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    const clearAll=()=>{
        document.getElementById('input_taskheading').value=""
        document.getElementById('input_taskdescription').value=""
        document.getElementById('input_enddate').value=""
    }


    return(
        <div className="todolist-background">
            <div className='todolist-container'>
                <div className='todolist-head'>

                </div>
                <div className='addtask-container'>
                    <p className='username'>Username</p>
                    <input type='text' className='input-taskheading' placeholder='Task Heading' id='input_taskheading'/>
                    <input type='text' className='input-taskdescription' placeholder='Task Description' id='input_taskdescription'/>
                    <input type='date' className='input-enddate' min={getTodayDate()} id='input_enddate'/>
                    <button className='button-addtask'>Add Task</button>
                    <button className='button-clearall' onClick={clearAll}>Clear All</button>
                </div>
                <div className='task-container'>
                    {task.map((element) =>(
                        <li key={element.sno}>
                            <div className='each-task'>
                                <p className='p-sno'>{element.sno}</p>
                                <p className='p-taskheading'>{element.taskHeading}</p>
                                <p className='p-taskdescription'>{element.taskDescription}</p>
                                <p className='p-enddate'><input type='text' className='enddate' value={element.taskEnddate} readOnly/></p>
                                <p className='p-remainingDays' id='days_remaining'>Days Remaining 12</p>
                                <button className='button-edit'>Edit</button>
                                <button className='button-done'>Done</button>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}