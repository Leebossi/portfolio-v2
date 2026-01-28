import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Bikes from "./components/Bikes";
import Work from "./components/Work";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
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
