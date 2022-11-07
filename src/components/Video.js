import time from "./star.mp4";
import { AiOutlineArrowDown } from "react-icons/ai";
const Video = () => {
  // const removeHash =() => {
  //   		history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  // } 

  return (
    <div className="row">
      <div className="video-background">
        <div className="video-wrap">
          <div id="video">
            <video id="bgvid" autoPlay loop muted playsInline>
              <source src={time} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="caption text-center">
        <h2 id="title-comapny">TYTUŁ FIRMY</h2>
        <h2 id="title-comapny-next">PODTYTUŁ</h2>
        <h3 id="text-after-title" className="mx-5">
          Rzetelna Firma transportowa założona w 2001 roku, specjalizująca się w
          międzynarodowym i krajowym transporcie chłodniczym, FTL oraz towarów
          sypkich.
        </h3>
        <br />
        <a href="#section1" className="btn btn-outline-light btn-lg"><AiOutlineArrowDown /></a>
      </div>
    </div>
  );
};

export default Video;
