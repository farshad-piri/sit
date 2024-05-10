

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {useEffect, useState} from "react";
import axios from "axios";
import {Col} from "react-bootstrap";
import Product from "../product/Product";
import {Link} from "react-router-dom";

function SwiperSlider(){
    const [ProduSwiper,setProductSwiper]=useState([])
    useEffect(()=>{
        axios.post("http://localhost:5000/product/get")
            .then((res)=>setProductSwiper(res.data))
    })
    return(
        <>

            <div style={{marginTop:"5vh",padding:"30px",backgroundColor:"#efefef",border:"2px solid #f26f14",borderRadius:"10px"}}>
                <Link style={{textDecoration:"none" ,color:"#000"}} to="/DollPage"><h5 dir="rtl">مشاهده همه...</h5></Link>
            <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={"auto"}

            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            >

                {
                    ProduSwiper.map(data=>(
                        <SwiperSlide  className="col-8  col-sm-4 col-md-3 col-lg-3  ">
                            <Product {...data}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            </div>
        </>
    )

}
export default SwiperSlider