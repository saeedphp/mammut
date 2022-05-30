import Image from "next/image";
import Link from "next/link";

const ProductRowSpecs = (props) => {
  const name = props.name;
  const summary = props.summary;
  const highlights = props.highlights;
  const dimensions = props.dimensions;
  const id = props.id;
  return (
    <div className="specs">
      <div className="text">
        <h4>{name}</h4>
        <h6>{summary}</h6>
      </div>

      <div className="picture">
        <Image
          src={`/assets/images/${props.picture}`}
          alt={name}
          layout="fill"
        />
      </div>
      <div className="buttons">
        <Link href={`products/${id}`}>
          <a>
            مشاهده جزئیات
            <i className="far fa-angle-left" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductRowSpecs;
