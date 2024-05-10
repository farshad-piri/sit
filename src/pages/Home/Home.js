import Header from "../../component/Header/Header";
import Slider from "../../component/slider/slider"
import "./Home.css"
import Baner from "../../component/Baner/Baner";
import SwiperSlider from "../../component/swiper/Swiper";
import Swiper2 from "../../component/Swiper2/Swiper2";
import Baner2 from "../../component/Baner2/Baner2";
import Footer from "../../component/footer/footer";


function Home(){
    return(
        <>
            <Baner/>
            <Header/>
            <Slider/>
            <SwiperSlider/>
            <Swiper2/>
            <Baner2/>
            <Footer/>
        </>
    )
}
export default Home