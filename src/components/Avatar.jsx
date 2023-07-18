import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { DecodeToken } from "../DecodeToken";
import { logout } from "../Logout";

const Avatar=()=> {
    const handleLogout=()=>{
        logout()
        
    }
    return(
        <>
        <div className="dropdown dropstart">
            <div className=" btn dropdown-toggle avatar" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                 <Tooltip title="compte" arrow>
                    <span className="userImage"><i className="bi bi-person"></i> </span>     
                 </Tooltip>
            </div>
            <ul className="dropdown-menu  dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <h6 style={{margin:"1rem"}}>Compte</h6>
                <hr className="dropdown-divider"/>
                     <span>
                     <div className="avatar-1">
                        <Tooltip title="compte" arrow>
                            <span className="userImage"><i className="bi bi-person"></i> </span>     
                        </Tooltip>
                        <span>
                            <h5>{DecodeToken().name} </h5>
                            <h5>{DecodeToken().email} </h5>  
                        </span>
                    </div>
                </span>
                <hr className="dropdown-divider"/>
                <li> <Link to="#">Profil & Visibilité </Link></li>
                <hr className="dropdown-divider"/>
                <li><Link to="#">Paramètres</Link></li>
                <hr className="dropdown-divider"/>
                <li>  <button className="btn btn-warning " onClick={handleLogout} >Déconnexion</button></li>
            </ul>
            </div>
            
        </>
    )
}
export default Avatar;