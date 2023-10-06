import NavigationBar from "./components/Navbar";
import MainFooter from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ranking from "./pages/Ranking";
import Majors from "./pages/Majors";
import RankPAM from "./pages/RankPAM";
import RankPAA from "./pages/RankPAA";
import RankPCCNS from "./pages/RankPCCNS";
import Simulator from "./pages/Simulator";
import SimulatorPAA from "./pages/SimulatorPAA";
import Profile from "./pages/Profile";
import "./styles.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/carreras" element={<Majors />} />
        <Route path="/PAA" element={<RankPAA />} />
        <Route path="/PAM" element={<RankPAM />} />
        <Route path="/PCCNS" element={<RankPCCNS />} />
        <Route path="/Simuladores" element={<Simulator />} />
        <Route path="/SimuladorPAA" element={<SimulatorPAA />} />
        <Route path="/SimuladorPAM" element={""} />
        <Route path="/SimuladorPCCNS" element={""} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
