import {Link} from "react-router-dom";
import { DecodeToken } from "../DecodeToken";


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
               <div>
                <Link to="/" className="logo-a">
                   <h3 className="float-md-start mb-0 mt-1 logo">Horas</h3>
                </Link>
                </div>
                 <ul className="nav flex-column">
                    <li className=" btn nav-item">
                        <div className="btn dom" onClick={()=>props.isComponent("overview")}>
                            <i className="bi bi-bar-chart-fill"></i>
                            <span className=" item " aria-current="page" > OverView</span>
                        </div>
                    </li>
                    {
                        DecodeToken().profile==="admin"&&(
                            <li className=" btn nav-item">
                            <div className="btn dom"onClick={()=>props.isComponent("customers")}>
    
                                <i className="bi bi-people-fill"></i>
                                <span className="item " aria-current="page" >Customers</span>
                            </div>
                        </li>
                        )
                    }
                   
                    
                    <li className="btn nav-item">
                        <div className="btn dom"onClick={()=>props.isComponent("projets")}>

                            <i className="bi bi-stack"></i>
                            <span className="item " aria-current="page" >Projets</span>
                        </div>
                    </li>
                    
                    <li className="btn nav-item">
                        <div className="btn dom"onClick={()=>props.isComponent("task")}>

                            <i className="bi bi-share-fill"></i>
                            <span className="item " aria-current="page" >Tâches</span>
                        </div>
                    </li>
                
                    <li className="btn nav-item ">
                        <div className="btn dom" onClick={()=>props.isComponent("cdc")}>
                            <i className="bi bi-filetype-pdf"></i>
                            <span className="item " aria-current="page" >Papier cdc</span>
                        </div>
                    </li>
                   
                    <li className="btn nav-item">
                        <div className="btn dom" onClick={()=>props.isComponent("calendar")}>

                            <i className="bi bi-calendar2-event"></i>
                            <span className="item " aria-current="page" >Calendar</span>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}
export default Slide;