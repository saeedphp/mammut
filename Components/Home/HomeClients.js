import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import clientLogos from "../../data/clientLogos";

export default function HomeClients({title, subtitle}) {
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
        items: 2,
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
      992: {
        items: 6,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      1440: {
        items: 6,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      }
    },
  };
  return (
    <div className="homeClients">
      <div className="title">
        <h2>{title}</h2>
        <h6>
          {subtitle}
        </h6>
      </div>
      <div className="logos">
        <OwlCarousel {...options}>
          {clientLogos.map((logo, i) => {
            return (
              <div className="picture" key={i}>
                <Image src={logo} alt="" layout="fill" />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
}
