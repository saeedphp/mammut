import Image from "next/image";

const WhyPanelItem = (props) => {
    const text = props.text;
    const icon = props.icon;
    return (
        <div className="whyPanelItem1">
            <div className="picture">
                {/* <Image src={`/assets/images/${icon}`} alt="" layout="fill" /> */}
                <Image src={require("../public/assets/images/landing/cardPanel.png")} layout="fill" alt="پانل" />
            </div>
            <div className="text">
                <h6>
                    {text}
                </h6>
            </div>
        </div>
    )
}

export default WhyPanelItem;
