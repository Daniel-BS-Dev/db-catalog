import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Home from "./pages/Home";


const DRoutes = () => (
 <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/catalog' element={<Catalog />} />
    </Routes>
  </Router>
);

export default DRoutes;