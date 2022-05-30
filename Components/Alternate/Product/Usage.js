import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Usage = (props) => {
  const items = props.items;
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
      },
      768: {
        items: 2,
        rtl: true,
      },
      1280: {
        items: 3,
        rtl: true,
      },
    },
  };
  return (
    <div className="usage">
      <div className="title">
        <h4>   کاربرد‌های محصول در صنایع</h4>
      </div>
      <OwlCarousel {...options}>
        {items.map((item, i) => {
          return (
            <div className="usageCard" key={i}>
              <div className="picture">
                <Image
                  src={"/assets/images/usage/" + item.picture}
                  layout="fill"
                  alt={item.text}
                />
              </div>
              <h6>{item.name}</h6>
              <p>{item.description}</p>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default Usage;
