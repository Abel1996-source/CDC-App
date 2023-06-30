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
                <hr />
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
                      <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                      </div>
                    </div>
                    <div className="task">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Développement de site E-commerce
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                   <div className="body-header">
                                        <button className="btn btn-primary">Add Task</button>
                                        <button className="btn btn-danger">Delete</button>
                                   </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Task;