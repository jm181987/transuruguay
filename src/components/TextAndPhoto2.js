import wywrbeztla from "./wywrbeztla-1.png";

const TextaAndPhoto2 = () => {
  return (
    <div className="row align-items-center mt-5 mb-3">
      <div className="col-lg-6 col-sm-12 text-center">
        <img
          src={wywrbeztla}
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
            color: "#E7202D",
            textAlign: "right",
          }}
        >
          TANSPORT ŻYWNOŚCI
        </div>
        <div
          style={{
            fontSize: "calc(4.5rem + .9vw)",
            fontWeight: "800",
            color: "white",
            lineHeight: "90px",
            textAlign: "right",
          }}
        >
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
