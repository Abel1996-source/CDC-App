
import { Gantt} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getprojets } from '../axios/projets/projetsRequest';
import { chargementdestasksparprojetid} from '../axios/tasks/tasks'
import { DecodeToken } from '../DecodeToken';
import Alert from '../components/nexts/Alert';

import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';



 
const Planing=()=>{

    let [projets, setProjets]=useState([])
    let [tasks, setTasks]=useState([])
    const [showToast, setShowToast] = useState(false);
    const [info,setInfo]=useState('')

        
   
     
   // const close=document.querySelector('.close')
  

    const ganttData = [
        {
          id: 1,
          name: 'Tâche 1',
          start: new Date('2023-07-25'),
          end: new Date('2023-07-30'),
          type:'task',
          progress: 45,
          isDisabled: true,
          styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
          dependencies: [2],
        }
        // Ajoutez d'autres tâches ici...
      ];
      
      const initialValues = {
        taskid:"",
        dependencies:"",
      };

      const validationSchema = Yup.object({
    
        taskid: Yup.number(),
        dependencies: Yup.number(),
      });

      const handleSubmit=(values)=>{
        console.log(values);
       
      
      }
     
      const chargeprojets=()=>{
        getprojets(DecodeToken().userId).then((res)=>{
            setProjets(res.data.donnees);
        }).catch((err)=>{
           // console.log(err.response.data.message);
           setShowToast(true)
            setInfo(err.response.data.message)
        }) 
      }
      const getalltasks=(projet)=>{
        chargementdestasksparprojetid(projet.id).then((res)=>{
            setTasks(res.data.donnees);
            //close.click();
        }).catch((err)=>{
           // console.log(err.response.data.message);
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
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Planing</li>
                    </ol>
                </nav>
                <hr />
                <div className="nav-planing">
                      <div className="item-pro" style={{marginBottom:"18px"}}>
                            <button className="btn btn-primary form-control bouton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Planification des tâches</button>
                                <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style={{height:"600px"}}>
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <select class="form-select" multiple aria-label="multiple select example"> 

                                                    {
                                                        projets.map((projet)=><option onClick={()=>getalltasks(projet)}>{projet.title} </option>)
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
                                                    <Field as='select'  name="title"  className="form-control">
                                                     <option value=" " selected ></option>
                                                    {
                                                        tasks.map((task)=><option value={`${task.id}`} > {task.title} </option>)
                                                    }
                                                    </Field>
                                                   
                                                </div>

                                                <div className="description-task">
                                                    <label className='badge bg-primary mb-2'>Sélectionnez une tâche comme dépendance :</label>
                                                    <Field as="select"  name="dependencies"  className="form-control" >
                                                       
                                                       <option value="" selected ></option>
                                                        {
                                                        tasks.map((task)=><option name="dependencies" value={`${task.id}`}> {task.title} </option>)
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
                    <Gantt tasks={ganttData} 
                    />
                </div>
            </div>
        </>
    )
}
export default Planing;