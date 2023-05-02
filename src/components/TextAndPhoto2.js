import wywrbeztla from "./media/wywrbeztla-1.png";
import chlodniabeztla from "./media/chlodniabeztla.png";
import beztla1 from "./media/beztla1.png"
import beztla2 from "./media/beztla2.png"
import beztla3 from "./media/beztla3.png"
import beztla4 from "./media/truck2.png"
const TextaAndPhoto2 = () => {
  return (
    <div className="row align-items-center " style={{backgroundColor:'#1b1464'}}>
      <div className="col-lg-6 col-sm-12 text-center  mt-5 mb-md-3">
        <img
          src={beztla4}
          alt=""
          className="img-fluid "
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="col-lg-6 col-sm-12 p-5">
        <div
          style={{
            fontSize: "calc(2.5rem + .8vw)",
            fontWeight: "800",
            color: "#FFCE32",
            textAlign: "right",
          }}
        >
         
        </div>
        <div className="transport-text" style={{textAlign:"right"}}>
        Contamos con una gran flota para atender su operación.
        </div>
        <h4 style={{ textAlign: "justify" }}>
         
        </h4>
      </div>
    </div>
  );
};

export default TextaAndPhoto2;
