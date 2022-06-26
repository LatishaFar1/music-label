import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={ <About/>} />
  

        </Routes>
      </Router>
    </div>
  );
}

export default App;
