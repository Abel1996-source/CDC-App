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
      <nav className="navbar navbar-dark bg-dark">
        <div className="container ">
          <div className="list">
            <i className="bi bi-list-nested"></i>
          </div>
         <div className="recent"><Dropdown projetRecent={projetRecent} setProjetRecent={setProjetRecent} /></div>
          <div className="form-search">
                <form className="form">
                    <input
                    className="form-control "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                </form>
          </div>
           
            <div><Notification/></div>
            <div><Help/></div>
            <div>
                <Theme/>
            </div>
          
            {
              <Avatar />
            }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
