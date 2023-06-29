import { Link } from "react-router-dom";

const PageNavbar=()=>{
    return(
        <>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <div className="mb-auto">
                <div>
                    <h3 class="float-md-start mb-0">Cover</h3>
                    <nav class="nav nav-masthead justify-content-center float-md-end">
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