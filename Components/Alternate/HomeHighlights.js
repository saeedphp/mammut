import Image from "next/image";
const HomeHighlights = () => {
  return (
    <div className="alternateHomeHighlights">
      <div className="title">
        <h2>ساخت انواع تریلر ویژه</h2>
        <h4>
          با سال‌ها تجربه سازمانی و ظرفیت خطوط آماده ارایه متفاوت ترین کاربری
          نیمه یدک هستیم
        </h4>
      </div>
      <div className="items">
        <div className="item">
          <div className="picture">
            <Image
              src={require("../../public/assets/images/hg1.svg")}
              alt=""
              layout="fill"
            />
          </div>
          <h6>عملکرد مورد انطباق</h6>
        </div>
        <div className="plus">+</div>
        <div className="item">
          <div className="picture">
            <Image
              src={require("../../public/assets/images/hg2.svg")}
              alt=""
              layout="fill"
            />
          </div>
          <h6>اجزا با کیفیت</h6>
        </div>
        <div className="plus">+</div>
        <div className="item">
          <div className="picture">
            <Image
              src={require("../../public/assets/images/hg3.svg")}
              alt=""
              layout="fill"
            />
          </div>
          <h6>طراحی منحصر به فرد</h6>
        </div>
      </div>
    </div>
  );
};

export default HomeHighlights;
