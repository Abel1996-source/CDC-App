import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
const Overview=()=>{
    
    return(
        <>
            <div className="overview">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Overview</li>
                    </ol>
                </nav>
                <hr />
                <div className="content-overview">
                    <div className="nav-overniew">
                        <div className="users-header">
                            <Tooltip title="Create blog" arrow>       
                                <button className="btn btn-primary">Blog</button>
                            </Tooltip>
                            <Tooltip title="Create store" arrow>
                                <button className="btn btn-primary">Store</button>                         
                            </Tooltip>
                            <Tooltip title="Create portifolio" arrow>
                                <button className="btn btn-primary">Portifolio</button>                              
                            </Tooltip>
                            <Tooltip title="Send email" arrow>
                                <button className="btn btn-primary">Chat</button>                              
                            </Tooltip>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default Overview;