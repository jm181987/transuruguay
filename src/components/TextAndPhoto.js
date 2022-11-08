import chlodniabeztla from "./chlodniabeztla.png";

const TextaAndPhoto = () => {
  return (
    <div
      className="row align-items-center"
      style={{ backgroundColor: "#FFCE32" }}
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
          TANSPORT ŻYWNOŚCI
        </div>
        <div className="transport-text" style={{color:'black'}}>
          CHŁODNIE
        </div>
        <h4 style={{ textAlign: "justify", color:'#383838'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          eveniet maiores explicabo deleniti fuga iusto officia odit molestias
          animi ducimus atque, culpa doloremque placeat sit nisi? Optio
          consequuntur consequatur saepe.
        </h4>
      </div>
      <div className="col-lg-6 col-sm-12 text-center m-0">
        <img
          src={chlodniabeztla}
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
