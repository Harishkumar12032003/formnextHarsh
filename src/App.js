import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pages
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";
// Components
import { Header, Footer } from "./components";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import Blogs from "./pages/blogs/blogs";
import About from "./pages/about/about";
import Simulation from "./pages/simulation/simulation";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Crop from "./components/crop";


function App() {
  return (
    <>
    <script src="https://www.tinkercad.com/embed-api/js/embed-api.min.js"></script>

      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Crop/>} />
          <Route path="/about" element={<About />} />
          <Route path="/simulation" element = {<Simulation/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
