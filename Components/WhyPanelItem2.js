import Image from "next/image";
import whyPanel1 from "../public/assets/images/whyPanel1.jpg";

const WhyPanelItem = (props) => {
    const title = props.title;
    const description = props.description;
    const picture = props.picture
    return (
        <div className="whyPanelItem2">
            
            <div className="text">
                <h4>
                    {title}
                </h4>
                <p>
                    {description}
                </p>
            </div>
            <div className="picture">
                {/* <Image src={`/assets/images/${picture}`} alt="" layout="fill" /> */}
                <Image src={whyPanel1} alt="Why Panel" layout="fill" />

            </div>
        </div>
    )
}

export default WhyPanelItem;
