import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import "./slider.css"
import slide1 from "../images/pngegg(0).png"
import slide2 from "../images/pngegg (2).png"
import slide3 from "../images/pngegg (3).png"


function Slider(){
    return(
        <>
            <div className="d-flex justify-content-evenly rounded rounded-5" >
            <Carousel className=" carousel1 col-8 " slide={false}>
                <Carousel.Item className="item " interval={1000} >
                    <img className="w-75  rounded-5 size" src={slide1}/>
                </Carousel.Item>
                <Carousel.Item interval={1000} >
                    <img className="w-75 rounded-5 size" src={slide2}/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="w-75 rounded-5 size" src={slide3}/>
                </Carousel.Item>
            </Carousel>
            <Card className="col-3 rounded-5  cardSlider">

            </Card>
            </div>
        </>
    )
}
export default Slider