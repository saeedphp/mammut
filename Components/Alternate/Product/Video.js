const Video = ({ videoPath, type, videoTitle }) => {
  if (type == "link")
    return (
      <div className="video">
        <div className="videoWrapper">
            <div className="backward-color">

            </div>
            <iframe
                src={videoPath}
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
            ></iframe>
        </div>
          {videoTitle ? (
              <h2>
                  {videoTitle}
              </h2>
          ):null}
      </div>
    );
  else
    return (
      <div className="video">
        <video controls key={videoPath}>
          <source src={"/../assets/videos/" + videoPath} alt=" ویدیو " />
        </video>
      </div>
    );
};
export default Video;
