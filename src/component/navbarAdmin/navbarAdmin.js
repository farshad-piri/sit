import './navbarAdmin.css'
import { MdOutlineLegendToggle } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
function NavbarAdmin({ name, ...props }){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
           <MdOutlineLegendToggle size={40} onClick={handleShow} style={{marginLeft:"96%"}}/>

            <Offcanvas style={{width:"30vh"}} show={show} onHide={handleClose} dir="ltr" >
                <Offcanvas.Header style={{margin:"0 auto"}} closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body dir="rtl">
                    <Nav.Link className="mt-5" href="/">صفحه اصلی <FaHome/></Nav.Link>
                    <Nav.Link className="mt-5" href="/panelAdmin">پنل ادمین <RiAdminFill/></Nav.Link>
                    <Nav.Link className="mt-5" href="/addproduct">افزودن محصول</Nav.Link>
                    <Nav.Link className="mt-5" href="#pricing">ویرایش محصول</Nav.Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


export default NavbarAdmin