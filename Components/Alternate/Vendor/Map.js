const Map = (props) => {
    const link = props.link;
    return (
        <div className="map">
            <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src={link}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
        </div>
    )
}

export default Map;
