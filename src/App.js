import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/addproduct" element={<AddProduct />}></Route>
            <Route path="/editproduct/:id" element={<EditProduct />}></Route>
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
