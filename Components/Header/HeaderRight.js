import Image from "next/image";
import flag from "../../public/assets/images/en-flag.jpg";
import Link from "next/link";
import logo from '../../public/assets/images/logo.png';
import {Fragment} from "react";

export default function HeaderRight(props) {

    const prefix = props.prefix;

    return (
        <Fragment>
            <div className="headerRight">
                <Link href="/">
                    <a className="logo">
                        <div className="picture">
                            <Image src={logo} alt="logo" layout="fill" />
                        </div>
                    </a>
                </Link>
            </div>
        </Fragment>
    );

    /*if (prefix == "panel") {
        return (
            <div className="headerRight language">
                <Link href={prefix+"/en"}>
                    <a className="flag__lang">
                        <div className="picture">
                            <Image src={logo} alt="logo" layout="fill" />
                        </div>
                    </a>
                </Link>
                <div className="flagLeft">
                    <Link href={prefix+"/en"}>
                        <a className="flag__lang">
                            <div className="picture">
                                <Image src={flag} alt="FA" layout="fill" />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        )
    }if (prefix == "trailer") {
        return (
            <div className="headerRight language">
                <Link href={prefix+"/en"}>
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

}