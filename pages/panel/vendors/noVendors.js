import PageTitle from "../../../Components/PageTitle";
import { NextSeo } from "next-seo";
import VendorsLogin from "./login";
 
export default function VendorsListPage() {
  return (

      <div className="vendorsListPage innerPage">
        <NextSeo title="نماینده ای یافت نشد" />

        <PageTitle title="لیست نمایندگان" />

        <div className="contents">
          <h2 className="notFound">نماینده ای یافت نشد!</h2>
        </div>
      </div>
  );
}

VendorsListPage.layout="L1";
