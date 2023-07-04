import { Link } from "react-router-dom";

const Cdc=()=>{
    return(
        <>
              <div className="overview">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Cahier des charges</li>
                    </ol>
                </nav>
                <hr />
                <div className="content-cdc">
                    <div className="cdc-header">
                        
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                    <div className="cdc-body">
                        <div className="body-content">
                            <div className="projet-name"><span>djhcvdcdjjdd</span></div>
                            <div className="projet-action">
                                <button className="btn btn-dark " ><i className="bi bi-box-arrow-up"></i></button>
                                <button className="btn btn-light deleted"><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cdc;