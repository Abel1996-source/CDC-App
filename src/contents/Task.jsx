import { Link } from "react-router-dom";


const Task=()=>{
    return(
        <>
             <div className="overview">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Tâches</li>
                    </ol>
                </nav>
                <div className="content-task">
                    <div className="nav-task">
                      <div className="item-pro">
                            <button className="btn btn-primary form-control" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Build Projet</button>
                            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                <select class="form-select" multiple aria-label="multiple select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="3">Three</option>
                                    <option value="3">Three</option>
                                    <option value="3">Three</option>
                                    <option value="3">Three</option>
                                    <option value="3">Three</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div>
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
export default Task;