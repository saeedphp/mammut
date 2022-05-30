import Image from "next/image";
import flag from "../../public/assets/images/flag.png";
import Link from "next/link";
import logo from "../../public/assets/images/logo.png";

export default function HeaderRight(props) {

    /*const prefix = props.prefix;
    let flagLink =
        {
            link: prefix + "/en",
        };

    if (prefix == "panel") {
        return (
            <div className="headerRight flag_en language">
                <Link href="/panel">
                    <a className="flag__lang">
                        <Image src={flag} alt="FA" layout="fill" />
                    </a>
                </Link>
            </div>
        )
    }if (prefix == "trailer") {
        return (
            <div className="headerRight flag_en language">
                <Link href="/trailer">
                    <a className="flag__lang">
                        <Image src={flag} alt="FA" layout="fill" />
                    </a>
                </Link>
            </div>
        )
    }
    else {
        return (
            <div className="headerRight language">
                <Image src={flag} alt="FA" layout="fill" />
            </div>
        )
    }*/

    return (
        <Link href="/">
            <a className="logo">
                <div className="picture">
                    <Image src={logo} alt="logo" layout="fill" />
                </div>
            </a>
        </Link>
    )



}