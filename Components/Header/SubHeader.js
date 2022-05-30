import Link from "next/link";
import panels from "../../data/products";
import conexes from "../../data/productsC";
import trailers from "../../data/productsT";
import { useState, useContext } from "react";
import { vendorContext } from "../VendorContext";
import Image from "next/image";
import foil from '../../public/assets/images/icons/panel/foil.png';
import foam from '../../public/assets/images/icons/panel/foam.png';

export default function SubHeader(props) {
  const { vendor, setVendor } = useContext(vendorContext);
  const [sub, setSub] = useState({
    panel: panels[0].id,
    conex: conexes[0].id,
      trailer: trailers[0].id,
  });
  const type = props.type;
  const prefix = props.prefix;
  if (type == "contact") {
    return (
      <div className="subHeader simple shown">
        <div className="closeSub">
          <i className="far fa-angle-right" />
        </div>
        <ul>
          <li>
            <Link href={"/" + prefix + "/contact/sale"}>
              ارتباط با واحد فروش
            </Link>
          </li>
          <li>
            <Link href={"/" + prefix + "/contact/crm"}>
              <a>
                ارتباط با واحد
                <span style={{ fontFamily: "Roboto" }}> CRM </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/" + prefix + "#"}> استخدام </Link>
          </li>
        </ul>
      </div>
    );
  }
    if (type == "about") {
        return (
            <div className="subHeader simple shown">
                <div className="closeSub">
                    <i className="far fa-angle-right" />
                </div>
                <ul>
                    <li>
                        <Link href={"/" + prefix + "/about"}>
                            درباره ما
                        </Link>
                    </li>
                    <li>
                        <Link href={"/" + "/assets/documents/social-res.pdf"}>
                            مسئولیت اجتماعی
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
  if (type == "vendors") {
    return (
      <div className="subHeader simple shown">
        <div className="closeSub">
          <i className="far fa-angle-right" />
        </div>
        <ul>
          {prefix != "conex" && (
            <li>
              <Link href={"/" + prefix + "/vendors"}> شبکه نمایندگان</Link>
            </li>
          )}
          {prefix != "conex" && (
            <li>
              <Link
                href={
                  vendor.signedin
                    ? "/" + prefix + "/vendors/panel"
                    : "/" + prefix + "/vendors/login"
                }
              >
                درگاه ارتباط با نمایندگان
              </Link>
            </li>
          )}
          <li>
            <Link href={"/" + prefix + "/vendors/contact"}>
              درخواست اخذ نمایندگی
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  if (prefix == "panel") {
    return (
      <div className="subHeader shown panel">
        <div className="closeSub">
          <i className="far fa-angle-right" />
        </div>

        <div className="wordPages mobile">
          <Link href={"/" + prefix + "/whyPanel"}>چرا ساندویچ پانل</Link>
          <Link href={"/" + prefix + "/foil"}>ورق‌های ساندویچ پانل</Link>
          <Link href={"/" + prefix + "/foam"}>فوم‌های ساندویچ پانل</Link>
        </div>
        <ul>
          {panels.map((panel, i) => {
            return (
              <li key={i}>
                <Link href={`/${prefix}/products/${panel.id}`}>
                  <a
                    onMouseEnter={() =>
                      setSub({ panel: panel.id, conex: sub.conex })
                    }
                  >
                      <div className="picture menuIcon">
                          <Image src={panel.menuIcon} alt={panel.name} layout={"fill"} />
                      </div>
                    <span className="menuTitle">
                        {panel.name.substr(13)}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {panels.map((panel, i) => {
          if (panel.id == sub.panel)
            return (
              <div className="summary" key={i}>
                <div className="wordPages desktop">
                    <a>
                        <div className="picture menuIcon foamMenu">
                            <Image src={foil} alt="image" layout={"fill"} />
                        </div>
                        <Link href={"/" + prefix + "/foil"}>
                            ورق‌های ساندویچ پانل
                        </Link>
                    </a>
                    <a>
                        <div className="picture menuIcon foamMenu">
                            <Image src={foam} alt="image" layout={"fill"} />
                        </div>
                        <Link href={"/" + prefix + "/foam"}>
                            فوم‌های ساندویچ پانل
                        </Link>
                    </a>
                </div>
                <div className="text">
                  {/* <p>{panel.summary}</p> */}
                  {/* <div className="buttons">
                    <a
                      href={"/../assets/documents/" + panel.catalog}
                      download
                      className="download"
                    >
                      {`دانلود کاتالوگ ${panel.name.substr(13)}`}
                    </a>
                  </div> */}
                 {/* <div className="picture">
                    <Image src="/assets/images/whyPanel.png" alt={panel.name} layout="fill" />
                      </div>*/}
                </div>
              </div>
            );
        })}
      </div>
    );
  }
  if (prefix == "trailer") {
        return (
            <div className="subHeader shown conex">
                <div className="closeSub">
                    <i className="far fa-angle-right" />
                </div>
                <ul>
                    {trailers.map((trailer, i) => {
                        if (trailer.level === 0)
                        return (
                            <li key={i}>
                                <Link href={`/${prefix}/products/${trailer.id}`}>
                                    {trailer.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else return <div className="subHeader"></div>;
  if (prefix == "conex") {
    return (
      <div className="subHeader shown conex">
        <div className="closeSub">
          <i className="far fa-angle-right" />
        </div>
        <ul>
          {conexes.map((conex, i) => {
            return (
              <li key={i}>
                <Link href={`/${prefix}/products/${conex.id}`}>
                  {conex.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else return <div className="subHeader"></div>;
}