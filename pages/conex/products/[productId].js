import { useRouter } from "next/router";
import productsC from "../../../data/productsC";
import { NextSeo } from "next-seo";
import ConexInfo from "../../../Components/ProductConex/ConexInfo";
import Video from "../../../Components/Alternate/Product/Video";
import PageTitle from "../../../Components/PageTitle";

 
export default function ProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;
  let currProduct = null;
  for (let product of productsC) {
    if (product.id == productId) {
      currProduct = product;
      return (
        <div className="productDetailPage alternateProductDetailPage">
          <NextSeo title={currProduct.name} />
          <PageTitle title={currProduct.name} />
          <div className="contents">
            <Video videoPath={currProduct.video} />
            <ConexInfo
              name={currProduct.name}
              description={currProduct.description}
              specs={currProduct.specs}
              map={currProduct.map}
              catalog={currProduct.catalog}
              pictures={currProduct.pictures}
            />
          </div>
        </div>
      );
    }
  }
  return <div className="notFound"></div>;
}

ProductDetailPage.layout="L1";
