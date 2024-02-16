import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/layouts/Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
