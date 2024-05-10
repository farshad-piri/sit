import "./Register.css"
import { motion} from "framer-motion"
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";



function Register(){
    const patternEmail=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    const [datEmail,setDatEmail]=useState({})
    console.log(typeof datEmail)
    const navigite=useNavigate()
    const sendEmailUser=datEmail.email
    const userEmail=(e)=>{
        setDatEmail({...datEmail,[e.target.name]:e.target.value})
    }
     const   registerUserHandler=()=>{
           if (patternEmail.test(datEmail.email)){
              axios.post("http://localhost:5000/user/register",datEmail)
                navigite('/registercode',{state:{sendEmailUser}})
           }else {
               Swal.fire({
                   title:"ایمیل را به درستی وارد کنید",
                   icon:"error"
               })
           }
       }
    return(
        <>
            <div className="back d-flex justify-content-center ">
                <div className="register mt-5 mb-5 col-11  col-sm-10 col-md-8 col-lg-6 col-xl-4 rounded-5 position-relative">
                    <div className="registerTitle">
                        <motion.h3 animate={{x:145}}>toy store </motion.h3>
                    </div>
                    <div className="registerTitle2">
                        <h6>ثبت نام /عضویت </h6>
                    </div>
                    <div className="registerTitle3">
                        <p>لطفا ایمیل خود را وارد کنید</p>
                    </div>
                    <div className='registerInput '>
                        <motion.input  type="email" name="email" onChange={userEmail}   animate={
                            {
                                opacity:[0,.1,.3,.5],
                                height:[10,20,30,40,50]
                            }
                        }/>
                    </div>
                    <div className='registerButton col-4'>
                        <motion.button   animate={{
                          opacity:[0,.25,.5,.75,1]
                        }
                        } type="submit" onClick={registerUserHandler} >ورود</motion.button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Register
