import { Tooltip } from "@mui/material";
const Colaborate=()=>{
    return(
        <>
             <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <Tooltip title="Colaborateurs" arrow> 
                            <div className="colaborate"><i className="bi bi-people-fill"></i></div>
                    </Tooltip>
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title " id="exampleModalLabel">Add a colaborate</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">email:</label>
                        <input type="text" className="form-control" id="recipient-name"/>
                    </div>
                    <div className="mb-3">
                        <label for="message-text" className="col-form-label">Message:</label>
                        <textarea className="form-control" id="message-text"></textarea>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" className="btn btn-warning" id="submitAtColaborater">Envoyer</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Colaborate;