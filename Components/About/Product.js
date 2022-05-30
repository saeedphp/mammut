import Image from "next/image";

const Product = ({ category, title, img, description }) => {
  return(
    <div className={`product ${category}`}>
      <div className="picture">
        <Image src={`/assets/images/${img}`} alt={title} layout="fill" />
        </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
