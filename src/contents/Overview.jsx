import { Link } from "react-router-dom";

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
            </div>
        </>
    )
}
export default Overview;