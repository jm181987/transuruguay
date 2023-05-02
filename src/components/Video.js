import star from "./media/star.mp4";
import truckVideo from "./media/truck-video.mp4";
import { AiOutlineArrowDown } from "react-icons/ai";
const Video = () => {
  // const removeHash =() => {
  //   		history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  // } 

  return (
    <div className="row" id="section0">
      <div className="video-background">
        <div className="video-wrap">
          <div id="video">
            <video id="bgvid" autoPlay loop muted playsInline>
              <source src={truckVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="caption text-center">
        <h1 id="title-comapny">TRANSURUGUAY</h1>
        <h2 id="title-comapny-next">Transporte Nacional e Internacional</h2>
        <h3 id="text-after-title" className="mx-5">

        </h3>
        <br />
        <a href="#section1" className="btn btn-outline-light btn-lg" style={{border:"2px solid white"}}><AiOutlineArrowDown /></a>
      </div>
    </div>
  );
};

export default Video;
