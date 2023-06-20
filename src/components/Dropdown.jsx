import {Link} from 'react-router-dom'
const Dropdown=(props)=>{
    return(
        <>
            <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Récent
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                   
                    {
                        props.projetRecent.map((param)=>(
                            <div className='recent-'> 
                                <Link to="#" className='projetR'>{param}</Link>
                             </div>
                            
                            
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default Dropdown;