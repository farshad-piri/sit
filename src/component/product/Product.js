
import Card from 'react-bootstrap/Card'
import './Product.css'
import {AiFillEye} from 'react-icons/ai'
import {Link, useNavigate} from "react-router-dom";

import { GiTakeMyMoney } from "react-icons/gi";
import {isRTL} from "bootstrap/js/src/util";
function Product(props) {
    const navigate=useNavigate()
    const productdata=()=>{
        navigate("/dollpage")
    }
    return (
        <>
            <Card className='cardproduct ' dir="rtl"  >
                <Card.Img style={{height:"40vh"}}  variant="top" src={require(`../images/${props.image.image}`)}  />
                <Card.Body>
                    <Card.Title style={{fontSize:"20px"}}>{props.title}</Card.Title>
                    <Card.Footer className='card-footer '>

                        <span style={{fontSize:"15px"}} className='text-primary ' > {props.price} تومان</span>
                        {/*<AiFillEye size={10} onClick={productdata}/>*/}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    );
}

export default Product