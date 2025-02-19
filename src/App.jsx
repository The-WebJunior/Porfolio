import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./Portfolio"; // Vérifie bien le chemin et le nom du fichier
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
