import {Fragment} from "react";
import styles from './PageHeader.module.css';

const PageHeader = (props) => {

    const {banner, name} = props;

    return (
        <Fragment>
            <div className={`pageheader ${styles.header}`} style={{background: `url(/assets/images/products/panel/${banner})`}}>
                <h1>{name}</h1>
            </div>
        </Fragment>
    );
};

export default PageHeader;