import time from "./media/star.mp4";
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
              <source src={time} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="caption text-center">
        <h1 id="title-comapny">MARPOL</h1>
        <h2 id="title-comapny-next">Przedsiębiorstwo Handlowo-Usługowe</h2>
        <h3 id="text-after-title" className="mx-5">
        Zajmujemy się transportem krajowym oraz międzynarodowym

        </h3>
        <br />
        <a href="#section1" className="btn btn-outline-light btn-lg"><AiOutlineArrowDown /></a>
      </div>
    </div>
  );
};

export default Video;
