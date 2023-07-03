import {Link} from 'react-router-dom'
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar=()=>{
    const [selectedDate, setSelectedDate] = useState([
        { title: 'Événement 1', date: '2023-07-01' },
        { title: 'Événement 2', date: '2023-07-05' },
        { title: 'Événement 3', date: '2023-07-10' },
        { title: 'Événement 4', date: '2023-09-01' }
        ]);

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
            <div className="content-calendar">
                <div className="calendar-header">
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Add a new event " aria-label="text"/>
                        <input className="form-control me-2" type="date" placeholder="Add event date" aria-label="date"/>
                        <button className="btn btn-primary" type='submit'>Add</button>
                    </form>
                </div>
                <hr />
                <div className="calendar-body">
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={selectedDate}
                    />
                </div>
            </div>
            </div>
        </>
    )
}
export default Calendar;