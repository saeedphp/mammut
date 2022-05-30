const FooterTop = ({ prefix }) => {
  return (
    <div className="footerTop">
      <div className="title">
        <h2>شبکه نمایندگی دنیای ماموت</h2>
        <h4>متناسب با نیاز خود نمایندگی مورد نظر را پیدا کنید</h4>
      </div>
      <div className="search">
        <div className="searchBar">
          <a href={`/${prefix}/vendors`}>
            <i className="far fa-search" />
            <p> شبکه نمایندگان دنیای ماموت</p>
            <i className="far fa-angle-left" />
          </a>
        </div>
        <div className="searchBar">
          <a href={`/${prefix}/vendors/login`}>
            <i className="far fa-search" />
            <p>درگاه ارتباط با نمایندگان</p>
            <i className="far fa-angle-left" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
