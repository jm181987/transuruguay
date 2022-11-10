import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
const WorkingOn = () => {
  return (
    <div className="row" id="section2" style={{ backgroundColor: "#1b1464" }}>
      <div className="col-12 text-center mb-3 mt-5">
        <h2>CZYM SIĘ ZAJMUJEMY</h2>
      </div>
      <div className="col-lg m-lg-5 px-lg-5 py-5 my-5 text-center border border-light mt-lg-3">
        <button className="btn rounded-circle btn-warning btn-lg  mb-2 icon-do text-dark">
          <FaTemperatureHigh />
        </button>
        <h4>Transport chłodniczy</h4>
      </div>

      <div className="col-lg m-lg-5 px-lg-5 py-5 my-5 text-center border border-light mt-lg-3">
        <button className="btn rounded-circle btn-warning btn-lg  mb-2 icon-do text-dark">
          <FaTemperatureHigh />
        </button>
        <h4>Transport chłodniczy</h4>
      </div>
      <div className="col-lg m-lg-5 px-lg-5 py-5 my-5 text-center border border-light mt-lg-3">
        <button className="btn rounded-circle btn-warning btn-lg  mb-2 icon-do text-dark">
          <FaTemperatureHigh />
        </button>
        <h4>Transport chłodniczy</h4>
      </div>
    </div>
  );
};

export default WorkingOn;
