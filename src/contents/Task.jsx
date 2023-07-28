import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalForTask from "../components/nexts/ModalForTask";
import { chargementdestasks, createtask, deletetask, getprojets, updatetasks } from "../axios/tasks/tasks";
import { DecodeToken } from "../DecodeToken";
import { actiondeleteprojet } from "../axios/projets/projetsRequest";
import { Accordion, AccordionDetails, AccordionSummary, Tooltip, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as Yup from 'yup';
import Alert from "../components/nexts/Alert";

const Task=()=>{
    const [projets,setProjets]=useState([])
    let [tasks,setTasks]=useState([]);
    let [iD,setID]=useState(null)
    const [showToast, setShowToast] = useState(false);
    const [info,setInfo]=useState('')
   
    let count1=0;
   // let numero_task=0;

    const btn_close=document.querySelector(".fermer");
    const initialValues = {
        title:"",
        start:"",
        end:""
      };
      const validationSchema = Yup.object({
        title: Yup.string().required('Le titre est requis'),
        start:Yup.string(),
        end:Yup.string()
      });
      const handleSubmit = (values) => {
        createtask(values,iD).then((res)=>{
            console.log(res.data.message);
            getalltasks();//chargement de tous les tâches;
            setShowToast(true);
            btn_close.click();
            setInfo(res.data.message)
        }).catch((err)=>{
           console.log(err.response.data.message);
           setInfo(err.response.data.message)
        })
      };


    const handleStatus=(task)=>{
        
        updatetasks({
            title:task.title,
            description:task.description,
            statut:true
            
        },task.projetid,task.id).then((res)=>{
            //console.log(res.data.message);
            getalltasks();//chargement de tous les tâches;
            setShowToast(true);
            setInfo(res.data.message)
        }).catch((err)=>{
            //console.log(err.response.data.message);
            setShowToast(true)
            setInfo(err.response.data.message)
        })
       
    }
    
    const chargementdesprojet=()=>{
        getprojets(DecodeToken().userId).then((res)=>{
            setProjets(res.data.donnees);
        }).catch((err)=>{
           // console.log(err.response.data.message);
           setShowToast(true)
            setInfo(err.response.data.message)
        }) 
    }
    const getalltasks=()=>{
        chargementdestasks().then((res)=>{
            setTasks(res.data.donnees);
        }).catch((err)=>{
           // console.log(err.response.data.message);
           setShowToast(true)
            setInfo(err.response.data.message)
        })
    }
    const suprimerunetasks=(task)=>{
        deletetask(task.projetid,task.id).then((res)=>{
            //console.log(res.data.message);
            getalltasks();//chargement de tous les tâches;
            setShowToast(true);
            setInfo(res.data.message)
        }).catch((err)=>{
            //console.log(err.response.data.message);
            setShowToast(true)
            setInfo(err.response.data.message)
        })
    }
    useEffect(()=>{
        chargementdesprojet();//chargement des projets;
        getalltasks();//chargement de tous les tâches;
    },[]);
    
    
    let spiner=(
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        )
   
    //Fonction permettant de suprimer un projet
    const suprimerprojet=(id)=>{
        actiondeleteprojet(DecodeToken().userId,id).then((res)=>{
            //console.log(res.data.message);
            setInfo(res.data.message);
            chargementdesprojet();//chargement des projets;
            setShowToast(true);
        }).catch((err)=>{
            //console.log(err.response.data.message);
            setShowToast(true)
            setInfo(err.response.data.message)
        })
    }
  
    
    return(
        <>
             <div className="overview">
                {
                    <Alert showToast={showToast} setShowToast={setShowToast} >{info} </Alert>
                }
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Tâches</li>
                    </ol>
                </nav>
                <hr />
                
                <div className="content-task">
                    
                    <ModalForTask initialValues={initialValues} validationSchema={validationSchema} handleSubmit={handleSubmit}  />
                    <div className="task">
                        <div className="accordion" >
                            {  
                            projets.length===0?spiner: 
                                projets.map((projet)=>(
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel-content"
                                            id="panel-header"
                                        >
                                        <Typography>{count1=count1+1}. {projet.title} </Typography>
                                        </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <div className="accordion-body">
                                                            
                                                                <div className="body-header">
                                                                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={()=>setID(projet.id)}>
                                                                            Add Task
                                                                        </a>
                                                                        <Tooltip title="Delete project" arrow>
                                                                            <button className="btn btn-danger" onClick={()=>suprimerprojet(projet.id)}>Delete</button>
                                                                        </Tooltip>
                                                                </div>
                                                                
                                                                <table className="table">
                                                                    
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Tag</th>
                                                                            <th>Name</th>
                                                                            <th>Etat</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {
                                                                              tasks.map((task)=>(
                                                                                task.projetid===projet.id && 
                                                                                <tr key={task.id}>
                                                                                    <td style={{color:`${task.statut?"red":"#000"}`}} > # </td>
                                                                                    <td> {task.title} </td>
                                                                                    <td><span className={`btn ${task.statut?"btn-success":"btn-primary"} status`} onClick={()=>handleStatus(task)}>{task.statut?"Terminer":"En cours"}</span></td>
                                                                                    <td><span className=" btn btn-light deleted" onClick={()=>suprimerunetasks(task)}><i className="bi bi-trash-fill"></i></span></td>
                                                                                </tr>
                                                                              ))
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                               
                                                        </div>
                                                    </Typography>
                                                </AccordionDetails>
                                        </Accordion>
                                        ))
                            }
                             
                            </div>
                        </div>
                       
                </div>
            </div>
        </>
    )
}
export default Task;