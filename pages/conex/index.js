import HomeBanner from "../../Components/Home/HomeBanner";
import HomeBlog from "../../Components/Home/HomeBlog";
import HomeCatalog from "../../Components/Home/HomeCatalog";
import HomeClients from "../../Components/Home/HomeClients";
import HomeFAQ from "../../Components/Home/HomeFAQ";
import HomeNature from "../../Components/Home/HomeNature";
import WhyConex from "../../Components/WhyConex";
import WhyConexSecond from "../../Components/WhyConexSecond";
import { NextSeo } from "next-seo";
import RegulationPage from "./regulation";

export default function Home() {
  return (
    <div className="homePage">
      <NextSeo title=" کانکس‌های دنیای ماموت" />
      <HomeBanner
        persianSlogan={{
          h1: "تجربه بهترین ها! ",
          h4: "خرید کانکس دنیای ماموت به ساده ترین روش ",
        }}
        englishSlogan={{ h1: "EXPERIENCE THE BEST! " }}
        bannerImage={"homeBanner.webp"}
      />
      <WhyConex />
      <HomeNature text="استفاده از کانکس به عنوان سازه پایدار و قابل استفاده با طول عمر  طولانی منجر به کاهش مصرف مصالح سنتی و در نتیجه آلودگی‌های محیط زیستی داخل و اطراف سایت‌های استقرار می شود." />
      <WhyConexSecond />
      <HomeClients />
      <HomeCatalog text={""} catalog="cataloug.pdf" product="کانکس‌های" />
      <HomeBlog prefix="conex" />
      <HomeFAQ prefix="conex" />
    </div>
  );
}

Home.layout="L1";
