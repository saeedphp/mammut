import { NextSeo } from "next-seo";
import ContactBanner from "../../../Components/ContactBanner";
import ContactCRM from "./crm";

export default function ContactSale() {
  return (
    <div className="contactSalePage innerPage">
      <NextSeo title=" واحد فروش" />
      <ContactBanner
        video={false}
        text={`شركت دنیای ماموت با تنوع در طرح‌های فروش در راستای جلب رضایت مشتریان قدم بر می دارد.`}
      />
      <div className="contents">
        <div className="sale">
          <div className="blueCircle">
            <div className="circle">
              <i className="far fa-wallet"></i>
            </div>
          </div>
          <div className="text">
            <div className="title">
              <h2> فروش تسهیلاتی</h2>
            </div>
            <h6>
            خرید انواع تریلر به صورت تسهیلاتی در قالب وام‌های بلند مدت بانكی شرایط پرداخت به صورت قسط‌های ماهیانه را جهت خرید تریلر فراهم می آورد.
            </h6>
            <div className="buttons">
              <a href="tel:0214500">راهنمای خرید</a>
            </div>
          </div>
        </div>
        <div className="sale">
            <div className="blueCircle">
              <div className="circle">
                <i className="fal fa-wallet"></i>
              </div>
            </div>
            <div className="text">
              <div className="title">
                <h2>فروش نقدی</h2>
              </div>
              <h6>
              خرید تریلر به صورت نقدی و از طریق سایت دنیای ماموت امكان پذیر است.
              </h6>
              <div className="buttons">
                <a
                  href="https://mammutworldpanel.iranecar.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  راهنمای خرید
                </a>
              </div>
            </div>
          </div>
          <div className="sale">
            <div className="blueCircle">
              <div className="circle">
                <i className="fal fa-wallet"></i>
              </div>
            </div>
            <div className="text">
              <div className="title">
                <h2>فروش لیزینگ</h2>
              </div>
              <h6>
              در همكاری شركت دنیای ماموت با لیزینگ كارآمد شرایط فروش متنوعی برای خریداران فراهم می گردد.
              </h6>
              <div className="buttons">
                <a
                  href="https://mammutworldpanel.iranecar.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  راهنمای خرید
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

ContactSale.layout="L1";
