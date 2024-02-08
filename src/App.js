import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pokedex from "./Pages/Pokedex";
import NotFound from "./Pages/NotFound";

function App() {
  // return <Pokedex />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
