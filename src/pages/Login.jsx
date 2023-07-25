import { Link } from "react-router-dom";
import { signin } from "../axios/users/users";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup'
import {useState } from "react";


    const Login=()=>{

    let [error,setError]=useState(" ")
    let [loging,setLoging]=useState(false) 
    
    const initialesValues = {
        email:'',
        password:'',
    }

    const validationSchemaValues = yup.object({
        email: loging?yup.string().required("Veuillez saisir votre email"):yup.string().required(error),
        password: yup.string().required("Veuillez saisir votre mot de passe")
    })
   
    const onSubmitLogin = (values) => {
        values={
            email:values.email.trim(),
            password:values.password.trim()
        }
        signin(values).then((response) => {
           localStorage.setItem("tokenHoras", response.data.token);
           window.location.replace('/dashboad');
           setError('')
           setLoging(false)
        }).catch((error) => {
            setError(error.response.data.message);
            setLoging(true)
            setTimeout(function() {
                setLoging(false)
              }, 4500);
            
        })
    
    }
    return(
        <>
            <div className="content-login">
                <div className="log">
                    <h3 className="float-md-start mb-0 mt-1 logo">Asyé</h3>
                </div>
                <div className="login-left">
                <div id="emailHelp" className="form-text"></div>
                <Formik
                        initialValues={initialesValues}
                        validationSchema={validationSchemaValues}
                        onSubmit={onSubmitLogin}
                    >
                        <Form>
                            <div className='mb-3'>
                               {
                                loging?<span style={{color:"red"}}>{error}</span>:""
                               }
                                <div className="input-group mb-3 input-">
                                    <div className="input-group-text">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 0C8.01109 0 7.04439 0.293245 6.22215 0.842652C5.3999 1.39206 4.75904 2.17295 4.3806 3.08658C4.00216 4.00021 3.90315 5.00555 4.09607 5.97545C4.289 6.94536 4.7652 7.83627 5.46447 8.53553C6.16373 9.2348 7.05464 9.711 8.02455 9.90393C8.99445 10.0969 9.99979 9.99784 10.9134 9.6194C11.827 9.24096 12.6079 8.6001 13.1573 7.77785C13.7068 6.95561 14 5.98891 14 5C14 3.67392 13.4732 2.40215 12.5355 1.46447C11.5979 0.526784 10.3261 0 9 0ZM9 8C8.40666 8 7.82664 7.82405 7.33329 7.49441C6.83994 7.16476 6.45542 6.69623 6.22836 6.14805C6.0013 5.59987 5.94189 4.99667 6.05764 4.41473C6.1734 3.83279 6.45912 3.29824 6.87868 2.87868C7.29824 2.45912 7.83279 2.1734 8.41473 2.05764C8.99667 1.94189 9.59987 2.0013 10.1481 2.22836C10.6962 2.45542 11.1648 2.83994 11.4944 3.33329C11.8241 3.82664 12 4.40666 12 5C12 5.79565 11.6839 6.55871 11.1213 7.12132C10.5587 7.68393 9.79565 8 9 8ZM18 19V18C18 16.1435 17.2625 14.363 15.9497 13.0503C14.637 11.7375 12.8565 11 11 11H7C5.14348 11 3.36301 11.7375 2.05025 13.0503C0.737498 14.363 0 16.1435 0 18V19H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13H11C12.3261 13 13.5979 13.5268 14.5355 14.4645C15.4732 15.4021 16 16.6739 16 18V19H18Z" fill="#CE5D1D" />
                                        </svg>

                                    </div>
                                    <Field type="text" placeholder='Login ou Email' name="email" className="form-control loginborderleft" aria-label="Text input with checkbox" />
                                </div>
                                <div>
                                    <ErrorMessage name="email" component="div" style={{color:"red"}} />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className="input-group mb-3 input-">
                                    <div className="input-group-text">
                                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C5.243 0 3 2.243 3 5V8H2C0.897 8 0 8.897 0 10V18C0 19.103 0.897 20 2 20H14C15.103 20 16 19.103 16 18V10C16 8.897 15.103 8 14 8H13V5C13 2.243 10.757 0 8 0ZM14 10L14.002 18H2V10H14ZM5 8V5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5V8H5Z" fill="#CE5D1D" />
                                        </svg>

                                    </div>
                                    <Field type="password" placeholder='Mot de passe' name="password" className="form-control loginborderleft" aria-label="Text input with checkbox" autocommplete="off" />
                                </div>
                                <div>
                                    <ErrorMessage name="password" component="div" style={{color:"red"}} />
                                </div>
                            </div>
                            <div className='d-grid py-3 col-12 mx-auto'>
                                <input type='submit' className='btn text-white btn-warning fw-bold'/>
                            </div>
                            <div className='text-end'>
                                <Link to="#"  className='btn text-primary linktext'>Mot de passe oublié ?</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className="regist">
                        <span>Vous n'avez pas de compte utilisateur? <Link to="/register">Créer un compte</Link></span>
                </div>
            </div>
        </>
    )
}
export default Login;