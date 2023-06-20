import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Avatar=()=> {
    return(
        <>
        <div className="dropdown dropstart">
            <div className=" btn dropdown-toggle avatar" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                 <Tooltip title="compte" arrow>
                     <img src="./logo192.png" alt="avatar" />        
                 </Tooltip>
            </div>
            <ul className="dropdown-menu  dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <h6 style={{margin:"1rem"}}>Compte</h6>
                <hr className="dropdown-divider"/>
                     <span>
                     <div className="avatar-1">
                        <img src="./logo192.png" alt="" title="compte"/>
                        <span>
                            <h5>Konan kouakou abel</h5>
                            <h5>k.kouakouabel96@gmail.com</h5>  
                        </span>
                    </div>
                </span>
                <hr className="dropdown-divider"/>
                <li> <Link to="#">Profil & Visibilité </Link></li>
                <hr className="dropdown-divider"/>
                <li><Link to="#">Paramètres</Link></li>
                <hr className="dropdown-divider"/>
                <li>  <Link to="#">Déconnexion</Link></li>
            </ul>
            </div>
            
        </>
    )
}
export default Avatar;