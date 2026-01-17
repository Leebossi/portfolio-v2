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
            src="https://live.staticflickr.com/65535/52326850789_76f6d3ad27_k.jpg"
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

        <div className="bike-details">
          The Peloton bike is a high-tech stationary bicycle that offers live
          and on-demand fitness classes. It features a large touchscreen
          display, allowing users to stream workouts from the comfort of their
          own home.
        </div>
        <div className="bike-components">
          <h3>Components</h3>
          <ul>
            <li>
              <table>
                <tbody>
                  <tr>
                    <td className="td-strong">
                      <strong>Frame:</strong>
                    </td>
                    <td>53cm NJS Steel</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <h3>Cockpit & Seating</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="td-strong">
                      <strong>Headset:</strong>
                    </td>
                    <td>Tange Levin NJS</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Stem:</strong>
                    </td>
                    <td>Nitto CT-02</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Handlebars:</strong>
                    </td>
                    <td>Nitto for shred</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Grips:</strong>
                    </td>
                    <td>Cotton tape with Nitto bar ends</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Saddle:</strong>
                    </td>
                    <td>Selle Italia Flite Titanium</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Seatpost:</strong>
                    </td>
                    <td>Nitto S65</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <h3>Drivetrain</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="td-strong">
                      <strong>Bottom Bracket:</strong>
                    </td>
                    <td>Sugino BB</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Crankset:</strong>
                    </td>
                    <td>Sugino 75 DD2 165mm</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Chainring:</strong>
                    </td>
                    <td>AARN 53T</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Pedals:</strong>
                    </td>
                    <td>Shimano XT</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Chain:</strong>
                    </td>
                    <td>Izumi Jet Black</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Cog:</strong>
                    </td>
                    <td>EAI 19T / Dura-Ace 14T</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <h3>Wheels</h3>
              <table className="table-last">
                <tbody>
                  <tr>
                    <td className="td-strong">
                      <strong>Front Wheel:</strong>
                    </td>
                    <td>Aerospoke</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Rear Hub:</strong>
                    </td>
                    <td>Shimano Dura-Ace 7600</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Rear Rim:</strong>
                    </td>
                    <td>H+SON Archetype 32H</td>
                  </tr>
                  <tr>
                    <td className="td-strong">
                      <strong>Tires:</strong>
                    </td>
                    <td>Continental GP5000 / Continental Gatorskin</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default bikes;
