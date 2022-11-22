import choldnica1 from "./chlodnia1111.jpg";
import galeria2 from "./galeria2.jpg";
import galeria3 from "./galeria3.jpg";
const Gallery = () => {
  return (
    <div className="row" style={{ backgroundColor: "#FFC800" }}>
      {/* FAJNE KOLORY 
      backgroundColor: "#FFC300" 
      #fbda03 lekko jaśniejszy od FFC300
      
       */}
      <div className="mt-5 col-md-4 col-sm-12 text-center black-and-white text-dark">
        <img className="img-fluid img-gallery" src={choldnica1} alt="" />
        <div className="describe-truck  mb-3">
          <b>CHŁODNIE</b>
        </div>
      </div>
      <div className="mt-5 col-md-4 col-sm-12 text-center black-and-white  text-dark">
        <img className="img-fluid img-gallery" src={galeria2} alt="" />
        <div className="describe-truck  mb-3">
          <b>PLANDEKI</b>
        </div>
      </div>
      <div className="mt-5 col-md-4 col-sm-12 text-center black-and-white  text-dark">
        <img className="img-fluid img-gallery" src={galeria3} alt="" />
        <div className=" describe-truck mb-3">
          <b>KONTENERY</b>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
