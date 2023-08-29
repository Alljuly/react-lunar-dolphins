import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import Container from "./components/layout/Container";
import NewPlan from "./components/pages/NewPlan";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewPlan" element={<NewPlan />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
