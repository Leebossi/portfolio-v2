const bikes = () => {
  const bikeComponentsData = {
    description:
      "The Peloton bike is a high-tech stationary bicycle that offers live and on-demand fitness classes. It features a large touchscreen display, allowing users to stream workouts from the comfort of their own home.",
    images: [
      "https://www.yksivaihde.net/uploads/default/original/3X/8/6/867f9bd4b7cdc1c4d14603182a496a7002c2a5a5.jpeg",
      "https://live.staticflickr.com/65535/52326850789_76f6d3ad27_k.jpg",
      "https://live.staticflickr.com/65535/52326501636_fc9ab9b6f9_k.jpg",
      "https://www.yksivaihde.net/uploads/default/original/3X/a/7/a71473e84dd1d8e0a981274c7f22fa89316abea1.jpeg",
    ],
    components: [
      {
        name: "Frame",
        specs: {
          Frame: "53cm NJS Steel",
        },
      },
      {
        name: "Cockpit & Seating",
        specs: {
          Headset: "Tange Levin NJS",
          Stem: "Nitto CT-02",
          Handlebars: "Nitto for shred",
          Grips: "Cotton tape with Nitto bar ends",
          Saddle: "Selle Italia Flite Titanium",
          Seatpost: "Nitto S65",
        },
      },
      {
        name: "Drivetrain",
        specs: {
          "Bottom Bracket": "Sugino BB",
          Crankset: "Sugino 75 DD2 165mm",
          Chainring: "AARN 53T",
          Pedals: "Shimano XT",
          Chain: "Izumi Jet Black",
          Cog: "EAI 19T / Dura-Ace 14T",
        },
      },
      {
        name: "Wheels",
        specs: {
          "Front Wheel": "Aerospoke",
          "Rear Hub": "Shimano Dura-Ace 7600",
          "Rear Rim": "H+SON Archetype 32H",
          Tires: "Continental GP5000 / Continental Gatorskin",
        },
      },
    ],
  };

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
