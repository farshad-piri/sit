import React from 'react'

import './Baner2.css'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
function Baner2(){
    const [text]=useTypewriter({
        words:['با toy store' ,'خرید ارزان ','خرید اسان  ','خریدی امن '],
        loop:{},
        Cursor,
        typeSpeed:200,
        deleteSpeed:120
    });
    return(
        <>
            <div dir="rtl" style={{width:"100%",height:"30vh",marginTop:"5vh",borderRadius:"10px"}}className="Baner2">
                <div style={{width:'100vh',color:"red",fontSize:"10vh",marginRight:"140vh",fontWeight:"bold"}}>
                    {text}
                </div>
            </div>
        </>
    )
}
export default Baner2