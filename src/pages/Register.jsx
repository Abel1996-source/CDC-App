import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register=()=>{
    return(
        <>
            <div className="register">
               <Link to="/dashboad"> <Button>Go to dashboad</Button></Link>
            </div>
        </>
    )
}
export default Register;