import { NextSeo } from "next-seo";
import ContactBanner from "../../../Components/ContactBanner";
 
export default function ContactSale() {
  return (
    <div className="contactSalePage innerPage">
      <NextSeo title=" واحد فروش" />
      <ContactBanner
        video={true}
        text={`نکاتی در ارتباط خرید ساندویچ پانل مناسب ساندویچ پانل به عنوان پوشش
          دیواری و سقف بهترین و مناسب ترین جایگزین برای سازه‌های سنتی پوشش‌ها و
          متریال سنتی است و امروزه به دلیل پیشرفت جهان علم و فناوری، استفاده از
          سازه‌های آماده مانند ساندویچ پانل(پنل) افزایش یافته است. با توجه به
          افزایش تعداد تولید کنندگان در بازار و به وجود امدن بازار رقابتی موضوع
          انتخاب ساندویچ پانل(پنل) مناسب بیش از پیش مهم شده است. در این بخش به
          این موضوع که در انتخاب ساندویچ پانل(پنل) به چه مواردی باید توجه کرد
          میپردازیم.`}
      />
      <div className="contents">
        <div className="phoneSale">
          <div className="blueCircle">
            <div className="circle">
              <i className="far fa-phone-rotary"></i>
            </div>
          </div>
          <div className="text">
            <div className="title">
              <h2> فروش تلفنی</h2>
            </div>
            <h6>
              پرسنل واحد فروش ساندویچ پانل دنیای ماموت پاسخگوی سوالات و ثبت
              درخواست‌های خرید می‌باشد.
            </h6>
            <div className="buttons">
              <a href="tel:0214500">ارتباط</a>
            </div>
          </div>
        </div>
        <div className="onineSale">
          <div className="blueCircle">
            <div className="circle">
              <i className="fal fa-globe"></i>
            </div>
          </div>
          <div className="text">
            <div className="title">
              <h2>فروش اینترنتی</h2>
            </div>
            <h6>
              ثبت درخواست ساندویچ پانل دنیای ماموت به صورت اینترنتی فراهم
              می‌باشد.
            </h6>
            <div className="buttons">
              <a
                href="https://mammutworldpanel.iranecar.com/"
                target="_blank"
                rel="noreferrer"
              >
                ارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactSale.layout="L1";
