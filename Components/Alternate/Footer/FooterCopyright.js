import Link from "next/link";

const FooterCopyright = ({ prefix }) => {
  return (
    <div className="footerCopyrights">
      <div className="contents">
        <p>تمامی حقوق این وبسایت متعلق به دنیای ماموت میباشد.</p>
        <p>
          طراحی و اجرا توسط <a href="https://faramouj.ir/"> تیم فراموج</a>
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
