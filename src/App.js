import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import NavBar from "./Pages/NavBar/NavBar";


function App() {
  return (
    <div className="home-page">
      <Router>
      <Routes>
      <Route path="/" element={<Home />}>
        </Route>
      <Route path="/navbar" element={<NavBar />}>
        </Route>

            
          
          </Routes>
          </Router>
    </div>
 
  );
}

export default App;
