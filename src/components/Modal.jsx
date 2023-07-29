const Modal=(props)=>{
    const handleChange=(event)=>{
        props.setFormData_Projet({...props.formData_Projet,[event.target.name]:event.target.value})
    }
    
    return(
        <>
            <button className="btn btn-primary form-control new-projet " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">New Projet</button>
            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset titre" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" >
                    <form className="row g-3" onSubmit={props.handleCreateProjet}>
                        <div className="col-10">
                            <input type="text" className="form-control " id="inputPassword2" name="title" placeholder="Projet name" value={props.formData_Projet.title} onChange={handleChange} />
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