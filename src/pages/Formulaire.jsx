import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Formulaire=()=>{
            const [step, setStep] = useState(1);
      /*  const [formData, setFormData] = useState({
            // Initialisez ici les valeurs de vos champs de formulaire
        });
*/
        const handleNext = () => {
            setStep(step + 1);
        };

        const handlePrevious = () => {
            setStep(step - 1);
        };

      /*  const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
*/
        const handleSubmit = (e) => {
            e.preventDefault();
    // Effectuez ici la validation finale du formulaire et soumettez les données si tout est valide
  };

    return(
        <>
            <div className="formulaire">
                <div className="form-header">
                    <Link to="/" className="logo-a">
                    <h3 className="float-md-start mb-0 mt-1 logo">Horas</h3>
                    </Link>
                </div>
                <div className="fromulaire-body">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        {
                            step===1 &&(
                                <div className="step-1">
                                    <div className="col-auto">
                                        <label for="staticEmail2" className="visually">Entrer le nom du projet !</label>
                                        <input type="text" readonly className="form-control" id="staticEmail2" placeholder="Projet name"  required/>
                                    </div>
                                    <div className="col-auto">
                                        <label for="startDate" className="visually">À quel date doit débuter votre projet ?</label>
                                        <input type="date" className="form-control" id="startDate" placeholder=""/>
                                    </div>
                                    <div className="col-auto">
                                        <label for="dateEnd" className="visually">Quel est la date de fin de votre projet ?</label>
                                        <input type="date" className="form-control" id="dateEnd" placeholder=""/>
                                    </div>
                                    <div className="col-auto">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===2&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="visually">Quel est le contexte dans lequel le projet se situe ?</label>
                                        <textarea className="form-control" id="context" rows="16" cols="35" placeholder="Contexte du projet"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===3&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="visually">Donne une description détaillé du projet(objectifs, cible, vision, problèmatique traité etc..)</label>
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Contexte du projet"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
export default Formulaire;