import Link from "next/link";

const FooterCopyright = ({ prefix }) => {
  return (
    <div className="footerCopyrights">
      <div className="contents">
        <p>All rights of this website belong to the world of Mammut.</p>
        <p>
          Designed by <a href="https://faramouj.ir/"> Faramouj</a>
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
