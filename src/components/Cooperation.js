import { GiDesk } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { IconContext } from "react-icons";
import { GiMoneyStack } from "react-icons/gi";
import { GiTruck } from "react-icons/gi";
const Cooperation = () => {
  return (
    <div
      className="row justify-content-between "
      id="section4"
      style={{ backgroundColor: "rgb(51,52,51)" }}
    >
      <div className="col-12 text-center fw-bold mt-5 fs-1">
        ZAPRASZAMY DO WSPÓŁPRACY
      </div>
      <div className="col-12 text-center text-warning my-2 fs-5">
        Kontakt do naszych pracowników.
      </div>
      {/* BIURO */}
      <div className="col-md-3 col-sm-12 shadow-lg p-md-3 mx-md-4 bg-dark rounded my-5">
        <div className="text-center">
          <div className="text-warning fs-4">BIURO</div>
          {/* <GiDesk size={60}/> */}
          <div className="coop-title">
            <GiDesk size={60} />
          </div>
        </div>
        <div className="accordion bg-dark" id="accordionExample">
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header bg-dark" id="headingOne">
              <button
                className="accordion-button text-on-coop collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#biuro1"
                aria-expanded="false"
                aria-controls="biuro1"
              >
                Marta Szklosz
              </button>
            </h2>
            <div
              id="biuro1"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body text-light"
                style={{ wordWrap: "break-word" }}
              >
                tel: <a href="tel:+605116996"> (+48) 605 116 996 </a>{" "}
                email:imie.nazwisko@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* KSIĘGOWOŚĆ */}
      <div className="col-md-3 col-sm-12 shadow-lg p-md-3 mx-md-4 bg-dark rounded my-5">
        <div className="text-center">
          <div className="text-warning fs-4">KSIĘGOWOŚĆ</div>
          <div className="coop-title">
            <IconContext.Provider value={{ color: "white" }}>
              <GiMoneyStack size={60} />
            </IconContext.Provider>
          </div>
        </div>
        <div className="accordion bg-dark" id="accordionExample">
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header bg-dark" id="headingOne">
              <button
                className="accordion-button text-on-coop collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ksiegowosc1"
                aria-expanded="false"
                aria-controls="ksiegowosc1"
              >
                Sylwia Szybulska
              </button>
            </h2>
            <div
              id="ksiegowosc1"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body text-light"
                style={{ wordWrap: "break-word" }}
              >
                tel: <a href="tef:+665742323">(+48) 665 742 232 </a>
                email:imie.nazwisko@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TRANSPORT */}
      <div className="col-md-3 col-sm-12 shadow-lg p-md-3 mx-md-4 bg-dark rounded my-5">
        <div className="text-center">
          <div className="text-warning fs-4">TRANSPORT</div>
          <div className="coop-title">
            <IconContext.Provider value={{ color: "white" }}>
              <GiTruck size={60} />
            </IconContext.Provider>
          </div>
        </div>
        <div className="accordion bg-dark" id="accordionExample">
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header bg-dark" id="headingOne">
              <button
                className="accordion-button text-on-coop  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#transport1"
                aria-expanded="false"
                aria-controls="transport1"
              >
                Mariusz Michalicki
              </button>
            </h2>
            <div
              id="transport1"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body text-light"
                style={{ wordWrap: "break-word" }}
              >
                tel: <a href="tel:+787121488">(+48) 787 121 488 </a>
                email:imie.nazwisko@gmail.com
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button text-on-coop  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#transport2"
                aria-expanded="false"
                aria-controls="transport2"
              >
                Paulina Michalska
              </button>
            </h2>
            <div
              id="transport2"
              className="accordion-collapse collapse "
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body text-light"
                style={{ wordWrap: "break-word" }}
              >
                tel: <a href="tel:+605116633">(+48) 605 116 633 </a>
                email:imie.nazwisko@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
