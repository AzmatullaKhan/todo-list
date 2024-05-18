export const AddTask=()=>{

    function is_alpha_contain(sender_alpha_contain){
        for(let i=0;i<sender_alpha_contain.length;i++){
            if(sender_alpha_contain[i]!==" "){
                return true;
            }
          }
          return false;
    }

    const change=()=>{

        let addtask_thead=document.getElementById('addtask_input_taskheading').value
        let addtask_tdesc=document.getElementById('addtask_input_taskdescription').value
        let addtask_tend=document.getElementById('addtask_input_endtime').value
        let addtask_tstart=document.getElementById('addtask_input_starttime').value

        if(is_alpha_contain(addtask_thead.toLowerCase()) && is_alpha_contain(addtask_tdesc.toLowerCase()) && addtask_tend!=="" && addtask_tstart!==""){
            let id_main=document.getElementById('id_holder').value
            document.getElementById('taskheading_'+id_main).textContent=document.getElementById('addtask_input_taskheading').value
            document.getElementById('taskdescription_'+id_main).textContent=document.getElementById('addtask_input_taskdescription').value
            document.getElementById('endtime_'+id_main).textContent="End Time:"+document.getElementById('addtask_input_endtime').value
            document.getElementById('starttime_'+id_main).textContent="Start Time:"+document.getElementById('addtask_input_starttime').value


            let addtask_tend=document.getElementById('addtask_input_endtime').value
            let addtask_hours_end=addtask_tend.slice(0,2)
            let addtask_minutes_end=addtask_tend.slice(3,5)
            if(addtask_hours_end[0]==='0')
                addtask_hours_end=addtask_hours_end[1]
            if(addtask_minutes_end[0]==='0')
                addtask_minutes_end=addtask_minutes_end[1]

            // const time=new Date()
            let addtask_hours_now=addtask_tstart.slice(0,2)
            let addtask_minutes_now=addtask_tstart.slice(3,5)
            if(addtask_hours_now[0]==='0')
                addtask_hours_now=addtask_hours_now[1]
            if(addtask_minutes_now[0]==='0')
                addtask_minutes_now=addtask_minutes_now[1]

            let addtask_minutes_left=(Number(addtask_hours_end)-Number(addtask_hours_now))*60+(Number(addtask_minutes_end)-Number(addtask_minutes_now))
            document.getElementById('remainingtime_'+id_main).textContent="Time alotted :"+addtask_minutes_left+" minutes"

            document.getElementById('addtask-background').className='addtask-hidden'
        }
        else{
            alert('Enter the details that are asked properly')
        }
    }

    const close=()=>{
        document.getElementById('addtask-background').className='addtask-hidden'
    }

    return(
        <div className='addtask-container'>
            <input type="number" style={{display:"none"}} id='id_holder'/>
            <input type='text' className='input-taskheading' placeholder='Task Heading' id='addtask_input_taskheading'/>
            <input type='text' className='input-taskdescription' placeholder='Task Description' id='addtask_input_taskdescription'/>
            <input type='time' className='input-endtime' id='addtask_input_starttime'/>
            <input type='time' className='input-endtime' id='addtask_input_endtime'/>
            <button className='button-addtask' onClick={change}>Change</button>
            <button className='button-addtask' onClick={close}>Close</button>
        </div>
    )
}