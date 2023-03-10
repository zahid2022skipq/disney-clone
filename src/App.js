import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
