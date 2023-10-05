import NavigationBar from "./components/Navbar";
import MainFooter from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ranking from "./pages/Ranking";
import Majors from "./pages/Majors";
import Simulator from "./pages/Simulator";
import RankPAM from "./pages/RankPAM";
import RankPAA from "./pages/RankPAA";
import RankPCCNS from "./pages/RankPCCNS";
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
        <Route path="/informacion" element={""} />
        <Route path="/Simuladores" element={<Simulator />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
