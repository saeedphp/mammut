import Image from "next/image";
import Link from "next/link";

const HomeNetwork = () => {
  return (
    <div className="alternateHomeNetwork">
      <div className="title">
        <h2>شبکه خدمات محصولات ماموت</h2>
      </div>
      <div className="text">
        <h4>شبکه خدمات</h4>
        <p>
          به جهت اهمیت سهولت در دسترسی به مراكز ارائه كننده خدمات پس از فروش در
          سراسر كشور به خریداران تریلرهای دنیای ماموت، می توانید به نزدیك ترین
          مراكز معتبر مراجعه نمائید
        </p>
        <div className="buttons">
          <Link href="#">
            <a>
              مشاهده شبکه خدمات
              <i className="far fa-angle-left" />
            </a>
          </Link>
        </div>
      </div>
      <div className="picture">
        <Image src={"/assets/images/network.jpeg"} alt="" layout="fill" />
      </div>
    </div>
  );
};

export default HomeNetwork;
