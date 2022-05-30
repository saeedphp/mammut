import { NextSeo } from "next-seo";
import ContactBanner from "../../../Components/ContactBanner";
import ContactCRM from "./crm";

export default function ContactSale() {
  return (
    <div className="contactSalePage innerPage">
      <NextSeo title=" واحد فروش" />
      <ContactBanner
        video={false}
        text={`خرید کانکس با توجه به نوع محصول که طراحی و تولید هر دستگاه از آن مطابق خواسته ارائه شده خریدار می باشد نیازمند برگزاری جلسات مشترک خریدار با تولید کننده می باشد. اقلام تکمیل کننده هر کانکس بسیار متنوع می باشند و تجهیز کانکس‌ها از اهمیت زیادی برخورد است. در سفارش محصول، شرکت دنیای ماموت با برگزاری جلسات در حضور تیم‌های فروش و مهندسی خواسته‌های خریداران را به طور کامل بررسی و محصول مطابق نقشه‌های تایید شده را تولید می نماید.`}
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
              پرسنل واحد فروش کانکس دنیای ماموت پاسخگوی سوالات و ثبت درخواست‌های
              خرید می‌باشد.
            </h6>
            <div className="buttons">
              <a href="tel:0214500">ارتباط</a>
            </div>
          </div>
        </div>
        {/* <div className="onineSale">
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
          </div> */}
      </div>
    </div>
  );
}

ContactSale.layout="L1";
