import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Bikes from "./components/Bikes";
import Work from "./components/Work";

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
          <Route path="/work" element={<Work />} />
          <Route path="/bikes" element={<Bikes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
