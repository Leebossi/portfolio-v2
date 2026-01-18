import bikeData from "../data/bikes.json";
const bikeComponentsData = bikeData.Peloton;

const bikes = () => {
  return (
    <div id="bikes">
      <h1>Bikes</h1>
      <div className="bike-card">
        {/* image carousel starts here */}
        <div className="image-carousel">
          <div className="carousel-title">
            <h2>Peloton</h2>
          </div>

          <img
            src={bikeComponentsData.images[0]}
            className="bike-img"
            alt="peloton bike"
          />

          <div className="carousel-controls">
            <button className="button-left">{"<"}</button>
            <ol className="carousel-indicators">
              <li className="active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
            <button className="button-right">{">"}</button>
          </div>
        </div>

        <div className="bike-details">{bikeComponentsData.description}</div>
        <div className="bike-components">
          <h3>Components</h3>
          <ul>
            {bikeComponentsData.components.map((component, index) => (
              <li key={index}>
                {component.name !== "Frame" && <h3>{component.name}</h3>}
                <table
                  className={
                    index === bikeComponentsData.components.length - 1
                      ? "table-last"
                      : ""
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
    </div>
  );
};

export default bikes;
