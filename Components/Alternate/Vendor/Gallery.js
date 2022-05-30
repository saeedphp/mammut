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
        items: 3,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
    },
  };
  return (
    <div className="gallery">
      <div className="title">
        <h2> گالری نمایندگی</h2>
      </div>
      <OwlCarousel {...options}>
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
      </OwlCarousel>
    </div>
  );
};

export default Gallery;
