/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience/Experience"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import TinDev from "./pages/Projects/TinDev/TinDev"
import HciBlog from "./pages/HciBlog/HciBlog";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/hci-blog' element={<HciBlog />} />
        <Route path='/projects/TinDev' element={<TinDev />} />
      </Routes>
    </Router>
  );
}