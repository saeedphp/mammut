import PageTitle from "../../../Components/PageTitle";
import { NextSeo } from "next-seo";
 import { vendorContext } from "../../../Components/VendorContext";
import { useContext, useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import VendorsListPage from "./noVendors";
export default function VendorsLogin() {
  const {vendor, setVendor} = useContext(vendorContext);
    useEffect(() => {
        if (!vendor.signedin) {
            router.replace("error");
        }
    })
  return (

      <div className="vendorsPanle">
        <NextSeo title="  پانل نمایندگان" />

        <PageTitle title="پانل نمایندگان" />

        <div className="contents">
          
        </div>
      </div>
  );
}

VendorsLogin.layout="L1";
