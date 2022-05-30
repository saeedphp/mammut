import PageTitle from "../../../Components/PageTitle";
import { NextSeo } from "next-seo";
import VendorsListPage from "./list";

export default function VendorsLogin() {
  return (
    <div className="vendorsLogin">
      <NextSeo title="درگاه ارتباط با نمایندگان" />

      <PageTitle title="درگاه ارتباط با نمایندگان" />

      <div className="contents">
        <form>
          <div className="inputs">
            <input type="text" placeholder="نام کاربری"></input>
          </div>
          <div className="inputs">
            <input type="password" placeholder="رمز عبور "></input>
          </div>
          <div className="buttons">
            <button type="submit">ورود </button>
          </div>
        </form>
      </div>
    </div>
  );
}

VendorsLogin.layout="L1";
