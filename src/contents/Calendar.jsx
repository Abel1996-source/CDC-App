import {Link} from 'react-router-dom'

const Calendar=()=>{
   
    return(
        <>
           <div className="overview">
           <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Calendar</li>
                </ol>
            </nav>
            <hr />
            </div>
        </>
    )
}
export default Calendar;