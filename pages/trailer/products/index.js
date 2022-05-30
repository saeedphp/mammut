import ProductRow from "../../../Components/Alternate/ProductRow";
import products from "../../../data/productsT";
import { NextSeo } from "next-seo";
import ProductDetailPage from "./[productId]";

const ProductsPage = () => {
  return (
    <div className="alternateProductsPage innerPage">
      <NextSeo title="محصولات تریلر" />
      {products.map((product) => {
        if (product.level == 0)
          return (
            <ProductRow
              key={product.id}
              name={product.name}
              summary={product.summary}
              picture={product.picture}
              id={product.id}
            />
          );
      })}
    </div>
  );
};

ProductsPage.layout="L1";
export default ProductsPage;
