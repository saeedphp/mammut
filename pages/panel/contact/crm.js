import PageTitle from "../../../Components/PageTitle";
import { NextSeo } from "next-seo";
import FaqPage from "../faq";
 
export default function ContactCRM() {
  return (
    <div className="contactCRMPage innerPage">
      <NextSeo title="  واحد CRM" />

      <PageTitle title="ارتباط با واحد CRM" />
      <div className="contents">
        <form>
          <div className="inputs">
            <input type="text" placeholder="نام شما..."></input>
          </div>
          <div className="inputs">
            <input type="text" placeholder="نام خانوادگی شما..."></input>
          </div>
          <div className="inputs">
            <input type="tel" placeholder="تلفن  شما..."></input>
          </div>
          <div className="inputs">
            <input type="mail" placeholder="ایمیل  شما..."></input>
          </div>
          <div className="inputs message">
            <textarea placeholder="پیام شما..."></textarea>
          </div>

          <div className="buttons">
            <button type="submit">ارسال پیام</button>
          </div>
        </form>
      </div>
    </div>
  );
}

ContactCRM.layout="L1";
