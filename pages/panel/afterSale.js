import AfterSaleFrom from "../../Components/AfterSaleForm";
import PageTitle from "../../Components/PageTitle";
import { NextSeo } from "next-seo";

export default function afterSale() {
  return (
    
       
      <div className="afterSalePage innerPage">
        <NextSeo title="خدمات پس از فروش" />

        <PageTitle title="خدمات پس از فروش" />
        <div className="contents">
          <AfterSaleFrom />
        </div>
      </div>
    
  );
}

afterSale.layout="L1";
