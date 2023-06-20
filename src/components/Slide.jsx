import {Link} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Slide=()=>{
  
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
               <div className="logo">
                <Link to="#">
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="rounded">
                            <AssignmentIcon />
                        </Avatar>
                    </Stack>
                </Link>
                </div>
                 <ul className="nav flex-column">
                    <li className=" btn nav-item">
                        <div className="btn dom">
                            <i className="bi bi-bar-chart-fill"></i>
                            <span className=" item " aria-current="page" > OverView</span>
                        </div>
                    </li>
                    
                    <li className=" btn nav-item">
                        <div className="btn dom">

                            <i className="bi bi-people-fill"></i>
                            <span className="item " aria-current="page" >Customers</span>
                        </div>
                    </li>
                    
                    <li className="btn nav-item">
                        <div className="btn dom">

                            <i className="bi bi-stack"></i>
                            <span className="item " aria-current="page" >Mes Projets</span>
                        </div>
                    </li>
                    
                    <li className="btn nav-item">
                        <div className="btn dom">

                            <i className="bi bi-share-fill"></i>
                            <span className="item " aria-current="page" >Mes Tâches</span>
                        </div>
                    </li>
                
                    <li className="btn nav-item ">
                        <div className="btn dom">
                            <i className="bi bi-filetype-pdf"></i>
                            <span className="item " aria-current="page" >Papier cdc</span>
                        </div>
                    </li>
                   
                    <li className="btn nav-item">
                        <div className="btn dom">

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