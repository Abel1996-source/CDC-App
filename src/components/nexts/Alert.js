import { ToastContainer, Toast } from 'react-bootstrap';

const Alert=(props)=>{
    return(
        <>
           
                <ToastContainer position="center-right" style={{zIndex:"8000",position:"fixed"}}>
                    <Toast show={props.showToast} onClose={() => props.setShowToast(false)} delay={3000} autohide>
                        <Toast.Header closeButton={false}>
                        <strong className="me-auto " style={{color:"#000",fontWeight:"bolder"}}>Information</strong>
                        </Toast.Header>
                        <Toast.Body style={{color:"red",fontWeight:"bolder"}}> {props.children} </Toast.Body>
                    </Toast>
                </ToastContainer>
           

        </>
    )
}
export default Alert;