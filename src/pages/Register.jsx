
import { Link } from "react-router-dom";

const Register=()=>{
    return(
        <>
         < div className="content-login">
                <div className="logo">
                    <span>Register</span>
                </div>
                <div className="login-left">
                    <div id="emailHelp" className="form-text"></div>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: Konan"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Prenom</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: Kouakou "/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: y@gmail.com"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ex: chccdgPO986"/>
                        </div>
                        <button type="submit" className="btn btn-warning form-control">Enregistrer</button>
                    </form>
                </div>
                <div className="regist">
                        <span>Vous avez déjà un compte utilisateur? <Link to="/login">Connexion</Link></span>
                </div>
            </div>
        </>
    )
}
export default Register;