import { useState } from "react";
import Overview from "../contents/Overview";
import Customers from "../contents/Customers"
import Loyout from "./Loyout";
import Projets from "../contents/Projets";
import Task from "../contents/Task";
import Cdc from "../contents/Cdc";
import Calendar from "../contents/Calendar";

const Dashboad=()=>{
    const [component,isComponent]=useState("overview")
    return(
        <>
           <Loyout isComponent={isComponent}>
                {
                    component==="overview"?<Overview/>:component==="customers"?<Customers/>:component==="projets"?<Projets/>:component==="task"?<Task/>:component==="cdc"?<Cdc/>:component==="calendar"&&<Calendar/>

                }
            </Loyout>
        </>
    )
}
export default Dashboad;