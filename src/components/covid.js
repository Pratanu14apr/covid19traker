import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      let response = await fetch("https://data.covid19india.org/data.json");
      let actualData = await response.json();
      //   console.log(actualData);
      let stateWise = actualData.statewise;
      //   console.log(stateWise);
      let lastData = stateWise[stateWise.length - 1];
      console.log(lastData);

      setData(lastData); //WB Value
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1>Live Data</h1>
        <div className="title-container">
          <h2>COVID-19 CORONA VIRUS TRACKER</h2>
        </div>

        <ul>
          <li className="card">
            <div className="card-inner">
              <div className="card-small">
                <p className="card-title">
                  <span>OUR</span>
                  COUNTRY
                </p>
                <p className="card-value">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-inner">
              <div
                className="card-small"
                style={{ backgroundColor: "#FFBB70" }}
              >
                <p className="card-title">
                  <span>TOTAL</span>
                  RECOVERED
                </p>
                <p className="card-value">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-inner">
              <div
                className="card-small"
                style={{ backgroundColor: "#87A922" }}
              >
                <p className="card-title">
                  <span>TOTAL</span>
                  CONFIRMED
                </p>
                <p className="card-value">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-inner">
              <div
                className="card-small"
                style={{ backgroundColor: "#86469C" }}
              >
                <p className="card-title">
                  <span>TOTAL</span>
                  DEATH
                </p>
                <p className="card-value">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-inner">
              <div
                className="card-small"
                style={{ backgroundColor: "#FF9800" }}
              >
                <p className="card-title">
                  <span>TOTAL</span>
                  ACTIVE
                </p>
                <p className="card-value">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-inner">
              <div
                className="card-small"
                style={{ backgroundColor: "#41B06E" }}
              >
                <p className="card-title">
                  <span>LAST</span>
                  UPDATED
                </p>
                <p className="card-value">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
