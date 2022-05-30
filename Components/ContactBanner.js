export default function ContactBanner(props) {
  const text = props.text;
  const video = props.video;

  return (
    <div className="contactBanner">
      <div className="content">
        <div className="text">
          <h6>{text}</h6>
        </div>
        {video && (
          <div className="video">
            <video controls>
              <source
                src="../../assets/videos/contactSale.mp4"
                alt="فروش آنلاین"
              />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
