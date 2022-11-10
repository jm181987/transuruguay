// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
const TransportQuote = () => {
  //   const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState(new Date());
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

  return (
    <form>
      <div className="row  mt-4">
        {/* ZAŁADUNEK */}
        <div className="col-lg-6 col-sm-12">
          <label className="form-label" htmlFor="">
            Załadunek
          </label>
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Kraj załadunku"
              aria-label="Kraj załadunku"
            />
          </div>
          <div className="form-control mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Kod pocztowy"
              aria-label="Kod pocztowy"
            />
          </div>
          <label htmlFor="">Konkretna data załadunku</label>
          <br />
          <DatePicker
            // value={value}
            onChange={setValue}
            // className="form-control"
            className="bg-dark"
            inputClass="form-control"
            placeholder="Wybierz date 📅 "
            aria-label="Wybierz date"
            weekDays={weekDays}
            format="DD/MM/YYYY"
            months={months}
            mapDays={({
              date,
              today,
              selectedDate,
              currentMonth,
              isSameDate,
            }) => {
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
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Kraj rozładunku"
              aria-label="Kraj rozładunku"
            />
          </div>
          <div className="form-control mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Kod pocztowy"
              aria-label="Kod pocztowy"
            />
          </div>
          <label htmlFor="">Konkretna data rozładunku</label>
          <br />
          <DatePicker
            // value={value}
            onChange={setValue}
            // className="form-control"
            className="bg-dark"
            inputClass="form-control"
            placeholder="Wybierz date 📅 "
            aria-label="Wybierz date"
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
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="przybliżona data"
              aria-label="przybliżona data"
            />
          </div>
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="waga ładunku"
              aria-label="waga ładunku"
            />
          </div>
        </div>
      </div>
      {/* wymiary ładunku */}
      <div className="row">
        <label htmlFor="" className="form-label">
          Wymairy ładunku
        </label>
        <div className="col-lg-4 col-sm-12">
          {" "}
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="długość"
              aria-label="długość"
            />
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          {" "}
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="szerokość"
              aria-label="szerokość"
            />
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="wysokość"
              aria-label="wysokość"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12  my-2">
          <label className="form-label" htmlFor="">
            W przypadku maszyn:
          </label>
          <div className="form-control mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="model i rok produkcji"
              aria-label="model i rok produkcji"
            />
          </div>
          <div className="form-floating">
            <textarea
              class="form-control"
              placeholder="Dodaj opis"
              aria-label="Dodaj opis"
              id="floatingTextarea"
              style={{ height: "150px" }}
            ></textarea>
            <label for="floatingTextarea">Dodatkowy opis</label>
          </div>
        </div>
        <div className="row mb-4">
          <label htmlFor="" className="form-label">
            Dane kontaktowe dla spedytora
          </label>
          <div className="col-lg-4 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Imię i nazwisko"
              aria-label="Imię i nazwisko"
            />
          </div>
          <div className="col-lg-4 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email 📧"
              aria-label="Email"
            />
          </div>
          <div className="col-lg-4 col-sm-12 mb-3 justify-content-end">
            <input
              type="text"
              className="form-control"
              placeholder="Telefon 📞"
              aria-label="Telefon"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default TransportQuote;
