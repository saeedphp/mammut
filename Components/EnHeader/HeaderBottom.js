import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";

export default function HeaderBottom(props) {
  const prefix = props.prefix;
  return (
    <div className="headerBottom">
      <div className="contents">
        <div className="toggler">
          <i className="far fa-bars" />
        </div>
        <div className="responsiveLogo">
          <Link href="/">
            <a>
              <Image src={logo} alt="MAMMUT" layout="fill" />
            </a>
          </Link>
        </div>
        <HeaderRight prefix={prefix} />
        <HeaderMenu prefix={prefix} />
        <HeaderLeft prefix={prefix} />
      </div>
    </div>
  );
}
