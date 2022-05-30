import Image from "next/image";
import ProductRowSpecs from "./ProductRowSpecs";

const ProductRow = (props) => {
  return (
    <div className="alternateProductRow">
      <ProductRowSpecs
        name={props.name}
        summary={props.summary}
        picture={props.picture}
        id={props.id}
      />
      <div className="picture">
        {props.picture != null && (
          <Image
            src={"/assets/images/" + props.picture}
            alt={props.name}
            layout="fill"
          />
        )}
      </div>
    </div>
  );
};

export default ProductRow;
