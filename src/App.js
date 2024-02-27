import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/Layout";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Pokedex from "./Pages/Pokedex";
// import ProductLayout from "./layouts/ProductLayout";
// import Product from "./Pages/Product";
// import ProductNew from "./Pages/ProductNew";
// import ProductDetails from "./Pages/ProductDetails";
import ProductRoutes from "./routes/ProductRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="pokemon" element={<Pokedex />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/product/*" element={<ProductRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
