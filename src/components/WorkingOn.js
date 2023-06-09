import React from "react";
import { RiTruckFill } from "react-icons/ri";
const WorkingOn = () => {
  return (
    <div className="row" id="section2" style={{ backgroundColor: "#1b1464" }}>
      <div className="col-12 text-center mb-3 mt-5">
        <div className="text-center fw-bold fs-1">Nuestra flota:</div>
      </div>
      <div className="col-lg m-lg-5 px-lg-5 py-5 my-5 text-center border border-light mt-lg-3">
        <button className="btn rounded-circle btn-warning btn-lg  mb-2 icon-do text-dark">
        <RiTruckFill />
        </button>
        <h4>Transporte de containers</h4>
      </div>

      <div className="col-lg m-lg-5 px-lg-5 py-5 my-5 text-center border border-light mt-lg-3">
        <button className="btn rounded-circle btn-warning btn-lg  mb-2 icon-do text-dark">
          <RiTruckFill />
        </button>
        <h4>Cargas convencionales hasta 28 toneladas</h4>
      </div>
      <div className="col-lg m-lg-5 px-lg-5 py-5 my-5 text-center border border-light mt-lg-3">
        <button className="btn rounded-circle btn-warning btn-lg  mb-2 icon-do text-dark">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.995 511.995"
            style={{ enableBackground: " new 0 0 511.995 511.995" }}
            xmlSpace="preserve"
            width="30"
            height="27"
            fill="currentColor"
          >
            <g>
              <g>
                <path
                  d="M42.797,0v358.25H69.41V123.382c0-27.239,22.161-49.4,49.4-49.4h274.374c27.239,0,49.4,22.161,49.4,49.4V358.25h26.613V0
			H42.797z"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon points="182.545,427.739 182.545,453.196 182.545,455.375 329.45,455.375 329.45,453.196 329.45,427.739 		" />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M412.068,388.766V123.382h0.001c0-10.412-8.471-18.884-18.884-18.884H118.811c-10.412,0-18.884,8.471-18.884,18.884
			v265.384H65.643v33.914h86.386v-25.457h207.938v25.457h86.386v-33.914H412.068z M164.003,344.563
			c-10.43,0-18.884-8.454-18.884-18.884c0-10.43,8.454-18.884,18.884-18.884s18.884,8.454,18.884,18.884
			C182.886,336.109,174.432,344.563,164.003,344.563z M308.539,360.321v15.258h-0.001H203.457v-15.258v-15.258h105.082V360.321z
			 M308.539,308.16h-0.001v15.258H203.457V308.16v-15.258h105.082V308.16z M347.992,344.563c-10.43,0-18.884-8.454-18.884-18.884
			c0-10.43,8.454-18.884,18.884-18.884s18.884,8.454,18.884,18.884C366.875,336.109,358.421,344.563,347.992,344.563z
			 M126.519,271.258V131.091h258.956v140.167H126.519z"
                />
              </g>
            </g>
            <g>
              <g>
                <rect x="157.035" y="161.605" width="197.92" height="79.14" />
              </g>
            </g>
            <g>
              <g>
                <rect x="92.951" y="453.191" width="37.117" height="58.804" />
              </g>
            </g>
            <g>
              <g>
                <rect x="381.932" y="453.191" width="37.117" height="58.804" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </button>
        <h4>Transportes con dimensiones y pesos especiales</h4>
      </div>
    </div>
  );
};

export default WorkingOn;
