import {Fragment, useState} from "react";
import panels from "../../data/products";
import Link from "next/link";
import Image from "next/image";
import styles from './ProductLink.module.css';
import conexes from "../../data/productsC";
import trailers from "../../data/productsT";

const ProductLink = (props) => {

    const prefix = props.prefix;
    const type = props.type;
    const [sub, setSub] = useState({
        panel: panels[0].id,
    });

    return (
      <Fragment>
          <ul className={`rowMenu ${styles.list}`}>
              {panels.map((panel, i) => {
                  return (
                      <li className={styles.items} key={i}>
                          <Link href={`/panel/products/${panel.id}`}>
                              <a
                                  onMouseEnter={() =>
                                      setSub({ panel: panel.id })
                                  }
                              >
                                  <div className="picture menuIcon">
                                      <Image src={panel.menuIcon} alt={panel.name} layout={"fill"} />
                                  </div>
                                  <span className="menuTitle">
                        {panel.name}
                    </span>
                              </a>
                          </Link>
                      </li>
                  );
              })}
          </ul>
      </Fragment>
    );
};

export default ProductLink;