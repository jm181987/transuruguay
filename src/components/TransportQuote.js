import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import InputValues from "./InputValues";
import SelectCountry from "./SelectCountry";
const TransportQuote = () => {
  const [date, setDate] = useState(new Date());
  const weekDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nied"];
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  const form = useRef();

  // Email sending
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0avem3t", //service id
        "template_fsl0m39", //email id
        form.current,
        "tm6FWZ5W_B19OxRf8" // public key
      )
      .then(
        (result) => {
          setPassSend(true);
        },
        (error) => {
          setErrorSend(true);
        }
      );
    e.target.reset();
    setErrorSend(false);
    setPassSend(false);
    setFocused({ ...focused, user_phone: false, user_email: false });
  };

  const [values, setValues] = useState({
    kraj_zaladunku: "",
    kod_pocztowy_zaladunku: "",
    data_zaladunku: "",
    kraj_rozladunku: "",
    kod_pocztowy_rozladunku: "",
    data_rozladunku: "",
    waga_ladunku: "",
    dlugosc_ladunku: "",
    szerokosc_ladunku: "",
    wysokosc_ladunku: "",
    user_name: "",
    user_email: "",
    user_phone: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [focused, setFocused] = useState({
    user_email: false,
    user_phone: false,
  });

  const handleFocus = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };

  const [errorSend, setErrorSend] = useState(false);
  const [passSend, setPassSend] = useState(false);
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row  mt-4" id="section5">
        <h2 className="text-center p-3">WYCENA TRANSPORTU</h2>
        {/* ZAŁADUNEK */}
        <div className="col-lg-6 col-sm-12">
          <label className="form-label" htmlFor="">
            Załadunek
          </label>
          <SelectCountry
            aria-label="Kraj załadunku"
            name="kraj_zaladunku"
            value={values["kraj_zaladunku"]}
            setValues={setValues}
            onChange={onChange}
            required={true}
          />
          <InputValues
            type="text"
            className="form-control"
            placeholder="Kod pocztowy"
            aria-label="Kod pocztowy"
            name="kod_pocztowy_zaladunku"
            value={values["kod_pocztowy_zaladunku"]}
            onChange={onChange}
            required={true}
          />
          <label htmlFor="">Konkretna data załadunku</label>
          <br />
          <DatePicker
            className="bg-dark"
            inputClass="form-control"
            placeholder="Wybierz date 📅 "
            aria-label="Wybierz date"
            name="data_zaladunku"
            weekDays={weekDays}
            format="DD/MM/YYYY"
            months={months}
            mapDays={({ date, today, isSameDate }) => {
              let props = {};

              props.style = { color: "#c4c7ca" };

              if (isSameDate(date, today)) {
                props.style.backgroundColor = "rgb(255, 200, 0)";
                props.style.color = "black";
              }

              return props;
            }}
          />
        </div>
        {/* ROZŁADUNEK */}
        <div className="col-lg-6 col-sm-12">
          <label className="form-label" htmlFor="">
            Rozładunek
          </label>
          <SelectCountry
            aria-label="Kraj załadunku"
            name="kraj_zaladunku"
            value={values["kraj_zaladunku"]}
            onChange={onChange}
            required={true}
          />
          <InputValues
            type="text"
            className="form-control"
            placeholder="Kod pocztowy"
            aria-label="Kod pocztowy"
            name="kod_pocztowy_rozladunku"
            value={values["kod_pocztowy_rozladunku"]}
            onChange={onChange}
            required={true}
          />
          <label htmlFor="">Konkretna data rozładunku</label>
          <br />
          <DatePicker
            onChange={setDate}
            className="bg-dark"
            inputClass="form-control"
            placeholder="Wybierz date 📅 "
            aria-label="Wybierz date"
            name="data_rozladunku"
            weekDays={weekDays}
            format="DD/MM/YYYY"
            months={months}
            mapDays={({ date, today, isSameDate }) => {
              let props = {};

              props.style = { color: "#c4c7ca" };

              if (isSameDate(date, today)) {
                props.style.backgroundColor = "rgb(255, 200, 0)";
                props.style.color = "black";
              }

              return props;
            }}
          />
        </div>
        <div className="col-12  my-2">
          <label className="form-label" htmlFor="">
            lub przybliżona data załadunku (za miesiąc, za tydzień etc.)
          </label>
          <InputValues
            type="text"
            className="form-control"
            placeholder="przybliżona data"
            aria-label="przybliżona data"
            name="przyblizona_data_zaladunku"
            required={false}
          />
          <InputValues
            type="text"
            className="form-control"
            placeholder="waga ładunku"
            aria-label="waga ładunku"
            name="waga_ladunku"
            value={values["waga_ladunku"]}
            onChange={onChange}
            required={true}
          />
        </div>
      </div>
      {/* wymiary ładunku */}
      <div className="row">
        <label htmlFor="" className="form-label">
          Wymairy ładunku
        </label>
        <div className="col-lg-4 col-sm-12">
          {" "}
          <InputValues
            type="text"
            className="form-control"
            placeholder="długość"
            aria-label="długość"
            name="dlugosc_ladunku"
            value={values["dlugosc_ladunku"]}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className="col-lg-4 col-sm-12">
          {" "}
          <InputValues
            type="text"
            className="form-control"
            placeholder="szerokość"
            aria-label="szerokość"
            name="szerokosc_ladunku"
            value={values["szerokosc_ladunku"]}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className="col-lg-4 col-sm-12">
          <InputValues
            type="text"
            className="form-control"
            placeholder="wysokość"
            aria-label="wysokość"
            name="wysokosc_ladunku"
            value={values["wysokosc_ladunku"]}
            onChange={onChange}
            required={true}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12  my-2">
          <label className="form-label" htmlFor="">
            W przypadku maszyn:
          </label>
          <InputValues
            type="text"
            className="form-control"
            placeholder="model i rok produkcji"
            aria-label="model i rok produkcji"
            name="model_rok_produkcji"
            required={false}
          />
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Dodaj opis"
              aria-label="Dodaj opis"
              name="opis"
              id="floatingTextarea"
              style={{ height: "150px" }}
            ></textarea>
            <label htmlFor="floatingTextarea">Dodatkowy opis</label>
          </div>
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="form-label">
            Dane kontaktowe dla spedytora
          </label>
          <div className="col-lg-4 col-sm-12 mb-3">
            <InputValues
              type="text"
              className="form-control"
              placeholder="Imię i nazwisko"
              aria-label="Imię i nazwisko"
              name="user_name"
              value={values["nazwa_uzytkownika"]}
              onChange={onChange}
              required={true}
            />
          </div>
          <div className="col-lg-4 col-sm-12 mb-3">
            <InputValues
              type="text"
              className="form-control"
              placeholder="Email 📧"
              aria-label="Email"
              name="user_email"
              value={values["user_email"]}
              onChange={onChange}
              errorMessage="Brak @ w emailu"
              required={true}
              focused={focused["user_email"].toString()}
              onBlur={handleFocus}
              pattern="^\S+@\S+$"
            />
          </div>
          <div className="col-lg-4 col-sm-12 mb-3">
            <InputValues
              type="text"
              className="form-control"
              placeholder="Telefon 📞"
              aria-label="Telefon"
              name="user_phone"
              value={values["telefon"]}
              onChange={onChange}
              errorMessage="Numer telefonu składa się tylko z 9 liczb"
              required={true}
              focused={focused["user_phone"].toString()}
              onBlur={handleFocus}
              pattern="(\d[\s-]*){8,8}\d"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-warning col-md-3 mb-4 mx-md-3 col-sm-12"
        >
          <b>Prośba o wycenę transportu</b>
        </button>
        {errorSend ? (
          <div className="bg-danger text-center col-12">
            <b>COŚ POSZŁO NIE TAK, SPRÓBUJ JESZCZE RAZ 😥</b>
          </div>
        ) : (
          ""
        )}
        {passSend ? (
          <div className="bg-success text-center col-12">
            Wiadomość trafiła we właściwe ręce 😎
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default TransportQuote;
