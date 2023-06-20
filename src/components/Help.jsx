import { Button, Tooltip } from "@mui/material";

const Help=()=>{
    return(
        <>
            <div className="dropdown">
                <button className="btn btn-dark " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <Tooltip title="Informations" arrow>
                        <div className="help"><i className="bi bi-question-circle-fill" ></i></div>
                    </Tooltip>
                </button>
                <ul className="dropdown-menu helping" aria-labelledby="dropdownMenuButton1">
                    <p>Avez-vous besoin d'aide?<Button>Ici</Button></p>
                    <button className="btn btn-primary">contact@dorcas.com</button>
                </ul>
            </div>
        </>
    )
}
export default Help;