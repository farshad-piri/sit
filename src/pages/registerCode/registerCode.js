import './registerCode.css'
import React, {useEffect, useState} from 'react';
import OtpInput from 'react-otp-input';
import {useLocation, useNavigate} from "react-router-dom";

import axios from "axios";

function RegisterCode(){
    const navigiet=useNavigate()
    const code=useLocation()
    const[a,seta]=useState(code.state)
    const [otp, setOtp] = useState('');
    const [codeconfirm,setCodeConfirm]=useState('')
    let [time,setTime]=useState(60)

    useEffect( ()=>{
        var d;
       axios.post("http://localhost:5000/user/login",a)
            .then(res=>{
                setCodeConfirm( res.data)
                     d=setInterval(()=>{
                     setTime(time--)
                         if (time===-1){
                             clearInterval(d)
                             setTime(60)

                         }
                 },1000)
                return ()=>clearInterval(d)
            })

    },[])
    const resendTheCode=()=>{
        var d;
        axios.post("http://localhost:5000/user/login",a)
            .then(res=>{
                setCodeConfirm( res.data)
                d=setInterval(()=>{
                    setTime(time--)
                    if (time===-1){
                        clearInterval(d)
                        setTime(60)

                    }
                },1000)
                return ()=>clearInterval(d)
            })
    }
    const confirmCodeHandler=()=>{
       if (Number(codeconfirm)===Number(otp)){
        navigiet('/panelAdmin')
       }
    }
    return(
        <>
            <div className="sendCode d-flex  position-absolute " >
                <div className="registerCode col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 rounded-5 mt-5 mb-5" >
                    <h6>کد ارسال شده به ایمل را وارد کنید</h6>
                    <div className='inputCode' >
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={5}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{
                                width:50,
                                height:50,
                                margin:10,
                            }}
                        />
                    </div>
                    <button  type="submit" onClick={confirmCodeHandler}>ورود</button>
                    <p onClick={resendTheCode}>ارسال مجدد :{
                      time
                    }</p>
                </div>
            </div>

        </>
    )
}
export default RegisterCode