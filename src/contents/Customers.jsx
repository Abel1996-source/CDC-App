import { Link } from "react-router-dom";

const Customers=()=>{
    return(
        <>
            <div className="overview">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Users</li>
                    </ol>
                </nav>
                <hr />
            </div>
        </>
    )
}
export default Customers;