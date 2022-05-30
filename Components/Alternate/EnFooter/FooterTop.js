const FooterTop = ({ prefix }) => {
  return (
    <div className="footerTop">
      <div className="title">
        <h2>Mammut World Representation Network</h2>
        <h4>Find the right agency for your needs</h4>
      </div>
      <div className="search">
        <div className="searchBar">
          <a href={`/${prefix}/vendors`}>
            <i className="far fa-search" />
            <p> Mammut World Representatives Network</p>
            <i className="far fa-angle-left" />
          </a>
        </div>
        <div className="searchBar">
          <a href={`/${prefix}/vendors/login`}>
            <i className="far fa-search" />
            <p>Portal for communication with representatives</p>
            <i className="far fa-angle-left" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
