import {Badge, Tooltip } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { useEffect, useState } from "react";
import { getnotifies } from "../axios/notify/notifiesRequest";
import { DecodeToken } from "../DecodeToken";


const Notification=()=>{
    const [messageCount,setMessageCount]=useState([]);
    const chargementdesnotifications=()=>{
        getnotifies(DecodeToken().userId).then((res)=>{
            setMessageCount(res.data.donnees)
        }).catch((err)=>{
            console.log(err.response.data.message);
        })
    }
    useEffect(()=>{
        chargementdesnotifications();//chargement des notifications
    },[])
    return(
        <>
                <button type="button" className="btn btn-dark" >
                    <Tooltip title="Notifications" arrow>
                        <Badge badgeContent={messageCount.length} color="primary">
                            <MailIcon />
                        </Badge>
                    </Tooltip>
                </button>
        </>
    )
}
export default Notification;