import Image from "next/image";
import PagetTitle from "../PageTitle";

const Pictures = () => {
  return (
    <div className="pictures">
      <PagetTitle title="تصاویر" />
      <div className="inputs">
        <div className="inputRow banner">
          <div className="text">
            <label>بنر صفحه اصلی</label>

            <input type="text" placeholder="شعار فارسی" />
            <input type="text" placeholder="شعار انگلیسی" />
            <input type="file" />
          </div>
          <div className="picture">{/* <Image className="preview" /> */}</div>
        </div>
        <div className="inputRow">
          <div className="text">
            <label>نام صفحه مورد نظر</label>
            <input type="text" placeholder="نام عکس" />
            <input type="file" />
          </div>
          <div className="picture">{/* <Image className="preview" /> */}</div>
        </div>
        <div className="inputRow">
          <div className="text">
            <label>نام صفحه مورد نظر</label>
            <input type="text" placeholder="نام عکس" />
            <input type="file" />
          </div>
          <div className="picture">{/* <Image className="preview" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
