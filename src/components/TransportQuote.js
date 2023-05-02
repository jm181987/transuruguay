import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import InputValues from "./InputValues";
import SelectCountry from "./SelectCountry";
const TransportQuote = () => {
  const [date, setDate] = useState(new Date());
  const weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
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
    cargando_país: "",
     cargando_código_postal: "",
     fecha_de_carga: "",
     país_descarga: "",
     código_postal_de_descarga: "",
     fecha_de_descarga: "",
     peso_carga: "",
     longitud_carga: "",
     ancho_de_carga: "",
     altura_de_carga: "",
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
    <div className="row" style={{ backgroundColor: "rgb(27, 20, 100" }}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row mx-5 mt-2" id="section5">
          <h2 className="text-center p-3 fw-bold">Cotize su transporte</h2>
          {/* ZAŁADUNEK */}
          <div className="col-lg-6 col-sm-12">
            <label className="form-label fs-4" htmlFor="">
              País donde carga:
            </label>
            <SelectCountry
              aria-label="País de carga"
              name="País de carga"
              value={values["País de carga"]}
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
              className="bg-light"
              inputClass="form-control"
              placeholder="Fecha  📅 "
              aria-label="Fecha"
              name="Fecha"
              weekDays={weekDays}
              format="DD/MM/YYYY"
              months={months}
              mapDays={({ date, today, isSameDate }) => {
                let props = {};

                props.style = { color: "black" };

                if (isSameDate(date, today)) {
                  props.style.backgroundColor = "#DDDDD";
                  props.style.color = "black";
                }

                return props;
              }}
            />
            <br />
            {/* ROZŁADUNEK */}
            <label className="form-label mt-3 fs-4" htmlFor="">
            Descarga
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
              className="bg-light"
              inputClass="form-control"
              placeholder="Wybierz date 📅 "
              aria-label="Wybierz date"
              name="data_rozladunku"
              weekDays={weekDays}
              format="DD/MM/YYYY"
              months={months}
              mapDays={({ date, today, isSameDate }) => {
                let props = {};

                props.style = { color: "black" };

                if (isSameDate(date, today)) {
                  props.style.backgroundColor = "#DDDDD";
                  props.style.color = "black";
                }

                return props;
              }}
            />
            <br />
            <label className="form-label my-3 " htmlFor="">
            Fecha aproximada de carga (en un mes, en una semana, etc.)            </label>
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
          {/* wymiary ładunku */}
          {/* <div className="row mx-5 justify-content-center"> */}
          <div className="col-lg-6 col-sm-12">
            <label htmlFor="" className="form-label fs-4">
            Dimensiones de la carga            </label>
            <div className="col-lg-12 col-sm-12">
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
            <div className="col-lg-12 col-sm-12">
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
            <div className="col-lg-12 col-sm-12">
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
              <div className="col-lg-12  my-2 col-sm-12">
                <label className="form-label" htmlFor="">
Para Maquinas                </label>
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
                    style={{ height: "93px" }}
                  ></textarea>
                  <label
                    htmlFor="floatingTextarea"
                    style={{ color: "#212529" }}
                  >
                 Descripción adicional
                  </label>
                </div>
              </div>
            </div>
            <label
              htmlFor=""
              className="form-label text-center fs-4"
              style={{ marginTop: "5.5px" }}
            >
Datos de Contacto:            </label>
            <div className="col-lg-12 col-sm-12 mb-1">
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
            <div className="col-lg-12 col-sm-12 mb-1">
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
            <div className="col-lg-12 col-d-12 mb-1">
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
        </div>
        <div className="justify-content-center d-flex">
          <button
            type="submit"
            className="btn btn-warning col-lg-3 col-md-6 mb-4 mx-md-3 col-sm-12 "
          >
            <b>Solicitud de presupuesto de transporte</b>
          </button>
        </div>
        {errorSend ? (
          <div className="row">
            <div className="bg-danger text-center col-12">
              <b>ALGO ESTÁ MAL, POR FAVOR VUELVA A  😥</b>{" "}
            </div>{" "}
          </div>
        ) : null}
        {passSend ? (
          <div className="row">
            <div className="bg-success text-center col-12">
              <b>El mensaje ha llegado a las manos adecuadas 😎</b>{" "}
            </div>{" "}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TransportQuote;
