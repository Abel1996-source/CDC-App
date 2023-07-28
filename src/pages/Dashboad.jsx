import { useState } from "react";
import Overview from "../contents/Overview";
import Customers from "../contents/Customers"
import Loyout from "./Loyout";
import Projets from "../contents/Projets";
import Task from "../contents/Task";
import Cdc from "../contents/Cdc";
import Calendar from "../contents/Calendar";
import { DecodeToken } from "../DecodeToken";
import { Navigate } from "react-router";
import Planing from "../contents/Planing";
const Dashboad=()=>{
    const [component,isComponent]=useState("overview")
    return(
        <>
           <Loyout isComponent={isComponent}>
                   {
                    Date.now() > (DecodeToken().exp)*1000 && <Navigate to="/login"/>
                   }
                {
                    component==="overview"?<Overview/>:component==="customers"?<Customers/>:component==="projets"?<Projets/>:component==="task"?<Task/>:component==="cdc"?<Cdc/>:component==="calendar"?<Calendar/>:component==="planing"&&<Planing/>
                }
            </Loyout>
        </>
    )
}
export default Dashboad;