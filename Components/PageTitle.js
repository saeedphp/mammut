export default function PageTitle(props) {
  const title = props.title;
  if (title == "ارتباط با واحد CRM")
    return (
      <div className="pageTitle">
        <h1>
          ارتباط با واحد <span style={{ fontFamily: "Roboto" }}> CRM </span>
        </h1>
      </div>
    );
  else
    return (
      <div className="pageTitle">
        <h1>{title}</h1>
      </div>
    );
}
