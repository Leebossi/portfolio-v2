import { useTranslation } from "react-i18next";
import image from "../assets/img/hero.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="home">
      <h1>Leevi Ossi</h1>
      <div className="container">
        <div className="image-display">
          <div className="display-title">
            <h2>{t("home.title")}</h2>
          </div>
          <div className="hero-image-container">
            <img src={image} className="hero-img" alt="leevi" />
            <div className="hero-text">
              <p>{t("home.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
