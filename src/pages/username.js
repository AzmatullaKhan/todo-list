
export const Username=()=>{
    const setUserName=()=>{
        document.getElementById('username-space').textContent=document.getElementById('username').value

        document.getElementById('username_main').className='username-hidden'
    }
    return(
        <>
            <input type="text" id="username" placeholder="Enter User Name" className="username-input"/>
            <button className="username-submit" onClick={setUserName}>Submit</button>
        </>
    )
}

