import { BiBuilding } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const Forms = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0avem3t",
        "template_8sitnwi",
        form.current,
        "tm6FWZ5W_B19OxRf8"
      )
      .then(
        (result) => {
          setshowPass(true);
        },
        (error) => {
          setshowError(true);
        }
      );
    e.target.reset();
    setshowError(false);
    setshowPass(false);
  };
  const [showError, setshowError] = useState(false);
  const [showPass, setshowPass] = useState(false);
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
        <div className="col-lg-6 col-md-12 map-responsive m-lg-3">
          <iframe
            src=""
            width="100vw"
            height="100vh"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-lg-3 col-md-12 mx-lg-3 my-lg-3">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">
              Nombre y apellido
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                aria-describedby="user_name "
                name="user_name"
              />
              <div id="titleHelp" className="form-text">
                {/* Jakiś text */}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
               Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="user_email"
                required
              />
              <div id="emailHelp" className="form-text">
                {/* Jakiś text */}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="titleHelp"
                name="email_title"
                required
              />
              <div id="titleHelp" className="form-text">
                {/* algun texto*/}
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
Texto del correo electrónico              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                name="email_description"
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-warning">
                <b>Envíenos una consulta</b>
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-2 col-12 justify-content-center text-center  my-lg-3 mt-0">
          <BiBuilding className="fs-1 mt-5" style={{ color: "#FFC107" }} />
          <p>
            Rivera - Uruguay
            <br />
            CP: 40000
            <br />
          </p>
          <FaPhone className="fs-1" style={{ color: "#FFC107" }} />
          <p>(+598) 93867429</p>
          <CiMail className="fs-1 text-wrap" style={{ color: "#FFC107" }} />
          <p>comercial@transuruguay.com</p>
        </div>
      </div>
    </div>
  );
};

export default Forms;
