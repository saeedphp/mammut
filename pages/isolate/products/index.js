import ProductRow from "../../../Components/Alternate/ProductRow";
import products from "../../../data/productsI";
import { NextSeo } from "next-seo";
import ProductDetailPage from "./[productId]";

const ProductsPage = () => {
  return (
    <div className="alternateProductsPage innerPage">
      <NextSeo title="محصولات اتاق ایزوله" />
      {products.map((product) => {
        return (
          <ProductRow
            key={product.id}
            name={product.name}
            summary={product.summary}
            // picture={product.picture}
            id={product.id}
          />
        );
      })}
    </div>
  );
};

ProductsPage.layout="L1";
export default ProductsPage;
