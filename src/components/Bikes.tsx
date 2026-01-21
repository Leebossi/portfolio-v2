import { useState } from "react";
import bikeData from "../data/bikes.json";
import BikeCard from "./BikeCard";

const Bikes = () => {
  const bikeEntries = Object.entries(bikeData);
  const [selectedBikeIndex, setSelectedBikeIndex] = useState(0);

  return (
    <div id="bikes">
      <h1>Bikes</h1>
      <div className="container">
      <div className="bike-tabs">
        {bikeEntries.map(([bikeKey], index) => (
          <button
            key={bikeKey}
            className={`bike-tab ${selectedBikeIndex === index ? "active" : ""}`}
            onClick={() => setSelectedBikeIndex(index)}
          >
            {bikeKey}
          </button>
        ))}
      </div>
        <BikeCard
          key={bikeEntries[selectedBikeIndex][0]}
          title={bikeEntries[selectedBikeIndex][0]}
          data={bikeEntries[selectedBikeIndex][1]}
        />
      </div>
    </div>
  );
};

export default Bikes;
