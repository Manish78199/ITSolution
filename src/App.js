import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  const Brand="it Solution.Com";
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<Home Brand={Brand}/>} />
      <Route path="/about" element={<About  Brand={Brand} />} />
    </Routes>
  </div>

  );
}

export default App;




