import { Link } from "react-router-dom";
import Modal from "../components/Modal";

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
                <div className="content-goals">
                    <div className="nav-goals">
                      <div className="item-pro">
                            <Modal/>
                      </div>
                      <div className="item-pro">
                            <button className="btn btn-success form-control">Setting</button>
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projets;