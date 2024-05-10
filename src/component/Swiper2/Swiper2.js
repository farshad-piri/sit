
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../product/Product";
import {Link} from "react-router-dom";


function Swiper2(){
    const [dataSwiper,setDataSwiper]=useState([])
    useEffect(()=>{
        axios.post("http://localhost:5000/product/get")
            .then((res)=>setDataSwiper(res.data))
    })
    return (
        <>
            <div  style={{marginTop:"5vh",padding:"30px",backgroundColor:"#efefef",border:"2px solid #f26f14",borderRadius:"10px"} }>
                <Link style={{textDecoration:"none" ,color:"#000"}} to="/DollPage"><h5 dir="rtl">مشاهده همه...</h5></Link>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    dataSwiper.map(data=>(
                        <SwiperSlide className=" col-8 col-sm-4 col-md-3 col-lg-3  ">
                          <Product {...data}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </>
    );
}
export default Swiper2