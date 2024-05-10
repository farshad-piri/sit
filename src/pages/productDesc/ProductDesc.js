import Container from "react-bootstrap/Container";
import { Col, Row} from "react-bootstrap";


import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import Footer from "../../component/footer/footer";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsFillBasketFill } from "react-icons/bs";
import Desc from "../../component/desc/Desc";

function ProductDesc(props){
    const [productDesc,setProductDesc]=useState({})
    const id=useParams().id
    console.log(id)
    useEffect(async ()=>{
        axios.post(`http://localhost:5000/product/desc/${id}`)
            .then((res)=>setProductDesc(res.data))
    },[])
    console.log(productDesc)

    return(

        <>
            <Desc {...productDesc} />
        </>
    )
}
export default ProductDesc