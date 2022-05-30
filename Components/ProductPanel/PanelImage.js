import {Fragment} from "react";
import Image from "next/dist/client/image";

const PanelImage = (props) => {

    const {panelImage} = props;

    return (
        <Fragment>
            <div className="picture">
                <Image src={panelImage} alt="image" layout={"fill"} />
            </div>
        </Fragment>
    )
};

export default PanelImage;