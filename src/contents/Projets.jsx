import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Colaborate from "../components/Colaborate"

const Projets=()=>{
    return(
        <>
             <div className="overview">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Projets</li>
                    </ol>
                </nav>
                <hr />
                <div className="content-goals">
                    <div className="nav-goals">
                      <div className="item-pro">
                            <Modal/>
                      </div>
                      <div className="item-pro">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                      </div>
                    </div>
                    <div className="goals">
                        <div className="name">
                            <div className="body">
                                <span className="projetName">Dévelopement web</span>
                            </div>
                           <div className="param">
                                <button className="btn btn-dark " >Build</button>
                                <button className="btn btn-light update"><i className="bi bi-pencil-fill"></i></button>
                                <button className="btn btn-light deleted"><i className="bi bi-trash-fill"></i></button>
                                <span><Colaborate/></span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projets;