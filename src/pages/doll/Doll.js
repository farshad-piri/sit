import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../../component/product/Product";
import Container from "react-bootstrap/Container";
import {Row,Col} from "react-bootstrap";
import Header from "../../component/Header/Header";
//import {data} from "express-session/session/cookie";

function Doll (props){
    let [dataPageDoll,setDataPageDoll]=useState([])
    useEffect( ()=>{
       axios.post("http://localhost:5000/product/get")
        .then((res)=>setDataPageDoll(res.data))

    },[])

    return(
        <>
        <Header/>
      <Container style={{marginTop:"13vh"}}>
          <Row>
              {
                  dataPageDoll.map(data=>(
                      <Col key={data.id} className=' mt-5   col-sm-6 col-md-4 col-lg-3' lg={3}>
                          <Product {...data} />
                      </Col>
                      )
                  )
              }
          </Row>
      </Container>

        </>
    )
}

export default Doll