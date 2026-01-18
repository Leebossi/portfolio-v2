import { useState } from "react";

interface BikeData {
  description: string;
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? data.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === data.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bike-card">
      <div className="image-carousel">
        <div className="carousel-title">
          <h2>{title}</h2>
        </div>

        <img
          src={data.images[currentImageIndex]}
          className="bike-img"
          alt={title}
        />

        <div className="carousel-controls">
          <button className="button-left" onClick={handlePrevImage}>
            {"<"}
          </button>
          <ol className="carousel-indicators">
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

      <div className="bike-details">{data.description}</div>
      <div className="bike-components">
        <h3>Components</h3>
        <ul>
          {data.components.map((component, index) => (
            <li key={index}>
              {component.name !== "Frame" && <h3>{component.name}</h3>}
              <table
                className={
                  index === data.components.length - 1 ? "table-last" : ""
                }
              >
                <tbody>
                  {Object.entries(component.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="td-strong">
                        <strong>{key}:</strong>
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