import { useRouter } from "next/router";
import products from "../../../data/productsI";
import { NextSeo } from "next-seo";
import Usage from "../../../Components/Alternate/Product/Usage";
import Gallery from "../../../Components/Alternate/Product/Gallery";
import Blocks from "../../../Components/Alternate/Product/Blocks";
import Attributes from "../../../Components/Alternate/Product/Attributes";
import { useEffect, useState } from "react";
import Specs from "../../../Components/Alternate/Product/Specs";
import Video from "../../../Components/Alternate/Product/Video";
import PageTitle from "../../../Components/PageTitle";
import Comments from "../../../Components/Alternate/Product/Comments";

function ProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;
  let currProduct = null;
  for (let product of products) {
    if (product.id == productId) {
      currProduct = product;
      return (
        <div className="alternateProductDetailPage">
          <NextSeo title={currProduct.name} />
          <PageTitle title={currProduct.name} />
          {/* <Video name={currProduct.name} videoPath={currProduct.video} /> */}
          <div className="contents">
            <Specs specs={currProduct.specs} />
            {/* <Gallery items={currProduct.pictures} /> */}
            <Attributes items={currProduct.attributes} />
            <Usage items={currProduct.usage} />
            <Comments />
            {/* <Blocks /> */}
          </div>
        </div>
      );
    }
  }
  return <div className="notFound"></div>;
}

ProductDetailPage.layout="L1";
export default ProductDetailPage;
