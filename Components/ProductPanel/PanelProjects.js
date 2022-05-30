import projectImags from "../../data/projectImags";
import Image from "next/image";

export default function PanelProjects(props) {
  const data = props.data;
  return (
    <div className="projects">
      <div className="row">
        {data.map((d, i) => {
          let index = 1;
          projectImags.map((p, j) => {
            if (i == j) index = parseInt(j);
          });
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
              <div className="projectCard">
                <Image src={projectImags[index]} alt={d.name} layout="fill" />
                <h5>{d.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
