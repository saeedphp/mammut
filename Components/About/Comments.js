import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Comments = (props) => {
  const items = [
      "من از مجموعه دنیای ماموت بابت سرعت عمل بالا در تولید و آماده سازی ساندویچ پانل ها سپاسگزارم. از اونجایی كه كیفیت و عمر مفید ساندویچ پانل آیتم خیلی مهمیه، از اینكه دنیای ماموت رو انتخاب كردم خیلی راضیم. ",
      "دنیای ماموت یه تجربه بی نظیر برای من بود، اینكه به نیاز مشتری و بهترین ها برای مشتری اهمیت میدید بسیار تحسین برانگیزه.",
      "ما به دلیل نوع فعالیت خودمون نیازمند ساندویچ پانل هایی با مقاومت بسیار بالا و ضد حریق بودیم كه دنیای ماموت با توجه به تنوع محصولی كه داره جای هیچ نگرانی برای ما باقی نزاشت. ",
      "ویژگی ها و وجه تمایز ساندویچ پانل های دنیای ماموت با بقیه شركت ها، یكی از دلایلی بود كه من این شركت رو انتخاب كردم. ",
      "به دلیل اینكه دنیای ماموت از مواد اولیه آلمانی برای تولید ساندویچ پانل های خودش استفاده میكنه، پانل ها در طولانی مدت دچار هیچ آسیبی نمیشن.",
      "از لحاظ نحوه ارسال، سفارش به موقع ارسال شد و هیچ تأخیری نداشت."
  ];
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
    },
  };
  return (
    <div className="comments">
      <div className="title">
        <h2>نظرات مشتریان</h2>
      </div>
      <OwlCarousel {...options}>
        {items.map((item, i) => {
          return (
            <div className="commentCard" key={i}>
              <div className="icon">
                <i className="far fa-user" />
              </div>
              <p>
                  {item}
              </p>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default Comments;
