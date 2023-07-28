import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const PageNavbar=()=>{
    return(
        <>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <div className="mb-auto">
                <div>
                    <Link to="/" className="logo-a"><h3 className="float-md-start mb-0 logo">Asyé</h3></Link>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <Link className="nav-link" to="#">Blog</Link>
                        <Link className="nav-link" to="#">Services</Link>                
                        <Tooltip title="login">
                            <Link className="nav-link active" aria-current="page" to="/login"><i className="bi bi-person-check-fill"></i></Link>
                        </Tooltip>
                        
                    </nav>
                    </div>
                </div>
            </div>   
        </>
    )
}
export default PageNavbar;