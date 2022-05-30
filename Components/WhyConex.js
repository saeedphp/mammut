import Image from "next/image";
import whyPanel1 from "../public/assets/images/whyConex1.jpg";
import Link from "next/link";

export default function WhyPanel() {
  return (
    <div className="whyConex whyProduct">
      <div className="contents">
        <div className="text">
          <div className="title">
            <h2>چرا کانکس</h2>
            <h6>فواید کانکس</h6>
          </div>
          <p>
            کانکس (Conex) نوعی سازه ی پیش ساخته است که موارد مصرف متنوعی دارد.
            به طور کلی به یک یا چند اتاقک از پیش ساخته شده که کنار هم قرار گرفته
            اند، کانکس میگویند . کانکس یک نوع سکونت گاه موقت و قابل حمل است ، از
            زمان پیدایش این سازه تا کنون نقش‌های متفاوت و کمک کننده ای را در
            زندگی انسان داشته است. کانکس‌ها دسته بندی‌های بسیار متفاوتی دارند
            اما در یك بخش بندی ساده، به دو دسته ثابت و متحرک (سیار) دسته بندی می
            گردند. از شناخته شده ترین انواع كانكس می تواند به كانكس‌های مسكونی،
            كارگاهی، نگهبانی، عوارضی ،قابل گسترش، سردخانه، كانكس مخابراتی، سیار،
            درمانی، سرویس بهداشتی اشاره كرد. قیمت مناسب، حمل پذیری، كوتاه بودن
            زمان ساخت، وزن سبك از جمله منفعت‌هایی است که سبب انتخاب کانکس نسبت
            به سازه‌های سنتی شده است.
          </p>
          <div className="buttons">
            <Link href="/whyPanel">
              <a>
                بیشتر <i className="far fa-angle-left" />
              </a>
            </Link>
          </div>
        </div>
        <div className="picture">
          <Image src={whyPanel1} alt="Why Panel" layout="fill" />
        </div>
      </div>
    </div>
  );
}
