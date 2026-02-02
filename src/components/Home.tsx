import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import image from "../assets/img/hero.jpg";

const Home = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, []);

  if (!imageLoaded) {
    return (
      <div id="bikes">
        <h1>Leevi Ossi</h1>
        <div className="container">
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p>{t("loading")}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="home">
      <h1>Leevi Ossi</h1>
      <div className="container">
        <div className="image-display">
          <div className="display-title">
            <h2>{t("home.title")}</h2>
          </div>
          <div className="hero-image-container hero-image-loading"></div>
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
