import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { createevent, getevent } from '../axios/events/eventRequest';
import Alert from '../components/nexts/Alert';
import { DecodeToken } from "../DecodeToken";
import ModaleCalendar from '../components/nexts/ModaleCalendar';
import { Button } from '@mui/material';

const Calendar=()=>{
    const [selectedDate, setSelectedDate] = useState({
        name:"",
        date:""
    });
    const [showToast, setShowToast] = useState(false);
    const [info,setInfo]=useState('')
    const [event,setEvent]=useState([]);
    const [open, setOpen] = useState(false);
    const [eventid,setEventid]=useState({})

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        createevent(DecodeToken().userId,selectedDate).then((res)=>{
             
            setSelectedDate({
                name:"",
                date:""
            })
            chargementdesevenements();//chargement des évenements
            setShowToast(true)
            setInfo(res.data.message)   
        }).catch((err)=>{
            //console.log(err);
            setShowToast(true)
            setInfo(err.response.data.message)
         })
    }

    const handleChange=(event)=>{
        setSelectedDate({...selectedDate,[event.target.name]:event.target.value})
    }
    const chargementdesevenements=()=>{
        getevent(DecodeToken().userId).then((res)=>{
            setEvent(res.data.donnees)
            
        }).catch((err)=>{
            console.log(err.response.data.message);
        })
    }

    const handlemodale=(event)=>{
        setOpen(true)
        setEventid(event)
    }
    useEffect(()=>{
        chargementdesevenements();//chargement des évenements
    },[])

   
   const selecteEvent=event.map(item => ({id:item.id,title: item.name, date: item.date }));
    return(
        <>
           <div className="overview">
            {
                <Alert showToast={showToast} setShowToast={setShowToast} > {info} </Alert>
            }
            {
                <ModaleCalendar  chargementdesevenements={ chargementdesevenements} setInfo={setInfo} setShowToast={setShowToast} setOpen={setOpen} open={open} eventid={eventid} />
            }
           <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Calendar</li>
                </ol>
            </nav>
            <hr />
            <div className="content-calendar">
                <div className="calendar-header">
                    <span>Ajouter des évenements</span>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="text" name='name' required placeholder="Add a new event " aria-label="text" value={selectedDate.name}  onChange={handleChange} />
                        <input className="form-control me-2" type="date" name='date' required placeholder="Add event date" aria-label="date" value={selectedDate.date}  onChange={handleChange}/>
                        <button className="btn btn-primary" type='submit'>Add</button>
                    </form>
                </div>
                <hr />
                <div className="calendar-body">
                    {
                        
                        <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={selecteEvent}
                        eventDisplay="block"
                        eventContent={(eventInfo) => (
                          <div className="event-content">
                            <Button variant="contained-fluid" onClick={() => handlemodale(eventInfo.event)}>
                                {eventInfo.event.title}
                            </Button>
                          </div>
                        )}
                    />
                    
                    }
                </div>
            </div>
            </div>
        </>
    )
}
export default Calendar;