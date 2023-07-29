
import { Gantt} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getprojets } from '../axios/projets/projetsRequest';
import {chargementdestasksparprojetid, updatetasks} from '../axios/tasks/tasks'
import { DecodeToken } from '../DecodeToken';
import Alert from '../components/nexts/Alert';

import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';



 
const Planing=()=>{

    let [projets, setProjets]=useState([])
    let [tasks, setTasks]=useState([])
    let [gantts, setGantts]=useState([])
    let [gantts_projets, setgantts_projets]=useState([])
    const [showToast, setShowToast] = useState(false);
    const [info,setInfo]=useState('')
    const [id,setId]=useState(null);
    const [name,setName]=useState("");
   

        
   
     
   // const close=document.querySelector('.close')
  

    // const ganttData = [
    //     {
    //       id: 1,
    //       name: 'Tâche 1',
    //       start: new Date('2023-07-25'),
    //       end: new Date('2023-07-30'),
    //       type:'task',
    //       progress: 45,
    //       isDisabled: true,
    //       styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    //       dependencies: [2],
    //     }
    //     // Ajoutez d'autres tâches ici...
    //   ];

    let ganttData= gantts.map((item)=>({
        id:item.id,
        name:item.title,
        start: item.start!==undefined?new Date(item.start) : null,
        end:item.end!==undefined?new Date(item.end) : null,
        type:'task',
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        dependencies:item.dependencies!==""?[parseInt(item.dependencies)]:[]
    }))
    
   //console.log(tasks);

      const initialValues = {
        taskid:"",
        dependencies:"",
      };

      const validationSchema = Yup.object({
    
        taskid: Yup.number(),
        dependencies: Yup.number(),
      });

      const handleSubmit=(values)=>{
        //console.log(id);
        updatetasks({
            dependencies:values.dependencies!==""?parseInt(values.dependencies):values.dependencies
        },id,values.taskid).then((res)=>{
            setShowToast(true)
            setInfo(res.data.message) 
            actualiselalistedestasks(id)//actualisation de la liste des tâches
        }).catch((err)=>{
            setInfo(err.response.data.message)
            setShowToast(true)
        })
        
       
      
      }
     
      const chargeprojets=()=>{
        getprojets(DecodeToken().userId).then((res)=>{
            setProjets(res.data.donnees);
            setgantts_projets(res.data.donnees)
        }).catch((err)=>{
           // console.log(err.response.data.message);
           setShowToast(true)
            setInfo(err.response.data.message)
        }) 
      }
      const getalltasks=(projet)=>{
                setId(projet.id);
                
        chargementdestasksparprojetid(projet.id).then((res)=>{
            setTasks(res.data.donnees);
            
            //close.click();
        }).catch((err)=>{
           // console.log(err.response.data.message);
           setShowToast(true)
            setInfo(err.response.data.message)
        })
    }
    //afficher les tâches dans le diagramme de gantt
    const affichegantt=(projet)=>{
        setName(projet.title)
        chargementdestasksparprojetid(projet.id).then((res)=>{
            setGantts(res.data.donnees);
            console.log(res.data.donnees);
            //close.click();
        }).catch((err)=>{
           // console.log(err.response.data.message);
           setShowToast(true)
            setInfo(err.response.data.message)
        })
    }

    //actualiser la liste des tâches 
    const actualiselalistedestasks=(id)=>{
        chargementdestasksparprojetid(id).then((res)=>{
            setGantts(res.data.donnees);
        }).catch((err)=>{
           setShowToast(true)
            setInfo(err.response.data.message)
        })
    }
   
     useEffect(()=>{
        chargeprojets();
     },[]) 

    return(
        <>
            <div className="planing">
                {
                    <Alert showToast={showToast} setShowToast={setShowToast} >{info} </Alert>
                }
                <nav aria-label="breadcrumb " className='planification'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Planing</li>
                    </ol>
                    <button className=" btn btn-primary  bouton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Planification des tâches</button>
                    
                </nav>
                <hr />
                <div className='d-flex projet-titre'>
                        <div className="dropdown m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Projets
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {

                                        gantts_projets.map((projet)=>(<li><button className="dropdown-item form-control btn btn-dark"  key={projet.id} onClick={()=>affichegantt(projet)} >{projet.title}</button></li>))
                                }
                            </ul>
                        </div>
                       { name!==""&& 
                       <div className='alert alert-success'>
                               {<span className='badge bg-primary p-2'> {name} </span>}
                        </div>}
                </div>
                <hr />
                <div className="nav-planing">
                      <div className="item-pro" style={{marginBottom:"18px"}}>
                            
                            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style={{height:"600px"}}>
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <select class="form-select" multiple aria-label="multiple select example"> 

                                                    {
                                                        projets.map((projet)=><option key={projet.id} onClick={()=>getalltasks(projet)}>{projet.title} </option>)
                                                    }
                                        </select>
                                        <Formik
                                            initialValues={initialValues}
                                            onSubmit={handleSubmit}
                                            validationSchema={validationSchema}
                                            >
                                            <Form>
                                                <div className="title-task">
                                                    <label className='badge bg-primary mb-2'>Ajouter une dépendance à :</label>
                                                    <Field as='select'  name="taskid"  className="form-control">
                                                     <option value="" selected ></option>
                                                    {
                                                        tasks.map((task)=><option name="taskid" key={task.id} value={`${task.id}`} > {task.title} </option>)
                                                    }
                                                    </Field>
                                                   
                                                </div>

                                                <div className="description-task">
                                                    <label className='badge bg-primary mb-2'>Sélectionnez une tâche comme dépendance :</label>
                                                    <Field as="select"  name="dependencies"  className="form-control" >
                                                       
                                                       <option value="" selected ></option>
                                                        {
                                                        tasks.map((task)=><option name="dependencies" key={task.id} value={`${task.id}`}> {task.title} </option>)
                                                        }
                                                    </Field>  
                                                                                     
                                                </div>
                                                
                                                <input type="submit" value="Programmer" className="btn btn-danger mt-2" />
                                                
                                            </Form>
                                        </Formik>
                                    </div>
                            </div>
                
                      </div>
                    
                    </div>
                <div className="planing-body">
                    {
                        gantts.length!==0?
                             <Gantt tasks={ganttData!==undefined && ganttData} />:
                             <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>

                                 <span className='alert alert-danger ' > {name===""?"Aucun projet n'a été sélectionné":name!=="" && "Ce projet ne dispose pas de tâches"} </span>
                             </div>
                    }
                </div>
            </div>
        </>
    )
}
export default Planing;