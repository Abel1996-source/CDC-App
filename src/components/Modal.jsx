const Modal=()=>{
    return(
        <>
            <button className="btn btn-primary form-control" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Add New Projet</button>
            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form className="row g-3">
                        <div className="col-10">
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Projet name"/>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary mb-3">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Modal;