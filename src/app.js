import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import RegisterCode from "./pages/registerCode/registerCode";
import AddProduct from "./pages/addProduct/addProduct";
import Doll from "./pages/doll/Doll";
import AdminPanel from "./pages/adminPanel/adminPanel";
import ProductDesc from "./pages/productDesc/ProductDesc";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/registercode" element={<RegisterCode/>}></Route>
                <Route path="/addproduct" element={<AddProduct/>}></Route>
                <Route path="/DollPage" element={<Doll/>}></Route>
                <Route path="/panelAdmin" element={<AdminPanel/>}></Route>
                <Route path="/productEdit" element={<AdminPanel/>}></Route>
                <Route path="/productDesc/:id" element={<ProductDesc/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default App