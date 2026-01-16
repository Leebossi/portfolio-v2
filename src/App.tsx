import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-main">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/bikes">Bikes</NavLink>
        </div>
        <div className="nav-socials">
          <a href="https://github.com/leebossi" target="_blank" rel="noopener noreferer">GitHub</a>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<div>Work Component</div>} />
          <Route path="/bikes" element={<div>Bikes Component</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
