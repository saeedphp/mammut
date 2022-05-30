import HomeBanner from "../../Components/Alternate/HomeBanner";
import HomeBlogs from "../../Components/Alternate/HomeBlogs";
import HomeFeatured from "../../Components/Alternate/HomeFeatured";
import HomeHighlights from "../../Components/Alternate/HomeHighlights";
import HomeNetwork from "../../Components/Alternate/HomeNetwork";
import HomeServices from "../../Components/Alternate/HomeServices";
import { NextSeo } from "next-seo";

const HomePage = () => {
  return (
    <div className="alternateHomePage">
      <NextSeo title=" اتاق‌های ایزول دنیای ماموت" />
      <HomeBanner />
      <HomeFeatured
        name="شاسی"
        features={[
          "شاسی و قطعات فولادی با استحکام بالا در کنار عملیات‌های پیشرفته ای مانند جوشکاری در خط تولید شاسی سازی صورت میپذیرد",
        ]}
       /* imgPath="body.jpeg"*/
        direction="right"
        items={[
            "body.jpeg",
        ]}
      />
      <HomeFeatured
        name="تولید  صفحات ساندویچ پانل اتاق"
        features={[
          "با مدرن ترین خط تولید صفحات ساندویچ پانل به صورت پیوسته و ناپیوسته تولید صفحات اتاق‌ها صورت می پذیرد.",
        ]}
        direction="left"
        items={[
            "isolatePanel.jpeg",
        ]}
      />
      <HomeFeatured
        name="نصب اتاق بر روی شاسی"
        features={[
          "اتصال اتاق به شاسی و تكمیل فرآیند با تجهیز كامل در خط تولید به صورت استاندارد  صورت می پذیرد.",
        ]}
        direction="right"
        items={[
            "install.jpeg",
        ]}
      />
      <HomeNetwork />
      <HomeServices
        title={"آشنایی با دنیای ماموت"}
        summary={"بازدید از دنیای ماموت روزانه و در هر ساعت مکان پذیر است "}
        items={[
          {
            picture: "tour.jpeg",
            text: "تور مجازی دنیای ماموت",
          },
          {
            picture: "visit.jpeg",
            text: "بازدید از دنیای ماموت",
          },
        ]}
      />
      <HomeHighlights />
      <HomeBlogs />
      <HomeServices
        title={" به وسعت دنیای ماموت"}
        summary={"آشنایی با واحد‌های تریلر سازی دنیای ماموت"}
        items={[
          {
            picture: "delivery.jpeg",
            text: "تحویل",
          },
          {
            picture: "quality.jpeg",
            text: "کنترل کیفیت",
          },
          {
            picture: "production.jpeg",
            text: " خطوط تولید",
          },
        ]}
      />
    </div>
  );
};

HomePage.layout="L1";
export default HomePage;
