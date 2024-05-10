import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {GiTakeMyMoney} from "react-icons/gi";
import {BsFillBasketFill} from "react-icons/bs";
import Footer from "../footer/footer";

function Desc(props){

    return(
        <>
            <Container  className='mt-5 d-flex justify-content-between'>
                <Row className=' d-flex justify-content-center'>
                    <Col lg={6} className='d-flex'>
                        <Card className='mt-5 w-75 border-primary'>
                            <Card.Img className='w-75'   src={require(`../../component/images/${props.image.image}`)} />
                            <Card.Body>
                                <Card.Title><h3></h3></Card.Title>
                                <Card.Text>
                                    <p></p>
                                </Card.Text>
                                <Card.Footer >
                                    <span className='text-primary'><GiTakeMyMoney size='20px' color='#000'/>{props.price}</span>
                                    <BsFillBasketFill size='20px'/>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} className='mt-5 mt-sm-5 mt-lg-0' >
                        <h1 className='mx-5 fs-4 text-primary'>توضیحات تکمیلی</h1>
                        <p style={{textAlign:'justify'}} className='textproduct'>{props.desc}</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Desc