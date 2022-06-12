import Image from "next/image";
import homeCatalog from "../../public/assets/images/homeCatalog.png";

export default function HomeCatalog(props) {
    const text = props.text;
    const subTitle = props.subTitle
    const catalog = props.catalog;
    const product = props.product;
    const image = props.image;
    const btnTxt = props.btnTxt;
    const catalogTxt = props.catalogTxt;
    const suffixTxt = props.suffixTxt;
    return (
        <div className="homeCatalog">
            <div className="contents">
                <div className="text">
                    <h2>
                        {catalogTxt}
                        {product}
                        {suffixTxt}
                    </h2>
                    <h6>
                        {text}
                    </h6>
                    <div className="buttons">
                        <a
                            href={"../assets/documents/" + catalog}
                            download
                            className="download"
                        >
                            {btnTxt}
                        </a>
                    </div>
                </div>
                <div className="picture">
                    <Image src={image} alt="کاتالوگ آنلاین" layout="fill"/>
                </div>
            </div>
        </div>
    );
}
