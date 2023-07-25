
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../axios/users/users";


const Register=()=>{
    let [registerData,setRegisterData]=useState({
        name:" ",
        prenom:" ",
        email:" ",
        password:" "
    })
    let [registe,setRegiste]=useState(false)
    let [success,setSuccess]=useState("")
    let [error, setError]=useState('')
    let [errorregiste, setErrorregiste]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(registerData);
        register({
            name:registerData.name+" "+registerData.prenom,
            email:registerData.email,
            password:registerData.password
        }).then((response=>{
            setRegiste(true)
            setError('')
            setSuccess(response.data.message)
            setErrorregiste(false)
          setRegisterData({
            name:" ",
            prenom:" ",
            email:" ",
            password:" "
        }) 
        window.location.replace('/login');
           setTimeout(function() {
            setRegiste(false)
          }, 3000);
          
        })).catch((error)=>{
            console.log(error);
            setRegiste(false)
            setErrorregiste(true)
            setError(error.response.data.message)
            setTimeout(function() {
                setErrorregiste(false)
              }, 3000);
        })
    }
    const handleChange=(event)=>{
        setRegisterData({ ...registerData, [event.target.name]: event.target.value })

    }
    return(
        <>
         < div className="content-login">
                {
                    registe?(<div class="alert alert-success" role="alert">
                                {success}
                        </div>):""
                }
                {
                    errorregiste?(<div class="alert alert-success" role="alert">
                    {error}
            </div>):""
                }
                <div className="log">
                    <h3 className="float-md-start mb-0 mt-1 logo">Asyé</h3>
                </div>
                <div className="login-left">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" name="name" aria-describedby="emailHelp" required placeholder="Ex: Konan" value={registerData.name} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="prenom" className="form-label">Prenom</label>
                            <input type="text" className="form-control" name="prenom" aria-describedby="emailHelp" required placeholder="Ex: Kouakou" value={registerData.prenom} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" required placeholder="Ex: y@gmail.com" value={registerData.email} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" required placeholder="Ex: chccdgPO986" value={registerData.password} onChange={handleChange}/>
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