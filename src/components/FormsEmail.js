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
          setshowError(true)
        }
      );
    e.target.reset();
    setshowError(false)
    setshowPass(false)
  };
  const [showError,setshowError] = useState(false)
  const [showPass,setshowPass] = useState(false)
  return (
    <div className="row" id="section6" style={{ backgroundColor: "rgb(51,52,51)"}}>
      <div className="col-12 text-center fw-bold mt-5 fs-1">
        BĄDZMY W KONTAKCIE
      </div>
      { showError ? <div className="bg-danger text-center col-12">COŚ POSZŁO NIE TAK SPRÓBUJ JESZCZE RAZ 😥</div>:"" }
      { showPass ? <div className="bg-success text-center col-12">Wiadomość trafiła we właściwe ręce 😎</div>:"" }
      <div className="col-lg-9 col-md-12 mx-lg-3 mb-3">
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
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
          <button type="submit" className="btn btn-warning ">
            <b>Wyślij do nas zapytanie</b>
          </button>
        </form>
      </div>
      <div className="col-lg-2 col-12 text-center my-lg-5 ">
        <BiBuilding className="fs-1" style={{ color: "#FFC107" }} />
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
  );
};

export default Forms;
