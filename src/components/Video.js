import time from "./star.mp4";

const Video = () => {
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
        <h2>ALWAYS IN YOUR DIRECTION MAC-TRANS TRANSPORT I LOGISTYKA</h2>
        <h3>
          Rzetelna Firma transportowa założona w 2001 roku, specjalizująca się w
          międzynarodowym i krajowym transporcie chłodniczym, FTL oraz towarów
          sypkich.
        </h3>
        <a href="" className="btn btn-outline-light btn-lg"></a>
      </div>
    </div>
  );
};

export default Video;
