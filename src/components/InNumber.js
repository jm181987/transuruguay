const InNumber = () => {
  return (
    <div className="row" style={{ backgroundColor: "#FFC800" }}>
      <div className="col-12 text-center mt-5 text-dark">
        <div className="fw-bold fs-1">Transuruguay en Cifras</div>
        <div className="fs-4">
        Somos un equipo enfocado en el desarrollo. Todos los días tomamos
           actividades que nos ayudan a luchar por la perfección.
        </div>
      </div>
      <div className="d-md-flex numbers text-dark">
        <div className="col-md-3 text-center mt-5 mb-3">
          <div className=" fw-bold" style={{ fontSize: "3.5rem" }}>
            720
          </div>
          <div className="fs-4 fw-bold">Cargas convencionales.</div>
        </div>
        <div className="col-md-3 col-sm-12 text-center mt-md-5 mb-md-3">
          <div className=" fw-bold" style={{ fontSize: "3.5rem" }}>
            1530
          </div>
          <div className="fs-4 fw-bold">Cargas forestales</div>
        </div>
        <div className="col-md-3 col-sm-12 text-center mt-md-5 mb-md-3">
          <div className=" fw-bold" style={{ fontSize: "3.5rem" }}>
            263
          </div>
          <div className="fs-4 fw-bold">Cargas especiales</div>
        </div>
        <div className="col-md-3 col-sm-12 text-center mt-md-5 mb-md-3">
          <div className=" fw-bold" style={{ fontSize: "3.5rem" }}>
            580
          </div>
          <div className="fs-4 fw-bold mb-3">Fletes internacionales</div>
        </div>
      </div>
      
    </div>
    


    
  );
};

export default InNumber;
