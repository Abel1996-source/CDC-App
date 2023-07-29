import { Button, Modal, Box } from '@mui/material';
import { deleteevent } from '../../axios/events/eventRequest';
import { DecodeToken } from '../../DecodeToken';

const ModaleCalendar=(props)=>{

    const suprimerevent=(id)=>{
        deleteevent(DecodeToken().userId,id).then((res)=>{
            props.setShowToast(true)
            props.setOpen(false)
            props.chargementdesevenements();//actualisation de la liste
            props.setInfo(res.data.message)
        }).catch((err)=>{
            props.setShowToast(true)
            props.setInfo(err.response.data.message)
        })
    }

    return(
        <>
            <Modal open={props.open} onClose={() => props.setOpen(false)}>
                <Box sx={{ width: 350, bgcolor: 'background.paper', p: 2 , position:'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: 4, zIndex:"1000"}}>
                    {/* Contenu du modal */}
                    <h4 className='badge bg-dark'>#Évènement </h4>
                    <p className='alert alert-info' role='alert'>{props.eventid.title} </p>
                    <Button variant="contained" onClick={() => props.setOpen(false)}>
                        close
                    </Button>
                    <Button sx={{m:2, left:"40%",backgroundColor:"red"}} variant="contained" onClick={()=>suprimerevent(props.eventid.id)}>
                        delete
                    </Button>
                </Box>
            </Modal>

        </>
    )
}
export default ModaleCalendar;