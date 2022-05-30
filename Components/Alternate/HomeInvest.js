import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
const HomeInvest = () => {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

  const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: true,
    rtl: true,
    autoplay: false,
    items: 1,
  };
  return (
    <div className="alternateHomeInvest">
      <div className="title">
        <h2>سرمایه گذاری محصولات ماموت</h2>
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h4>
      </div>
      <OwlCarousel {...options}>

          
      </OwlCarousel>
    </div>
  );
};

export default HomeInvest;
