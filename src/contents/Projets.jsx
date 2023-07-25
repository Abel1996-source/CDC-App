import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Colaborate from "../components/Colaborate"
import { DecodeToken } from "../DecodeToken";
import { useEffect, useState } from "react";
import { actiondeleteprojet, createprojet, getprojets, miseajourdeprojet } from "../axios/projets/projetsRequest";
import { Tooltip } from "@mui/material";
import Alert from "../components/nexts/Alert";

const Projets=()=>{
   const btnClose =document.querySelector('.titre')
   const update=document.querySelector('.new-projet');

    const [formData_Projet, setFormData_Projet]=useState({
        title:""
    })
    const [projets,setProjets]=useState([])
    const [miseajour,setMiseajour]=useState(false)
    const [id_projet,setId_projet]=useState(0)
    const [showToast, setShowToast] = useState(false);
    const [info,setInfo]=useState('')
    let count=0;
    //Fonction permettant de créer un projet
    const handleCreateProjet=(e)=>{
        e.preventDefault();
        if(!miseajour){
            createprojet(formData_Projet,DecodeToken().userId).then((res)=>{
                obtentiondesprojets();//Rechargement des projets
                //console.log(res.data.message);
                setFormData_Projet({ title:""})
                setShowToast(true)
                setInfo(res.data.message);
                btnClose.click();
                setMiseajour(false)
            }).catch((error)=>{
                console.log(error.response.data.message);
                setShowToast(true)
                setInfo(error.response.data.message)
            })
        }else{
            miseajourdeprojet(DecodeToken().userId,id_projet,formData_Projet).then((res)=>{
                //console.log(res.data.message);
                obtentiondesprojets();//Rechargement des projets
                setFormData_Projet({ title:""});
                setShowToast(true)
                setInfo(res.data.message)
                btnClose.click();
                setMiseajour(false);
            }).catch((err)=>{
                //console.log(err.response.data.message);
                setShowToast(true)
                setInfo(err.response.data.message)
            })
        }
    }
    //Fonction permettant de charger les projets.
    const obtentiondesprojets=()=>{
        getprojets(DecodeToken().userId).then((res)=>{
            setProjets(res.data.donnees);
        }).catch((err)=>{
            setShowToast(true)
            console.log(err.response.data.message);
            setInfo(err.response.data.message)
        })
    }

useEffect(()=>{
    obtentiondesprojets();//chargement des projets
},[])

//Fonction permettant de suprimer un projet.
const suprimerprojet=(id)=>{
    actiondeleteprojet(DecodeToken().userId,id).then((res)=>{
        //console.log(res.data.message);
        setShowToast(true)
        setInfo(res.data.message)
        obtentiondesprojets();//Rechargement des projets
    }).catch((err)=>{
        //console.log(err.response.data.message);
        setShowToast(true)
        setInfo(err.response.data.message)
    })
}
let spiner=(
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    )
//Fonction permettant de mettre à jour un projet
const miseAjourDeProjet=(projet)=>{
    console.log(projet);
    setFormData_Projet(projet);
    setId_projet(projet.id)
    update.click();
    setMiseajour(true);
}
let touslesprojets=projets.map((projet)=>(
                            <tr>
                                <td> {count=count+1} </td>
                                <td >{projet.title}</td>
                                <td>
                                    <Tooltip title="Bluid project" arrow>
                                        <Link className="btn btn-dark " to={`/formulaire/${projet.id}`} >Build</Link>
                                    </Tooltip>
                                    <Tooltip title="Update project" arrow>
                                        <button className="btn btn-light update" onClick={()=>miseAjourDeProjet(projet)}><i className="bi bi-pencil-fill"></i></button>
                                    </Tooltip>
                                    <Tooltip title="Delete project" arrow>
                                        <button className="btn btn-light deleted" onClick={()=>suprimerprojet(projet.id)}><i className="bi bi-trash-fill"></i></button>
                                    </Tooltip>
                                    <span><Colaborate/></span>
                                </td>
                            </tr>
                    ))
    return(
        <>
             <div className="overview">
                {
                    <Alert setShowToast={setShowToast} showToast={showToast} > {info} </Alert>
                }
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Projets</li>
                    </ol>
                </nav>
                <hr />
                <div className="content-goals">
                    <div className="nav-goals">
                      <div className="item-pro">
                            <Modal setFormData_Projet={setFormData_Projet} formData_Projet={formData_Projet} handleCreateProjet={handleCreateProjet}  />
                      </div>
                      <div className="item-pro">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                      </div>
                    </div>
                    <div className="goals">
                            <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">N°</th>
                                    <th scope="col">Projet name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {

                            projets.length===0?spiner:touslesprojets

                                }
                            </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projets;