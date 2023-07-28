import { useState } from "react";
import Dropdown from "./Dropdown";
import Avatar from "./Avatar";
import Notification from "./Notification";
import Help from "./Help";
import Theme from "./Theme";



const Navbar = () => {
  const [projetRecent,setProjetRecent]=useState(["projet1","projet2","projet3","projet4","projet5"])
  
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navigation">
        <div className="container-fluid">
         <div className="recent"><Dropdown projetRecent={projetRecent} setProjetRecent={setProjetRecent} /></div>
            <div><Notification/></div>
            <div className="help_main"><Help/></div>
            <div className="theme_main">
                <Theme/>
            </div>
            <div>
                <Avatar />
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
