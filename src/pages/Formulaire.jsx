import { Tooltip } from "@mui/material";
import { useState } from "react";



const Formulaire=()=>{
            const [step, setStep] = useState(1);
        const [formData, setFormData] = useState({
            // Initialisez ici les valeurs de vos champs de formulaire
        });
        const domain=[
            {id:1,domain:"Ingénierie Industrielle"},
            {id:2,domain:"Développement de produit"},
            {id:3,domain:"Informatique"},
            {id:4,domain:"Ingénierie de service"},
            {id:5,domain:"Evénementiels"},
            {id:6,domain:"Agrculture"},
            {id:7,domain:"Immobilier"},
            {id:7,domain:"Autre"},
            {id:8,domain:"Robotique"},
            {id:9,domain:"Développement web et mobile"},
            {id:10,domain:"Inteligence Artificielle"},
            {id:11,domain:"Electronique"},
            {id:12,domain:"Electrotechnique"},
            {id:13,domain:"Automatisme"},
            {id:14,domain:"E-commerce"},

        ]

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
                   <span className="badge bg-primary">
                         {step===1?"Initialistaion":step===2? "Déclaration d'opportunité":step===3?"Mission et Aspiration":step===4?"Critère de décision des clients":step===5?"Impact du produit sur les clients":step===6?"Impact du produit sur les clients":step===7?"ECU":step===8?"Les obstables":step===9?"Déclaration de succès":step===10&&"Plans d'action et ressources"}
                   </span>
                </div>
                <div className="fromulaire-body">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        {
                            step===1 &&(
                                <div className="step-1">
                                    <div>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected className="badge bg-primary" disabled>Sélectionner votre domain d'activité</option>
                                            {
                                                domain.map((param)=><option key={param.id} value={param.domain} style={{padding:20}}>{param.domain}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="objectif">
                                        <div className="col-auto">
                                            <label for="objectif" className="badge bg-primary">Quels sont les objectifs que vous visez à travers votre projet ?</label>
                                            <textarea className="form-control" id="objectif" rows="4" cols="3" placeholder="Lister les objectifs du projet ici !"></textarea>
                                        </div>
                                    </div>
                                    <div className="objectif">
                                        <div className="col-auto">
                                            <label for="objectif" className="badge bg-primary">Quels sont les besoins auxquels votre projet repond ?</label>
                                            <textarea className="form-control" id="objectif" rows="4" cols="3" placeholder="Lister ces besoins ici !"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Tooltip title="Next step"><button type="submit" className="btn btn-primary mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===2&&(
                                <div className="step-1">
                                    <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quels sont les solutions que vous apportez pour repondre aux besoins observés?</label>
                                        <textarea className="form-control" id="context" rows="5" cols="3" placeholder="Lister ces solutions ici !"></textarea>
                                    </div>
                                    <div className="col-auto">
                                        <label for="opportunite" className="badge bg-primary">Rédiger votre déclaration d'opportunité !</label>
                                        <textarea className="form-control" id="opportunite" rows="5" cols="3" placeholder="Rédiger votre déclaration d'opportunité ici !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next step"><button type="submit" className="btn btn-primary mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===3&&(
                                <div className="step-1">
                                    <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quelle est la mission de votre organisation ?</label>
                                        <textarea className="form-control" id="context" rows="4" cols="3" placeholder="Rédiger ici la mission de votre organisation en quelques lignes !"></textarea>
                                    </div>
                                    <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quelles sont les aspirations de vos partenaires ?</label>
                                        <textarea className="form-control" id="context" rows="5" cols="3" placeholder="Rédiger ici les aspirations de vos partenaires !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next step"><button type="submit" className="btn btn-primary mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===4&&(
                                <div className="step-1">
                                    <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Qu'est ce qui peut aider les clients à choisir votre produit ?</label>
                                        <textarea className="form-control" id="context" rows="5" cols="3" placeholder="Rédiger les clitères de décision des clients !"></textarea>
                                    </div>
                                    <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quels sont les contraintes liées au projet ?</label>
                                        <textarea className="form-control" id="context" rows="5" cols="3" placeholder="Lister les contraintes externes et internes liées au projet !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-primary mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===5&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary"> Le produit est-il util au client ?</label>
                                        <textarea className="form-control" id="context" rows="2" cols="3" placeholder="Exepliquer ici !"></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary"> Comment l’achat affectera-t-il la situation financière globale du client ?</label>
                                        <textarea className="form-control" id="context" rows="3" cols="3" placeholder="Expliquer ici !"></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary"> Quel est l’impact du produit sur l’image du client ?</label>
                                        <textarea className="form-control" id="context" rows="3" cols="3" placeholder="Expliquer ici !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-primary mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===6&&(
                                <div className="step-1">
                                    <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quels sont les paramètres émotionnels liés au produit?</label>
                                        <textarea className="form-control" id="context" rows="4" cols="3" placeholder="Lister les ici !"></textarea>
                                    </div>
                                    <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quel sera l'impact du produit sur le client à long terme?</label>
                                        <textarea className="form-control" id="context" rows="4" cols="3" placeholder="Lister les ici !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next step"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===7&&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Formuler l'exigences clientèles unique !</label>
                                        <textarea className="form-control" id="context" rows="3" cols="3" placeholder="Expliciter la nature de la solution et sa contribution à la satisfaction clientèle."></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quels sont les indicateurs de succès du projet?</label>
                                        <textarea className="form-control" id="context" rows="3" cols="3" placeholder="Les lister ici !"></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quels sont les terminators du projet?</label>
                                        <textarea className="form-control" id="context" rows="3" cols="3" placeholder="Ceux sont les indicateurs de succès qui pouront mettre fin au ptojet . Les lister ici!"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div> 
                            )
                        }
                        {
                            step===8 &&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Quels sont les obstacles à la réalisation du projet ?</label>
                                        <textarea className="form-control" id="context" rows="4" cols="3" placeholder="Lister ici !"></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Identifier les incertitudes liées au projet  !</label>
                                        <textarea className="form-control" id="context" rows="4" cols="3" placeholder="Lister ici !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===9 &&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Identifier les risques liés au projet !</label>
                                        <textarea className="form-control" id="context" rows="4" cols="3" placeholder="Lister ici !"></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Formuler la declaration de succès!</label>
                                        <textarea className="form-control" id="context" rows="4" cols="3" placeholder="Lister ici !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Next"><button type="submit" className="btn btn-danger mb-3  next" onClick={handleNext}>Next<i className="bi bi-chevron-compact-right"></i></button></Tooltip>
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
                                    </div>
                                </div>
                            )
                        }
                        {
                            step===10 &&(
                                <div className="step-1">
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Elaborer un plan d'action permettant de concrétiser la définition du succès. !</label>
                                        <textarea className="form-control" id="context" rows="3" cols="3" placeholder="Lister vos plans d'action ici !"></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Evaluer les ressources nécessaire à la réalisation des plans d'action!</label>
                                        <textarea className="form-control" id="context" rows="3" cols="3" placeholder="Lister vous ressources ici !"></textarea>
                                    </div>
                                     <div className="col-auto">
                                        <label for="context" className="badge bg-primary">Rédiger votre elevator pitch !</label>
                                        <textarea className="form-control" id="context" rows="2" cols="3" placeholder="Rédiger votre pitch ici !"></textarea>
                                    </div>
                                    <div className="col-auto button">
                                        <Tooltip title="Previous"><button type="submit" className="btn btn-dark mb-3  next" onClick={handlePrevious}><i className="bi bi-chevron-compact-left"></i>Previous</button></Tooltip>
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