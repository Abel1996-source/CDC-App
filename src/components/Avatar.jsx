import { Tooltip } from "@mui/material";
import  Ava from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { DecodeToken } from "../DecodeToken";
import { logout } from "../Logout";

const Avatar=()=> {
    const handleLogout=()=>{
        logout()
        
    }
    const  stringToColor=(string)=> {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
    const  stringAvatar=(name)=> {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }

    return(
        <>
        <div className="dropdown dropstart">
            <div className=" btn dropdown-toggle " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        <Tooltip title="compte" arrow>
                          <Ava title="compte" {...stringAvatar(DecodeToken().name)} />     
                        </Tooltip>
            </div>
            <ul className="dropdown-menu  dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <h6 style={{margin:"1rem"}}>Compte</h6>
                    <hr className="dropdown-divider"/>
                        <span>
                        <div className="avatar-1 m-1">
                            <Tooltip title="compte" arrow>
                                <Ava title="compte" {...stringAvatar(DecodeToken().name)} />     
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