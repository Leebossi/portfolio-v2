import { useState } from "react";
import { useTranslation } from "react-i18next";

interface BikeData {
  images: string[];
  components: Array<{
    name: string;
    specs: Record<string, string | undefined>;
  }>;
}

interface BikeCardProps {
  title: string;
  data: BikeData;
}

const BikeCard = ({ title, data }: BikeCardProps) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? data.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === data.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="card">
      <div className="image-display">
        <img
          src={data.images[currentImageIndex]}
          className="bike-img"
          alt={title}
        />

        <div className="display-controls">
          <button className="button-left" onClick={handlePrevImage}>
            {"<"}
          </button>
          <ol className="display-indicators">
            {data.images.map((_, index) => (
              <li
                key={index}
                className={currentImageIndex === index ? "active" : ""}
                onClick={() => setCurrentImageIndex(index)}
              ></li>
            ))}
          </ol>
          <button className="button-right" onClick={handleNextImage}>
            {">"}
          </button>
        </div>
      </div>

      <div className="bike-details">{t(`bikes.${title}.description`)}</div>
      <h2>{t("bikes.components")}</h2>
      <div className="bike-components">
        <ul>
          {data.components.map((component, index) => (
            <li key={index}>
              {component.name !== "Frame" && (
                <h3>{t(`bikes.${component.name}`)}</h3>
              )}
              <table
                className={
                  index === data.components.length - 1 ? "table-last" : ""
                }
              >
                <tbody>
                  {Object.entries(component.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="td-strong">
                        <strong>{t(`bikes.${key}`)}:</strong>
                      </td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BikeCard;
