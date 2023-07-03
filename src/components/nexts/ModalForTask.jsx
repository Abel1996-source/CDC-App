import {Formik,Field,ErrorMessage,Form} from "formik"
import * as Yup from 'yup';
const ModalForTask=()=>{
    const initialValues = {
        title: '',
        description: ''
      };
      const validationSchema = Yup.object({
        title: Yup.string().required('Le titre est requis'),
        description: Yup.string().required('La description est requise')
      });
      const handleSubmit = (values, { setSubmitting }) => {
        console.log('====================================');
        console.log(values);
        console.log('====================================');
      };
    
    return(
        <>
            <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Add Task
            </a>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Ajouter des Tâches à effectuer</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div className="offcanvas-body">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
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

                    <button type="submit" className="btn btn-danger mt-2 form-control">Add Task</button>
                    </Form>
                </Formik>
            </div>
            </div>
        </>
    )
}
export default ModalForTask;