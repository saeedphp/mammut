import PageTitle from "../../../Components/PageTitle";
import { NextSeo } from "next-seo";
 
export default function ContactCRM() {
  return (
    <>
       
      <div className="vendorsContactPage innerPage">
        <NextSeo title="درخواست نمایندگی" />

        <PageTitle title="درخواست نمایندگی" />
        <div className="contents">
          <form>
            <div className="inputs">
              <input type="text" placeholder=" نام شرکت - شخص حقیقی "></input>
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="نام و نام خانوادگی مدیر عامل"
              ></input>
            </div>
            <div className="inputs">
              <input type="text" placeholder="حوزه فعالیت"></input>
            </div>
            <div className="inputs">
              <input type="text" placeholder="سابقه فعالیت"></input>
            </div>
            <div className="inputs">
              <input type="tel" placeholder="تلفن  همراه..."></input>
            </div>
            <div className="inputs">
              <input type="tel" placeholder="تلفن  دفتر..."></input>
            </div>
            <div className="inputs">
              <input type="mail" placeholder="ایمیل  شما..."></input>
            </div>
            <div className="inputs address">
              <input type="text" placeholder="آدرس شما..."></input>
            </div>
            <div className="inputs upload">
              <input type="file"></input>
            </div>
            <div className="buttons">
              <button type="submit">ارسال درخواست</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

ContactCRM.layout="L1";
