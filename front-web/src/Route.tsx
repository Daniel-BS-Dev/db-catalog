import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NavBar from "./components/NavBar";
import Footer from "components/Footer";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Home from "./pages/Home";



const DRoutes = () => (
 <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/admin" element={<Navigate replace to="/admin/products" />} />
      <Route path='/admin/*' element={<Admin/>} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    <Footer />
  </Router>
);

export default DRoutes;