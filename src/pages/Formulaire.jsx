import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Formulaire=()=>{
            const [step, setStep] = useState(1);
        const [formData, setFormData] = useState({
            // Initialisez ici les valeurs de vos champs de formulaire
        });

        const handleNext = () => {
            setStep(step + 1);
        };

        const handlePrevious = () => {
            setStep(step - 1);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };

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
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Rédiger le contexte du projet"></textarea>
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
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Rédiger la description du projet "></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===4&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="visually">Quels sont les fonctionnalités attendues dans votre projet ?</label>
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Lister les fonctionnaliés du projet avec quelque explication (ex:Ajout au panier: l'objectif de cette fonctionnalité est de donner la posibilité à l'utilisatuer d'ajouter un produit au panier par action de clique sue le produit)"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===5&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="visually"> Les quels des fonctionnalités listées à l'étape 4 sont plus important ?</label>
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Lister les fonctionnaliés les plus important"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===6&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="visually">Avez vous une charte graphique (logo, police d'écriture, couleur,maquette etc.)?</label>
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Lister les informations demandées"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===7&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="visually">Quel type de site voulez vous(E-commerce, vitrine, presentation, transport, annonce etc.)?</label>
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Entrer le type de site voulu et aussi les liens des sites que vous appréciez."></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}><i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                    </div>
                                </div> 
                            )
                        }
                        {
                            step===8 &&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="visually">Quel est votre budget ?</label>
                                        <textarea className="form-control" id="context" rows="14" cols="35" placeholder="Entrer le buget que vous avez pour réaliser ce projet !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i></button></Tooltip>
                                        <button className="btn btn-success " type="submit" onChange={handleChange}>Envoyer</button>
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