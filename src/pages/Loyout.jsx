
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'

const Loyout=({children})=>{
    return(
        <>
            <div className="loyout">
                <div className="slide-loyout"> <Slide/></div>
                <div className="layout">
                    <div className="navbar-loyout"> <Navbar/></div>
                    <div className="children">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loyout;