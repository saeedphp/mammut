import Image from "next/image";

export default function ConexMap(props) {
  const mapPath = props.map;

  return (
    <div className="conexMap">
      <a href={"/assets/images/map/" + mapPath} download>
        دانلود نقشه
      </a>
    </div>
  );
}
