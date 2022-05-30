import VendorCard from "../../../Components/VendorCard";
import vendors from "../../../data/vendors";
import { useState, useEffect } from "react";
import Script from "next/script";
import PageTitle from "../../../Components/PageTitle";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Vendors from "./index";
 
const VendorsListPage = () => {
  const router = useRouter();
  const [filter, setFiler] = useState({ array: [] });
  vendors.sort((a, b) => (a.state > b.state ? 1 : b.state > a.state ? -1 : 0));

  const states = Array.from(new Set(vendors.map((v) => v.state)));
  const changeFilter = (s) => {
    if (filter.array.find((state) => state == s) != s) {
      setFiler({
        array: [...filter.array, s],
      });
    } else
      setFiler({
        array: filter.array.filter((state) => state !== s),
      });
  };

  useEffect(() => {
    if (
      router.query.title != "تهران و البرز" &&
      router.query.title != undefined
    )
      setFiler({
        array: [router.query.title],
      });
    if (router.query.title == "تهران و البرز")
      setFiler({
        array: ["تهران", "البرز"],
      });
  }, []);

  return (
    <>
       
      <div className="vendorsListPage innerPage">
        <NextSeo title="لیست نمایندگان" />

        <PageTitle title="لیست نمایندگان" />

        <div className="contents">
          <div className="filters">
            <div className="contents">
              <div className="title">
                <h6>فیلتر بر اساس استان</h6>
                <i className="far fa-angle-down" />
              </div>
              <ul>
                {states.map((state, i) => {
                  return (
                    <li key={i}>
                      <p>{state}</p>

                      <input
                        type="checkbox"
                        checked={filter.array.includes(state) ? "checked" : ""}
                        onClick={() => {
                          changeFilter(state);
                        }}
                      ></input>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="list">
            <ul>
              {vendors.map((vendor, i) => {
                if (filter.array.length == 0)
                  return (
                    <li key={i}>
                      <VendorCard
                        name={vendor.name}
                        code={vendor.code}
                        state={vendor.state}
                        address={vendor.address}
                        phone={vendor.phone}
                      />
                    </li>
                  );
                else if (filter.array.find((v) => vendor.state == v))
                  return (
                    <li key={i}>
                      <VendorCard
                        name={vendor.name}
                        code={vendor.code}
                        state={vendor.state}
                        address={vendor.address}
                        phone={vendor.phone}
                      />
                    </li>
                  );
              })}
            </ul>
          </div>
          <Script src="../../assets/scripts/vendors.js" />
        </div>
      </div>
    </>
  );
};

VendorsListPage.layout="L1";
export default VendorsListPage;
