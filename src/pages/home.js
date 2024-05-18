import './home.css'
import {Username} from './username'
import {AddTask} from './addTask'
import { Report } from './report';


export const Home=()=>{

    let no_of_tasks_done=Number(0);
    let no_of_tasks_total=Number(0);
    let no_of_tasks_removed=Number(0);
    
    window.addEventListener('beforeunload',(e)=>{
        e.preventDefault();
    })

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
        document.getElementById('input_starttime').value=""

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
        let tstart=document.getElementById('input_starttime').value


        if(is_alpha_contain(thead.toLowerCase()) && is_alpha_contain(tdesc.toLowerCase()) && tend!==""){
            let hours_end=tend.slice(0,2)
            let minutes_end=tend.slice(3,5)
            if(hours_end[0]==='0')
                hours_end=hours_end[1]
            if(minutes_end[0]==='0')
                minutes_end=minutes_end[1]

            // const time=tstart
            let hours_now=tstart.slice(0,2)
            let minutes_now=tstart.slice(3,5)
            if(hours_now[0]==='0')
                hours_now=hours_now[1]
            if(minutes_now[0]==='0')
                minutes_now=minutes_now[1]

            let minutes_left=(Number(hours_end)-Number(hours_now))*60+(Number(minutes_end)-Number(minutes_now))

            document.getElementById('input_taskheading').value=""
            document.getElementById('input_taskdescription').value=""
            document.getElementById('input_endtime').value=""
            document.getElementById('input_starttime').value=""
            
            let task_container=document.getElementById('task_container')

            let each_task=document.createElement('div')
            each_task.className='each-task'
            each_task.id='task_'+count
            
            let p_sno=document.createElement('p')
            p_sno.className='p-sno'
            p_sno.textContent=count

            let p_taskheading=document.createElement('p')
            p_taskheading.className='p-taskheading'
            p_taskheading.id='taskheading_'+count
            p_taskheading.textContent=thead

            let p_taskdescription=document.createElement('p')
            p_taskdescription.className='p-taskdescription'
            p_taskdescription.id="taskdescription_"+count
            p_taskdescription.textContent=tdesc

            let p_starttime=document.createElement('p')
            p_starttime.className='p-endtime'
            p_starttime.id="starttime_"+count
            p_starttime.textContent="Start Time:"+tstart

            let p_endtime=document.createElement('p')
            p_endtime.className='p-endtime'
            p_endtime.id="endtime_"+count
            p_endtime.textContent="End Time:"+tend

            let p_remainingtime=document.createElement('p')
            p_remainingtime.className='p-remainingtime'
            p_remainingtime.id='remainingtime_'+count
            p_remainingtime.textContent="Time alotted :"+minutes_left+" minutes."

            let button_edit=document.createElement('button')
            button_edit.className='button-edit'
            button_edit.innerHTML='Edit'
            button_edit.id='edit_'+count
            button_edit.addEventListener('click', (e)=>{

                document.getElementById('addtask-background').className='addtask-background'

                let th=document.getElementById('taskheading_'+e.target.id.slice(5,6)).textContent
                let td=document.getElementById('taskdescription_'+e.target.id.slice(5,6)).textContent
                let te=document.getElementById('endtime_'+e.target.id.slice(5,6)).textContent
                let ts=document.getElementById('starttime_'+e.target.id.slice(5,6)).textContent

                document.getElementById('addtask_input_taskheading').value=th
                document.getElementById('addtask_input_taskdescription').value=td
                document.getElementById('addtask_input_endtime').value=te.slice(9)
                document.getElementById('addtask_input_starttime').value=ts.slice(11)
                document.getElementById('id_holder').value=e.target.id.slice(5,6)

            })

            let button_done=document.createElement('button')
            button_done.className='button-done'
            button_done.innerHTML='Done'
            button_done.id='button_'+count
            button_done.addEventListener('click', (e)=>{
                task_container.removeChild(document.getElementById('task_'+e.target.id.slice(7,8)))
                console.log(document.querySelector('.task-container'))
                no_of_tasks_done+=1
            })

            let img_del=document.createElement('img')
            img_del.src=require('../images/delete.png')
            img_del.className='del-image'
            img_del.id='imagee_'+count
            img_del.addEventListener('click', (e)=>{
                task_container.removeChild(document.getElementById('task_'+e.target.id.slice(7,8)))
                console.log(document.querySelector('.task-container'))
                no_of_tasks_removed+=1
            })

            each_task.appendChild(p_sno)
            each_task.appendChild(p_taskheading)
            each_task.appendChild(p_taskdescription)
            each_task.appendChild(p_starttime)
            each_task.appendChild(p_endtime)
            each_task.appendChild(p_remainingtime)
            each_task.appendChild(button_edit)
            each_task.appendChild(button_done)
            each_task.appendChild(img_del)

            task_container.appendChild(each_task)

            count=count+1
            no_of_tasks_total+=1

        }
        else{
            alert('Enter the details that are asked properly')
        }

    }

    const checkStartTime=()=>{
        const d=new Date()
        let today_hours_now=d.getHours()
        let today_minutes_now=d.getMinutes()
        
        let start_time=document.getElementById('input_starttime').value
        let start_hours=Number(start_time.slice(0,2))
        let start_minutes=(Number(start_time.slice(0,2))-today_hours_now)*60+Number(start_time.slice(3,5))

        if(today_hours_now===start_hours && today_minutes_now<start_minutes){
            return true
        }
        else if(today_hours_now<start_hours){
            return true
        }
        else{
            document.getElementById('input_starttime').value=""
            alert('The alloted task start time must be above '+today_hours_now+" hours "+today_minutes_now+" miuntes")
        }
    }

    const checkEndTime=()=>{
        let start_hours_now=Number(document.getElementById('input_starttime').value.slice(0,2))
        let start_minutes_now=Number(document.getElementById('input_starttime').value.slice(3,5))

        if(document.getElementById('input_starttime').value===""){
            alert("Select start time first which is left side of this input")
            document.getElementById('input_endtime').value=""
        }
        else{
            let end_time=document.getElementById('input_endtime').value
            let end_hours=Number(end_time.slice(0,2))
            let end_minutes=Number(end_time.slice(3,5))

            if(start_hours_now===end_hours && start_minutes_now<end_minutes){
                return true
            }
            else if(start_hours_now<end_hours){
                return true
            }
            else{
                document.getElementById('input_endtime').value=""
                alert('The alloted task start time must be above '+start_hours_now+" hours "+start_minutes_now+" miuntes")
            }
        }
        
    }

    const generateReport=()=>{
        document.getElementById('report-background').className='report-background'
        
       document.getElementById('report-total').textContent="Total Task Generated :"+no_of_tasks_total
       document.getElementById('report-done').textContent="Total Task Generated :"+no_of_tasks_done
       document.getElementById('report-removed').textContent="Total Task Generated :"+no_of_tasks_removed
    
    }

    return(
        <div className="todolist-background">
            <div className='todolist-container'>
                <div className='addtask-container'>
                    <p className='username' id='username-space'>Username</p>    
                    <input type='text' className='input-taskheading' placeholder='Task Heading' id='input_taskheading'/>
                    <input type='text' className='input-taskdescription' placeholder='Task Description' id='input_taskdescription'/>
                    <input type='time' className='input-endtime' min={getTodayTime()} id='input_starttime' onChange={checkStartTime}/>
                    <input type='time' className='input-endtime' min={getTodayTime()} id='input_endtime' onChange={checkEndTime}/>
                    <button className='button-addtask' onClick={addTask}>Add Task</button>
                    <button className='button-clearall' onClick={clearAll}>Clear All</button>
                </div>
                <div className='task-container' id='task_container'>
                </div>
                <button className='button-report' onClick={generateReport}>Generate Report</button>
            </div>
            <div style={{position:"absolute"}}>
                {/* <Username /> */}
                <div className="username-main" id='username_main'><Username /></div>
                <div className='addtask-hidden' id='addtask-background'><AddTask /></div>
                <div className='report-hidden' id='report-background'><Report /></div>
            </div>
        </div>
    )
}