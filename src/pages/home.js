import './home.css'
// import { task } from '../tasks';
export const Home=()=>{

    let count=Number(1);

    function getTodayTime() {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        return hours+":"+minutes;
      }

    const clearAll=()=>{
        document.getElementById('input_taskheading').value=""
        document.getElementById('input_taskdescription').value=""
        document.getElementById('input_endtime').value=""
    }

    function is_alpha_contain(sender_alpha_contain){
        for(let i=0;i<sender_alpha_contain.length;i++){
            if(sender_alpha_contain[i]!==" "){
                return true;
            }
          }
          return false;
    }

    const addTask=()=>{

        let thead=document.getElementById('input_taskheading').value
        let tdesc=document.getElementById('input_taskdescription').value
        let tend=document.getElementById('input_endtime').value

        if(is_alpha_contain(thead.toLowerCase()) && is_alpha_contain(tdesc.toLowerCase()) && tend!==""){
            let hours_end=tend.slice(0,2)
            let minutes_end=tend.slice(3,5)
            if(hours_end[0]==='0')
                hours_end=hours_end[1]
            if(minutes_end[0]==='0')
                minutes_end=minutes_end[1]

            const time=new Date()
            let hours_now=time.getHours()
            let minutes_now=time.getMinutes()
            if(hours_now[0]==='0')
                hours_now=hours_now[1]
            if(minutes_now[0]==='0')
                minutes_now=minutes_now[1]

            let minutes_left=(Number(hours_end)-Number(hours_now))*60+(Number(minutes_end)-Number(minutes_now))

            document.getElementById('input_taskheading').value=""
            document.getElementById('input_taskdescription').value=""
            document.getElementById('input_endtime').value=""
            
            let task_container=document.getElementById('task_container')

            let each_task=document.createElement('div')
            each_task.className='each-task'
            each_task.id='task_'+count
            
            let p_sno=document.createElement('p')
            p_sno.className='p-sno'
            p_sno.textContent=count

            let p_taskheading=document.createElement('p')
            p_taskheading.className='p-taskheading'
            p_taskheading.textContent=thead

            let p_taskdescription=document.createElement('p')
            p_taskdescription.className='p-taskdescription'
            p_taskdescription.textContent=tdesc

            let p_endtime=document.createElement('p')
            p_endtime.className='p-endtime'
            p_endtime.textContent="End Time:"+tend

            let p_remainingdays=document.createElement('p')
            p_remainingdays.className='p-remainingDays'
            p_remainingdays.textContent="Time left :"+minutes_left+" minutes."

            let button_edit=document.createElement('button')
            button_edit.className='button-edit'
            button_edit.innerHTML='Edit'

            let button_done=document.createElement('button')
            button_done.className='button-done'
            button_done.innerHTML='Done'
            button_done.id='button_'+count
            button_done.addEventListener('click', (e)=>{
                task_container.removeChild(document.getElementById('task_'+e.target.id.slice(7,8)))
                console.log(document.querySelector('.task-container'))
            })

            each_task.appendChild(p_sno)
            each_task.appendChild(p_taskheading)
            each_task.appendChild(p_taskdescription)
            each_task.appendChild(p_endtime)
            each_task.appendChild(p_remainingdays)
            each_task.appendChild(button_edit)
            each_task.appendChild(button_done)

            task_container.appendChild(each_task)

            count=count+1

        }
        else{
            alert('Enter the details that are asked properly')
        }
        console.log(document.querySelector('.task-container'))
        

    }

    return(
        <div className="todolist-background">
            <div className='todolist-container'>
                <div className='addtask-container'>
                    <p className='username'>Username</p>
                    <input type='text' className='input-taskheading' placeholder='Task Heading' id='input_taskheading'/>
                    <input type='text' className='input-taskdescription' placeholder='Task Description' id='input_taskdescription'/>
                    <input type='time' className='input-endtime' min={getTodayTime()} id='input_endtime'/>
                    <button className='button-addtask' onClick={addTask}>Add Task</button>
                    <button className='button-clearall' onClick={clearAll}>Clear All</button>
                </div>
                <div className='task-container' id='task_container'>
                </div>
            </div>
        </div>
    )
}