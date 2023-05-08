/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience/Experience"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import TinDev from "./pages/Projects/TinDev/TinDev"
import HciBlog from "./pages/HciBlog/HciBlog";
import HciProject1 from "./pages/HciBlog/Project1"
import HciProject2 from "./pages/HciBlog/Project2"
import HciProject3 from "./pages/HciBlog/Project3"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/hci-portfolio' element={<HciBlog />} />
        <Route path='/projects/TinDev' element={<TinDev />} />
        <Route path='/hci-portfolio/project-1' element={<HciProject1 />} />
        <Route path='/hci-portfolio/project-2' element={<HciProject2 />} />
        <Route path='/hci-portfolio/project-3' element={<HciProject3 />} />
      </Routes>
    </Router>
  );
}