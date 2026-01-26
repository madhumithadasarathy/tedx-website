import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Speakers from "./pages/Speakers";
import Program from "./pages/Program";
import Attend from "./pages/Attend";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/program" element={<Program />} />
        <Route path="/attend" element={<Attend />} />
      </Routes>
    </div>
  );
}
