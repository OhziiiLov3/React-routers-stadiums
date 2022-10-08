import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Stadium from './components/Stadium';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/stadium">Stadium</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stadium" element={< Stadium/>} />
      </Routes>
    </Router>
  );
}

export default App;
