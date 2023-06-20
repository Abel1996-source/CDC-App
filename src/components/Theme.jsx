import { Tooltip } from "@mui/material";

const Theme=()=>{
    return(
        <>
            
          <div class="dropdown">
                <button class="btn btn-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <Tooltip title="Thème" arrow>
                        <div className="color"><i className="bi bi-paint-bucket" ></i></div>
                    </Tooltip>
                </button>
                 <ul class="dropdown-menu helping" aria-labelledby="dropdownMenuLink">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                        <label class="form-check-label" for="exampleRadios1">
                            Black
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                            White
                        </label>
                    </div>
                </ul>
            </div>
        </>
    )
}
export default Theme;