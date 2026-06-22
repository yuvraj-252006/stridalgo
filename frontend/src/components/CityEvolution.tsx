import { useState } from "react";
import "../styles/city-evolution.css";

function CityEvolution() {
  const [value, setValue] = useState(100);

  const getTitle = () => {
    if (value >= 500) return "Legendary Empire";
    if (value >= 100) return "Kingdom";
    if (value >= 50) return "Architect";
    if (value >= 10) return "Explorer";
    return "Beginner";
  };

  const buildings = [
    {
      show: value >= 0,
      className: "small",
      height: 60 + value * 0.15,
    },
    {
      show: value >= 10,
      className: "medium",
      height: 90 + value * 0.18,
    },
    {
      show: value >= 50,
      className: "tall",
      height: 130 + value * 0.2,
    },
    {
      show: value >= 100,
      className: "medium",
      height: 100 + value * 0.16,
    },
    {
      show: value >= 200,
      className: "small",
      height: 80 + value * 0.12,
    },
    {
      show: value >= 300,
      className: "tall",
      height: 140 + value * 0.18,
    },
    {
      show: value >= 400,
      className: "medium",
      height: 110 + value * 0.15,
    },
    {
      show: value >= 500,
      className: "skyscraper",
      height: 300,
    },
  ];

  return (
    <section className="city">
      <div className="container">
        <div className="section-heading">
          <h2>Watch your kingdom rise</h2>

          <p>
            Drag the slider through problems solved and see the same city evolve
            at every stage.
          </p>
        </div>

        <div className="city-card">
          <div className="city-header">
            <h3>{getTitle()}</h3>

            <span>{value} problems solved</span>
          </div>

          <div className="city-preview">
            {buildings.map(
              (building, index) =>
                building.show && (
                  <div
                    key={index}
                    className={`building ${building.className}`}
                    style={{
                      height: `${building.height}px`,
                    }}
                  />
                )
            )}
          </div>

          <input
            type="range"
            min="0"
            max="500"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="slider"
          />

          <div className="slider-labels">
            <span>0</span>
            <span>10</span>
            <span>50</span>
            <span>100</span>
            <span>500</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CityEvolution;