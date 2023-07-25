import { Alert, Badge, Tooltip } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";


const Notification=()=>{
    const [messageCount,setMessageCount]=useState(1);
    return(
        <>
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <Tooltip title="Notifications" arrow>
                    <Badge badgeContent={messageCount} color="primary">
                        <MailIcon />
                    </Badge>
                </Tooltip>
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Notifications</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="Notifi">
                            <Alert>Welcomme to Dorca your work app</Alert>
                        </div>
                        <div className="Notifi">
                            <Alert>Welcomme to Dorca your work app</Alert>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}
export default Notification;