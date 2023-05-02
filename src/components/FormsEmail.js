import { BiBuilding } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
const Forms = () => {

  const [showError] = useState(false);
  const [showPass] = useState(false);
  return (
    <div className="row" id="section6" style={{ backgroundColor: "rgb(27, 20, 100" }}>
      {/* "#443E7D" */}
      <div className="col-12 text-center fw-bold mt-5 fs-1">
      ENTRE EN CONTACTO
      </div>
      {showError ? (
        <div className="bg-danger text-center col-12">
          ALGO SALIÓ MAL. POR FAVOR, VUELVA A INTENTARLO 😥
        </div>
      ) : (
        ""
      )}
      {showPass ? (
        <div className="bg-success text-center col-12">
        El mensaje ha llegado a las manos adecuadas 😎
        </div>
      ) : (
        ""
      )}
      <div className="row ">
        
       
        <div className="col-lg-12 col-12 justify-content-center text-center  my-lg-3 mt-0">
          <BiBuilding className="fs-1 mt-5" style={{ color: "#FFC107" }} />
          <p>
            Rivera - Uruguay
            <br />
            CP: 40000
            <br />
          </p>
          <FaPhone className="fs-1" style={{ color: "#FFC107" }} />
          <p>(+598) 462 46559</p>
          <CiMail className="fs-1 text-wrap" style={{ color: "#FFC107" }} />
          <p>comercial@transuruguay.com</p>
        </div>
      </div>
    </div>
  );
};

export default Forms;
