import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const HomeGallery = ({ items, category,title }) => {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

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
      400: {
        items: 2,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      580: {
        items: 3,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      768: {
        items: 4,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      1280: {
        items: 6,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
    },
  };
  return (
    <div className="homeGallery">
      <div className="title">
        <h2> {title}</h2>
        <h6>
          <span>
            {category}
          </span>
        </h6>
      </div>
      {/* <OwlCarousel {...options}>
        {items.map((item, i) => {
          const path = `/assets/images/${item}`;
          return (
            <div className="picture" key={i}>
              <Image src={path} alt={""} layout="fill" />
            </div>
          );
        })}
      </OwlCarousel> */}
      <div className="row">
        {items.map((item, i) => {
          const path = `/assets/images/gallery/${item}`;
          return (
            <div className="col-md-4 col-sm-6 col-12" key={i}>
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

export default HomeGallery;
