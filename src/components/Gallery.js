import choldnica1 from "./chlodnia1111.jpg";
const Gallery = () => {
  return (
    <div className="row" style={{ backgroundColor: "#FFCE32" }}>
      <div className="mt-3 col-md-4 col-sm-12 text-center black-and-white text-dark">
        <img className="img-fluid" src={choldnica1} alt="" />
        <div className="describe-truck  mb-3">
          <b>LOREM</b>
        </div>
      </div>
      <div className="mt-3 col-md-4 col-sm-12 text-center black-and-white  text-dark">
        <img className="img-fluid" src={choldnica1} alt="" />
        <div className="describe-truck  mb-3">
          <b>LOREM</b>
        </div>
      </div>
      <div className="mt-3 col-md-4 col-sm-12 text-center black-and-white  text-dark">
        <img className="img-fluid" src={choldnica1} alt="" />
        <div className=" describe-truck mb-3">
          <b>LOREM</b>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
