import choldnica1 from "./media/chlodnia1111.jpg";
import galeria1edit from "./media/galeria1edit.jpg";
import galeria2edit from "./media/galeria2edit.jpg";
import galeria3edit from "./media/galeria3edit.jpg";
import galeria2 from "./media/galeria2.jpg";
import galeria3 from "./media/galeria3.jpg";
const Gallery = () => {
  return (
    <div className="row" style={{ backgroundColor: "#FFC800" }}>
      {/* FAJNE KOLORY 
      backgroundColor: "#FFC300" 
      #fbda03 lekko jaśniejszy od FFC300
      
       */}
      <div className="mt-5 col-md-4 col-sm-12 text-center black-and-white text-dark">
        <img className="img-fluid img-gallery" src={galeria1edit} alt="" />
        <div className="describe-truck  mb-3">
          <b>CHŁODNIE</b>
        </div>
      </div>
      <div className="mt-5 col-md-4 col-sm-12 text-center black-and-white  text-dark">
        <img className="img-fluid img-gallery" src={galeria2edit} alt="" />
        <div className="describe-truck  mb-3">
          <b>PLANDEKI</b>
        </div>
      </div>
      <div className="mt-5 col-md-4 col-sm-12 text-center black-and-white  text-dark">
        <img className="img-fluid img-gallery" src={galeria3edit} alt="" />
        <div className=" describe-truck mb-3">
          <b>KONTENERY</b>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
