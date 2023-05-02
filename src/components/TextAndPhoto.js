// import chlodniabeztla from "./chlodniabeztla.png";
import beztla1 from "./media/beztla1.png"
import beztla2 from "./media/beztla2.png"
import beztla3 from "./media/beztla3.png"
import beztla5 from "./media/truck.png"
import bez_tla_wieksze from "./media/bez_tla_wieksze.png"
const TextaAndPhoto = () => {
  return (
    <div
      className="row align-items-center"
      style={{ backgroundColor: "#FFC800" }}
      id= "section3"
    >
      <div className="col-lg-6 col-sm-12 p-5 m-0">
        <div
          style={{
            fontSize: "calc(2.5rem + .8vw)",
            fontWeight: "800",
            color: "#4332FC",
            // lineHeight: "30px",
          }}
        >
         Transporte  de
        </div>
        <div className="transport-text" style={{color:'black'}}>
         Containers
        </div>
        <h4 style={{ textAlign: "justify", color:'#383838'}}>
        
        </h4>
      </div>
      <div className="col-lg-6 col-sm-12 text-center m-0">
        <img
          src={beztla5}
          alt=""
          className="img-fluid "
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TextaAndPhoto;
