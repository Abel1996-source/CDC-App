import {Formik,Field,ErrorMessage,Form} from "formik"


const ModalForTask=(props)=>{
    
    return(
        <>  
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Ajouter des Tâches à effectuer</h5>
                <button type="button" className="btn-close text-reset fermer" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div className="offcanvas-body">
                <Formik
                    initialValues={props.initialValues}
                    onSubmit={props.handleSubmit}
                    validationSchema={props.validationSchema}
                    >
                    <Form>
                    <div className="title-task">
                        <Field type="text" id="title" name="title" placeholder="Title of Task" className="form-control"/>
                        <ErrorMessage name="title" component="div" style={{color:"red"}} />
                    </div>

                    <div className="description-task">
                        <Field as="textarea" id="description" name="description" placeholder="Description " className="form-control" />
                        <ErrorMessage name="description" component="div" style={{color:"red"}} />
                    </div>

                    <button type="submit" className="btn btn-danger mt-2 form-control" >Add Task</button>
                    </Form>
                </Formik>
            </div>
            </div>
        </>
    )
}
export default ModalForTask;