import Blocks from "../Alternate/Product/Blocks";
import Specs from "../Alternate/Product/Specs";
import Video from "../Alternate/Product/Video";
import ConexDescription from "./ConexDescription";
import ConexMap from "./ConexMap";

export default function ConexInfo(props) {
  const name = props.name;
  const description = props.description;
  const specs = props.specs;
  const pictures = props.pictures;
  const catalog = props.catalog;
  const map = props.map;
  return (
    <div className="conexInfo">
      {/* <ConexDescription name={name} description={description} pictures={pictures} /> */}
      <Specs specs={specs} />
      <ConexMap map={map} />
      {catalog != "" && <Blocks catalog={catalog} />}
    </div>
  );
}
