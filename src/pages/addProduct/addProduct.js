import Form from 'react-bootstrap/Form';
import './addProduct.css'
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarAdmin from "../../component/navbarAdmin/navbarAdmin";
function AddProduct(){
    const [dataProduct,setDataProduct]=useState({})
    const [a,setA]=useState({})


  const  inputProductChange=(e)=>{
        setA({...a,[e.target.name]:e.target.value})
  }
    const inputProductChangeimage=(e)=>{
        setDataProduct(e.target.files[0])
    }

    useEffect(()=>{
        setA({
            "title":"",
            "price":"",
            "desc":""
        })
        setDataProduct({
            "photo":""
        })
    },[])

    const dataProductHandler=async (e)=>{
        setA({
            "title":"",
            "price":"",
            "desc":""
        })
        setDataProduct({
            "photo":""
        })
        if ( a.title==="" || a.price==="" || dataProduct.photo==="" || a.desc===""){
            Swal.fire({
                title:'فیلد های خواسته شده به درستی پر نشده است',
                icon:"error"
            })
        }
        else {
            const formData=new FormData()
            formData.append("image",dataProduct);
            await axios.post("http://localhost:5000/image/add",formData)
           await  axios.post("http://localhost:5000/product/add",a)

        }
         Swal.fire({
            title:'محصول با موفقیت اضافه شد',
            icon:"success"
        })
    }
    return(
        <>
            <NavbarAdmin/>

            <div dir="rtl" className="formAddProduct col-10 col-sm-8 col-lg-6 mt-5 ">

                <Form.Group  className="mb-3">
                    <Form.Label>قیمت</Form.Label>
                    <Form.Control style={{border:"none",borderBottom:"2px solid green"}} onChange={inputProductChange} value={a.price}  type="text" name="price" />
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Label>تیتر</Form.Label>
                    <Form.Control style={{border:"none",borderBottom:"2px solid green"}}type="text" onChange={inputProductChange} value={a.title} name="title" />
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Label>توضیحات</Form.Label>
                    <Form.Control style={{border:"none",borderBottom:"2px solid green"}}type="text" onChange={inputProductChange} value={a.desc} size="sm" name="desc" />
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Label>عکس</Form.Label>
                    <Form.Control style={{border:"none",borderBottom:"2px solid green"}} type="file" accept="image/*"  onChange={inputProductChangeimage} value={dataProduct.photo} size="lg" name="photo"/>
                </Form.Group>
                <Form.Group  className="mb-3 ">
                    <Form.Control style={{ backgroundColor:"green",marginTop:"30px",fontSize:"3vh"}} type="button"   size="lg" onClick={dataProductHandler} value="ایجاد محصول" />

                </Form.Group>
            </div>
        </>
    )
}
export default AddProduct