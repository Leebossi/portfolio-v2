import { NavLink } from "react-router";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

import { IconBrandGithub } from "@tabler/icons-react";
import { useState } from "react";

const NavBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-main">
        <NavLink to="/">{t("nav.home")}</NavLink>
        <NavLink to="/work">{t("nav.work")}</NavLink>
        <NavLink to="/bikes">{t("nav.bikes")}</NavLink>
      </div>
      <div className="nav-secondary">
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
          <IconBrandGithub />
        </a>
      </div>
      <div className="nav-mobile">
        <div
          className={`hamburger-menu ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`off-screen-menu ${isOpen ? "active" : ""}`}>
        <NavLink to="/">{t("nav.home")}</NavLink>
        <NavLink to="/work">{t("nav.work")}</NavLink>
        <NavLink to="/bikes">{t("nav.bikes")}</NavLink>
        <div className="nav-mobile-secondary">
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
            <IconBrandGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
