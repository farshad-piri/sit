
import a1 from "../images/children-1151715_1280.jpg"
import a2 from "../images/pngegg.png"
import "./Baner";
import {motion} from "framer-motion";
function Baner(){
    return(
        <>
            <div style={{marginTop:"120px"}} className="baner1   d-flex  col-12 rounded-5">
                <img  className="col-12 rounded-5" src={a1}/>
                <div className="position-absolute w-25 h-25">
                    <motion.img  className="w-100" src={a2} animate={
                        {
                            marginLeft:[10,20,30,40,50,70,80],
                            marginTop:[20]
                        }
                    }/>
                </div>
            </div>
        </>
    )
}
export default Baner