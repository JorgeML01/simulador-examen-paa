import NavigationBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/ranking" element={""} />
        <Route path="/carreras" element={""} />
        <Route path="/PAA" element={""} />
        <Route path="/PAM" element={""} />
        <Route path="/PCCNS" element={""} />
        <Route path="/informacion" element={""} />
        <Route path="/Simuladores" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
