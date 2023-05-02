import { GiDesk, GiMoneyStack } from "react-icons/gi";
import { IconContext } from "react-icons";
const Cooperation = () => {
  return (
    <div
      className="row justify-content-between "
      id="section4"
      style={{ backgroundColor: "rgb(51,52,51)" }}
    >
      <div className="col-12 text-center fw-bold mt-5 fs-1">
       Contacte el area de la administraciòn deseada.
      </div>
      <div className="col-12 text-center text-warning my-2 fs-5">
...      </div>
{/* TRANSPORT */}
<div className="col-md-3 col-sm-12 shadow-lg p-md-3 mx-md-4 bg-dark rounded my-5">
        <div className="text-center">
          <div className="text-warning fs-4">Comercial / Soporte TI</div>
          <div className="coop-title">
            <IconContext.Provider value={{ color: "white" }}>
            <GiDesk size={60} />
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
                Jorge Marquez
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
                tel: <a href="tel:+787121488">(+598) 93 867 429 </a>
                email: comercial@transuruguay.com
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* Cuentas a pagar */}
      <div className="col-md-3 col-sm-12 shadow-lg p-md-3 mx-md-4 bg-dark rounded my-5">
        <div className="text-center">
          <div className="text-warning fs-4">Cuentas a pagar</div>
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
                Maribel Segui
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
                tel: <a href="tel:+605116996"> (+598) 462 46559 </a>{" "}
                email: cuentasapagar@transuruguay.com
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facturacion */}
      <div className="col-md-3 col-sm-12 shadow-lg p-md-3 mx-md-4 bg-dark rounded my-5">
        <div className="text-center">
          <div className="text-warning fs-4">Facturaciòn</div>
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
                Renato Morales
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
                tel: <a href="tef:+665742323">(+598) 462 46559  </a>
                email: facturacion@transuruguay.com
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cooperation;
