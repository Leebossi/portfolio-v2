import { NavLink, Route, Routes } from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import "./App.css";
import Home from "./components/Home";
import Bikes from "./components/Bikes";
import Work from "./components/Work";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <nav>
        <div className="nav-main">
          <NavLink to="/">{t("nav.home")}</NavLink>
          <NavLink to="/work">{t("nav.work")}</NavLink>
          <NavLink to="/bikes">{t("nav.bikes")}</NavLink>
        </div>
        <div className="nav-socials">
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "fi" : "en")
            }
          >
            {i18n.language === "en" ? "FI" : "EN"}
          </button>
          <a
            href="https://github.com/leebossi"
            target="_blank"
            rel="noopener noreferer"
          >
            GitHub
          </a>
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
