import { NextSeo } from "next-seo";
import LandingPage from "./index";

export default function underConstruction() {
  return (
    <div className="underConstruction">
      <NextSeo title="  در دست ساخت..." />

      <div className="text">
        <i className="fad fa-construction" />
        <h1>در دست ساخت...</h1>
      </div>
    </div>
  );
}

underConstruction.layout="L1";
