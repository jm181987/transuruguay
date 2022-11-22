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
    <div className="row" id="section6" style={{ backgroundColor: "#443E7D" }}>
      <div className="col-12 text-center fw-bold mt-5 fs-1">
        BĄDŹMY W KONTAKCIE
      </div>
      {showError ? (
        <div className="bg-danger text-center col-12">
          COŚ POSZŁO NIE TAK SPRÓBUJ JESZCZE RAZ 😥
        </div>
      ) : (
        ""
      )}
      {showPass ? (
        <div className="bg-success text-center col-12">
          Wiadomość trafiła we właściwe ręce 😎
        </div>
      ) : (
        ""
      )}
      <div className="row ">
        <div className="col-6 map-responsive m-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021.0095103875435!2d16.750266578062792!3d52.50839755934989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704405c79fab24d%3A0x9bfe31c8e6591d78!2sRolna%2015A%2C%2062-090%20Rokietnica!5e0!3m2!1spl!2spl!4v1668842427492!5m2!1spl!2spl"
            width="100vw"
            height="100vh"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-lg-3 col-md-12 mx-lg-3 m-3">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">
                Imię i nazwisko
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
                Adres email
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
                Tytuł
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
                {/* Jakiś text */}
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Treść emaila
              </label>
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
                <b>Wyślij do nas zapytanie</b>
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-2 col-12 justify-content-center text-center mt-5">
          <BiBuilding className="fs-1 mt-5" style={{ color: "#FFC107" }} />
          <p>
            Rolna 15A 62-090 Rokietnica
            <br />
            NIP: 777-180-19-83
            <br />
            PL REGON: 630836009
          </p>
          <FaPhone className="fs-1" style={{ color: "#FFC107" }} />
          <p>(+48) 618 145 376</p>
          <CiMail className="fs-1" style={{ color: "#FFC107" }} />
          <p>mariuszmichalicki@o2.pl</p>
        </div>
      </div>
    </div>
  );
};

export default Forms;
