import { Link } from "react-router-dom";

const PageNavbar=()=>{
    return(
        <>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <div className="mb-auto">
                <div>
                    <Link to="/" className="logo-a"><h3 className="float-md-start mb-0 logo">Asyé</h3></Link>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="#">Blog</Link>
                        <Link className="nav-link" to="/login">Connexion</Link>
                        <Link className="nav-link" to="#">Services</Link>
                        
                    </nav>
                    </div>
                </div>
            </div>   
        </>
    )
}
export default PageNavbar;