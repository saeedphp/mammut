import { useRouter } from "next/router";
import vendors from "../../../data/vendorsT";
import { NextSeo } from "next-seo";
import Summary from "../../../Components/Alternate/Vendor/Summary";
import Map from "../../../Components/Alternate/Vendor/Map";
import Gallery from "../../../Components/Alternate/Vendor/Gallery";
import afterSale from "../afterSale";

export default function VendorDetailPage() {
  const router = useRouter();
  const { vendorId } = router.query;
  let currVendor = null;
  for (let vendor of vendors) {
    if (vendor.id == vendorId) {
      currVendor = vendor;
      return (
        <div className="vendorDetailPage">
          <NextSeo title={currVendor.name} />
          <div className="contents">
            <Summary
              name={currVendor.name}
              code={currVendor.code}
              state={currVendor.state}
              address={currVendor.address}
              phone={currVendor.phone}
            />
            <Gallery items={currVendor.pictures} />

            <Map link={currVendor.map} />
          </div>
        </div>
      );
    }
  }

  return <div className="notFound"></div>;
}

VendorDetailPage.layout="L1";