
import './footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";


function Footer(){
    return(
        <>

                    <div className='footer' dir="rtl">
                    <div className='services '>
                        <div>
                            <h3>مار را دنبال کنید</h3>
                        </div>
                       <div className='icon-parent'>
                           <ul className='follow'>
                               <li><FaInstagram  size={40} color={'#f18129'}/> </li>
                               <li><FaTelegram size={40} color={'#f18129'}/></li>
                               <li> <li><FaWhatsapp size={40} color={'#f18129'}/></li></li>
                           </ul>
                           <input className='serch' type="text"/>
                           <IoMdSearch className='icon-search'/>
                       </div>

                    </div>
                    <div className='services '>
                        <h3>راهنمای خرید </h3>
                        <ul className='services-ul'>
                            <li>خرید اسان </li>
                            <li>تضمین قیمت</li>
                            <li>خرید امن</li>
                            <li>خرید در کمترین زمان</li>
                        </ul>
                    </div>
                    <div className='services '>
                        <h3>خدمات مشتریان</h3>
                        <ul className='services-ul' >
                            <li> امکان بازگشت کالا </li>
                            <li>خرید اقساطی</li>
                            <li>تحویل درب منزل</li>
                        </ul>
                    </div>
            </div>


        </>
    )
}
export default Footer