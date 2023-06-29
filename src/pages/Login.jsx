import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <>
            <div className="content-login">
                <div className="logo">
                    <span>LOGIN</span>
                </div>
                <div className="login-left">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: y@gmail.com"/>
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ex: chccdgPO986"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Rester Connecter</label>
                        </div>
                        <button type="submit" class="btn btn-warning ">Se Connecter</button>
                    </form>
                </div>
                <div className="regist">
                        <span>Vous n'avez pas de compte utilisateur? <Link to="/register">Créer un compte</Link></span>
                </div>
            </div>
        </>
    )
}
export default Login;