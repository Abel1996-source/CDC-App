
import { Link } from "react-router-dom";
import PageNavbar from "../components/nexts/PageNavbar";

const Home=()=>{
    return(
        <>
        <div className="home ">
            <div className="pageNav">
                <PageNavbar/>
            </div>
            <div className="main">
                <div className="px-3">
                    <h1>Cover your page.</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        <Link to="/blog" className="btn btn-lg btn-secondary fw-bold border-white bg-dark">Learn more</Link>
                    </p>
                   
                </div>
            </div>
            <div className="footer">
                <p>copyright 2023-tout droit reservé:<Link to="" class="text-white">Abel</Link>, by <span>@ingenio</span>.</p>
            </div>
        </div>

        </>
    )
}
export default Home;