import {Link} from "react-router-dom";
import { DecodeToken } from "../DecodeToken";
import { Tooltip } from "@mui/material";



const Slide=(props)=>{
 
    const slides=document.querySelectorAll(".dom");
    let activeSlide=null;
        slides.forEach((slide)=>{
        slide.addEventListener('click',()=>{
            if (activeSlide) {
                activeSlide.classList.remove("active"); // Supprimer la classe active du précédent bouton
              }
              slide.classList.add("active"); // Ajouter la classe active au nouveau bouton
              activeSlide=slide;  // Mettre à jour la référence de la diapositive active
        })
    })
    
    return(
        <>
            <div className="slide">
               <div className="logo-a">
                    <Link to="/">
                       <h3 className="float-md-start mb-0 mt-1 logo">Asyé</h3>
                    </Link>
                </div>
                 <ul className="nav flex-column">
                    {
                        DecodeToken().profile==="admin"&&(
                            <li className=" btn nav-item">
                            <Tooltip title="customers" arrow>
                                <div className="btn dom"onClick={()=>props.isComponent("customers")}>
        
                                    <i className="bi bi-people-fill"></i>
                                    <span className="item " aria-current="page" >Customers</span>
                                </div>

                            </Tooltip>
                        </li>
                        )
                    }
                   
                    
                    <li className="btn nav-item">
                        <Tooltip title="projets" arrow>
                            <div className="btn dom"onClick={()=>props.isComponent("projets")}>

                                <i className="bi bi-stack"></i>
                                <span className="item " aria-current="page" >Projets</span>
                            </div>
                        </Tooltip>
                    </li>
                    
                    <li className="btn nav-item">
                        <Tooltip title="Tâches" arrow>
                            <div className="btn dom"onClick={()=>props.isComponent("task")}>

                                <i className="bi bi-share-fill"></i>
                                <span className="item " aria-current="page" >Tâches</span>
                            </div>
                        </Tooltip>
                    </li>
                
                    <li className="btn nav-item ">
                        <Tooltip title="Rapport" arrow>
                            <div className="btn dom" onClick={()=>props.isComponent("cdc")}>
                                <i className="bi bi-filetype-pdf"></i>
                                <span className="item " aria-current="page" >Rapport</span>
                            </div>
                        </Tooltip>
                    </li>
                   
                    <li className="btn nav-item">
                        <Tooltip title="Calendrier" arrow>
                            <div className="btn dom" onClick={()=>props.isComponent("calendar")}>

                                <i className="bi bi-calendar2-event"></i>
                                <span className="item " aria-current="page" >Calendrier</span>
                            </div>
                        </Tooltip>
                    </li>
                    <li className="btn nav-item" arrow>
                        <Tooltip title="Planification" arrow>
                            <div className="btn dom" onClick={()=>props.isComponent("planing")}>
                                <i className="bi bi-list-nested"></i>
                                <span className="item " aria-current="page"  >Gantt</span>
                            </div>
                        </Tooltip>
                    </li>
                    <li className="btn nav-item">
                        <Tooltip title="Suivi" arrow>
                            <div className="btn dom">
                                <i className="bi bi-graph-up-arrow"></i>
                                <span className="item " aria-current="page" >Suivi</span>
                            </div>
                        </Tooltip>
                    </li>
                    <li className="btn nav-item" arrow>
                        <Tooltip title="Statistiques">
                            <div className="btn dom" onClick={()=>props.isComponent("overview")}>
                                <i className="bi bi-bar-chart-line-fill"></i>
                                <span className="item " aria-current="page" >Statistiques</span>
                            </div>
                        </Tooltip>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}
export default Slide;