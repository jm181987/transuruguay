import chlodniabeztla from "./chlodniabeztla.png";

const TextaAndPhoto = () => {
  return (
    <div
      className="row align-items-center"
      style={{ backgroundColor: "#E7202D" }}
      id= "section3"
    >
      <div className="col-lg-6 col-sm-12 p-5 m-0">
        <div
          style={{
            fontSize: "calc(2.5rem + .8vw)",
            fontWeight: "800",
            color: "black",
            // lineHeight: "30px",
          }}
        >
          TANSPORT ŻYWNOŚCI
        </div>
        <div className="transport-text">
          CHŁODNIE
        </div>
        <h4 style={{ textAlign: "justify" }}>
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
