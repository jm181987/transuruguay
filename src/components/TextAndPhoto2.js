import wywrbeztla from "./wywrbeztla-1.png";
import chlodniabeztla from "./chlodniabeztla.png";
import beztla1 from "./beztla1.png"
import beztla2 from "./beztla2.png"
import beztla3 from "./beztla3.png"
const TextaAndPhoto2 = () => {
  return (
    <div className="row align-items-center " style={{backgroundColor:'#1b1464'}}>
      <div className="col-lg-6 col-sm-12 text-center  mt-5 mb-md-3">
        <img
          src={beztla3}
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
          TANSPORT ŻYWNOŚCI
        </div>
        <div className="transport-text" style={{textAlign:"right"}}>
          CHŁODNIE
        </div>
        <h4 style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          eveniet maiores explicabo deleniti fuga iusto officia odit molestias
          animi ducimus atque, culpa doloremque placeat sit nisi? Optio
          consequuntur consequatur saepe.
        </h4>
      </div>
    </div>
  );
};

export default TextaAndPhoto2;
