import ProductText from "./ProductText";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const HomeFeatured = (props) => {

  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

  const options = {
    className: "slideShow",
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
        items: 1,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      580: {
        items: 1,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      768: {
        items: 1,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      1280: {
        items: 1,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
    },
  };

  const name = props.name;
  const features = props.features;
  const direction = props.direction;
  /*const imgPath = props.imgPath;*/
  const {items} = props;
  return (
    <div className={`alternateHomeFeatured ${direction}`}>
      <div className="contents en_dir">
        <ProductText name={name} features={features} />
        <div className="picture homeGallery sliderImg">
           <OwlCarousel {...options}>
        {items.map((item, i) => {
          const path = `/assets/images/${item}`;
          return (
            <div className="picture" key={i}>
              <Image src={path} alt={""} layout="fill" />
            </div>
          );
        })}
      </OwlCarousel>
          {/*<Image
            src={"/assets/images/" + imgPath}
            alt={name}
            layout="fill"
          />*/}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
