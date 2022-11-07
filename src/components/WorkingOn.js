import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
const WorkingOn = () => {
  return (
    <div className="row m-5" id="section2">
      <div className="col-12 text-center mb-3">
        <h2>CZYM SIĘ ZAJMUJEMY</h2>
      </div>
      <div className="col-lg col-sm-12 m-2 p-5 text-center border border-light">
        <button className=" btn rounded-circle btn-danger btn-lg mb-2 icon-do">
          <FaTemperatureHigh />
        </button>
        <h4>Transport chłodniczy</h4>
      </div>
      <div className="col-lg col-sm-12 m-2 p-5 text-center border border-light">
        <button className=" btn rounded-circle btn-danger btn-lg  mb-2 icon-do">
          <FaTemperatureHigh />
        </button>
        <h4>Transport chłodniczy</h4>
      </div>
      <div className="col-lg col-sm-12 m-2 p-5 text-center border border-light">
        <button className="btn rounded-circle btn-danger btn-lg mb-2 icon-do">
          <FaTemperatureHigh />
        </button>
        <h4>Transport chłodniczy</h4>
      </div>
    </div>
  );
};

export default WorkingOn;
