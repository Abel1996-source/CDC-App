
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
                    <h1>Bonjour,</h1>
                        <p className="lead">
                           <p>
                                Nous sommes ravis de vous accueillir sur notre <span className="badge bg-primary">application de gestion de projet</span> !
                                Votre présence parmi nous est une grande source de joie et nous sommes impatients de    
                                vous accompagner dans vos projets futurs.
                           </p>
                         <p>
                            Notre plateforme a été conçue pour vous offrir une <span className="badge bg-primary">expérience fluide et intuitive</span> dans la
                            gestion de vos projets, que ce soit pour un projet professionnel ou personnel. Vous trouverez ici 
                            tous les outils nécessaires pour organiser, suivre et collaborer efficacement.
                         </p>
                         <p>
                            N'hésitez pas à explorer toutes les fonctionnalités et ressources mises à votre disposition. Notre équipe est également à votre disposition pour
                            vous assister et répondre à toutes vos questions.
                         </p>
                         <p>
                            Nous vous souhaitons une <span className="badge bg-primary">expérience enrichissante et fructueuse</span> avec notre application. <br />
                            Ensemble, nous allons <span className="badge bg-success">accomplir de grandes choses !</span>
                         </p>
                        <Link to="/dashboad" className="btn btn-lg btn-secondary fw-bold border-white bg-dark">Learn more</Link>
                    </p>
                   
                </div>
            </div>
            <div className="footer">
                <p>Copyright <span className="badge bg-primary"> {new Date().getFullYear()} </span> - Tous droits réservés : by <span className="badge bg-primary">Aysé</span></p>
            </div>
        </div>

        </>
    )
}
export default Home;