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
                <div className="content-users">
                    <div className="users-header">
                        <button className="btn btn-primary">Add</button>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                    <div className="users-body">
                        <div className="users">
                            <span>k.kouakouabel96@gmail.com</span>
                            <span className="btn btn-light deleted"><i className="bi bi-trash-fill"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Customers;