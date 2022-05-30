import Image from "next/image";

const HomeCover = ({ imgPath }) => {
  return (
    <div className="homeCover">
      <div className="picture">
        <Image
          src={`/assets/images/${imgPath}`}
          alt="کاور محصول"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default HomeCover;
