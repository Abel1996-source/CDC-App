
import Avatar from "./Avatar";
import Notification from "./Notification";
import Help from "./Help";
import Theme from "./Theme";



const Navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navigation">
        <div className="container-fluid navbar-header">  
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
