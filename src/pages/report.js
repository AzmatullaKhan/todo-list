
export const Report=()=>{

    const closeReport=()=>{
        document.getElementById('report-background').className='report-hidden'
    }

    return(
        <div className="report-main">
            <p id="report-total"></p><br></br>
            <p id="report-done"></p><br></br>
            <p id="report-removed"></p><br></br>
            <button className="button-report-close" onClick={closeReport}>Close</button>
        </div>
    )
}