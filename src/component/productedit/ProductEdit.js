import Card from "react-bootstrap/Card";
import {GiTakeMyMoney} from "react-icons/gi";
import {AiFillEye} from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
function ProductEdit(props){
    return(
        <>
            <Card className='cardproduct ' dir="rtl"  >
                <Card.Img style={{height:"50vh"}}  variant="top"  src={require(`../images/${props.image.image}`)} />
                <Card.Body>
                    <Card.Footer className='card-footer'>
                        <span className='text-primary' ><FiEdit size={30} color={"#000"}/></span>
                        <MdDelete className='icon-product' size={30} onClick={props.deleteProduct}/>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductEdit