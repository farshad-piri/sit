//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css"
import {Link} from "react-router-dom";

function Header(){
    const expand="md"
    return(
        <>

            <Navbar dir="rtl" key={expand} expand={expand} className="nav"fixed={"top"} >
                <Container>
                    <Navbar.Brand href="#" > فرشاد</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 ">
                                <Nav.Link href="/">صفحه اصلی </Nav.Link>
                                <Nav.Link href="#action2">در باره ما </Nav.Link>
                                <Nav.Link href="#action3">رتباط باما </Nav.Link>
                                <Nav.Link href="#action4"><Link style={{textDecoration:"none",color:"black"}} to={"/register"}>عضویت/ورود</Link> </Nav.Link>
                                <NavDropdown
                                    title="دسته بندی ها"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="/DollPage">عروسک</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}
export default Header