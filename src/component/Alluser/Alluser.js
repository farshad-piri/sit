
import { FaRegUserCircle } from "react-icons/fa";
import User from "../User/User";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import ProductEdit from "../productedit/ProductEdit";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Carousel from "react-bootstrap/Carousel";
import Product from "../product/Product";
function AllUser(props){
    const [userData,setUserData]=useState([])
    const [productEdit,setProductEdit]=useState([])
    useEffect(()=>{
        axios.post("http://localhost:5000/user/getAll")
            .then((res)=>setUserData(res.data))
        axios.post("http://localhost:5000/product/get")
            .then((res)=>setProductEdit(res.data))
    },[])
    const deleteItem=(data)=>{
        const newuser=userData.filter(user => user.email !== data )
        setUserData(newuser)
        axios.post("http://localhost:5000/user/delete",{"email":data})
    }

    const productItem=(data)=>{
        const newProduct=productEdit.filter((product)=> product._id !== data)
        console.log(newProduct)
        setProductEdit(newProduct)
        axios.post("http://localhost:5000/product/delete",{"_id":data})
        console.log(data)
    }


    return(
        <>
            <div className="container d-lg-flex justify-content-between ">
            <div style={{height:"90vh",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",overflow:"auto"}} className="col-sm-12 col-md-8 col-lg-5 col-xl-5 bg-light m-auto" >
                <div className="d-flex justify-content-center">
                    <FaRegUserCircle  size={70} color="#f26f14"/>
                </div>
                {
                 userData.map(data=>(
                     <div className="mt-5 mx-auto d-flex justify-content-center" >
                         <User key={data.id} {...data} Deleteuser={()=>{deleteItem(data.email)}} />
                     </div>
                 ))
                }
            </div>

                <div style={{height:"90vh",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",overflow:"auto"}} className="col-sm-12 col-md-8 col-lg-5 col-xl-5 m-auto  mt-sm-5 mt-md-5 mt-5 mt-lg-0   bg-light " >
                    <div className="d-flex justify-content-center">
                        <MdOutlineProductionQuantityLimits  size={70} color="#f26f14"/>
                    </div>
                    <div className="mt-5 mx-auto d-flex justify-content-center col-xl-8" >
                        <Carousel slide={false} >
                            {
                                productEdit.map((data)=>(
                                    <Carousel.Item >
                                        <ProductEdit key={data}  {...data} deleteProduct={()=>productItem(data._id)}/>
                                    </Carousel.Item>
                                ))
                            }

                        </Carousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllUser