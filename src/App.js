import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<Home Brand="itSolution.Com" />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </div>

  );
}

export default App;




