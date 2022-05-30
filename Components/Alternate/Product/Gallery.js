import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const Gallery = (props) => {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
  const items = props.items;

  const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: true,
    rtl: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      768: {
        items: 2,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      992: {
        items: 2,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
    },
  }; 
  return (
    <div className="gallery">
      <div className="title">
        <h4> پروژه های ما</h4>
        <h6>
          دنیای ماموت تجربه بهترین ها
        </h6>
      </div>
      {/*<OwlCarousel {...options}>
        {items.map((item, i) => {
          const path = `/assets/images/${item}`;
          return (
            <div className="galleryItem" key={i}>
              <div className="picture">
                <Image src={path} alt={""} layout="fill" />
              </div>
            </div>
          );
        })}
      </OwlCarousel>*/}
      <div className="row">
        {items.map((item, i) => {
          const path = `/assets/images/${item}`;
          return (
              <div className="col-md-4 col-sm-6 col-12 trailer-gallery" key={i}>
                <div className="picture">
                  <Image src={path} alt={""} layout="fill" />
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
