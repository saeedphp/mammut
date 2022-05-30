import Image from "next/image";
import search from "../../public/assets/images/icons/search.png";
import flag from "../../public/assets/images/en-flag.jpg";
import Link from "next/link";

export default function HeaderLeft({prefix}) {

    return (
        <div className="headerLeft">
            <div className="language left-lang">
                <Link href={prefix+"/en"}>
                    <a className="flag__lang">
                        <div className="picture">
                            <Image src={flag} alt="flag" layout="fill" />
                        </div>
                    </a>
                </Link>
            </div>
            <div className="onlineSale">
                <a href="https://mammutworldpanel.iranecar.com/" target="_blank" rel="noreferrer">فروش آنلاین</a>
            </div>
            <div className="search">
                <div className="icon">
                    <Image src={search} layout="fill" alt="Search" />
                </div>
                <input type="text" placeholder="جستجو...">
                    
                </input>
            </div>
        </div>
    )
}