import {Fragment} from "react";
import Image from "next/dist/client/image";

const IntroImage = (props) => {

    const {image} = props;

    return (
        <Fragment>
            {image ? (
                <div className="intro__img">
                    <div className="picture">
                        <Image src={image} alt="image" layout={"fill"} />
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
};

export default IntroImage