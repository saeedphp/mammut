import {Fragment} from "react";
import styles from './product-text.module.css';

const ProductText = (props) => {

    const name = props.name;
    const features = props.features;

    return (
        <Fragment>
            <div className={styles.productTextT}>
                <div className="text">
                    <h4>{name}</h4>
                    {features.map((feature, i) => {
                        return (
                            <h6 key={i}>
                                {feature}
                            </h6>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default ProductText;