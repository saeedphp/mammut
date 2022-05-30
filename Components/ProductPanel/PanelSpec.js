import {Fragment} from "react";
import styles from './PanelSpec.module.css';
import Image from "next/dist/client/image";
import bg from '../../public/assets/images/spec-bg.jpg';

const PanelSpec = (props) => {
    const specs = props.specs;
    const {specImg} = props

    return (
        <Fragment>
            <div className={styles.spec}>
                <div className={styles.infoWrapper}>
                    <h4>
                        <span>
                            جدول ویژگی ها
                        </span>
                    </h4>
                    <div className={styles.radius}>
                        {specs.map((spec, i) => {
                            return (
                                <div className={styles.item} key={i}>
                                    <span className={styles.number}>
                                        {i+1}.
                                    </span>
                                    <label>{spec.key}</label>
                                    <div className={styles.value}>
                                        {typeof spec.value == "object" ? (
                                            spec.value.map((v, i) => {
                                                return <p key={i}>{v}</p>;
                                            })
                                        ) : (
                                            <p>{spec.value}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default PanelSpec;