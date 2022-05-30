import { Component, useEffect, useState } from "react";
import PanelAdvantage from "./PanelAdvantage";
import PanelIntro from "./PanelIntro";
import PanelFAQ from "./PanelFAQ";
import PanelProjects from "./PanelProjects";
import PanelSpecs from "./PanelSpecs";

export default function ProductDetail(props) {
  const description = props.description;
  const specs = props.specs;
  const advantage = props.advantage;
  const faq = props.faq;
  const projects = props.projects;
  const pictures = props.pictures;
  const [tab, setTab] = useState("description");
  return (
    <div className="detail">
      <div className="tabs">
        <ul>
          <li
            className="description active"
            onClick={() => setTab("description")}
          >
            شناخت محصول
          </li>
          <li className="specs" onClick={() => setTab("specs")}>
            مشخصات فنی
          </li>
          <li className="advantage" onClick={() => setTab("advantage")}>
            مزایا
          </li>
          <li className="projects" onClick={() => setTab("projects")}>
            پروژه های اجرا شده
          </li>
          <li className="faq" onClick={() => setTab("faq")}>
            سوالات متداول
          </li>
        </ul>
      </div>
      <div className="result">
        {tab == "description" && <PanelIntro description={description} pictures={pictures} />}
        {tab == "specs" && <PanelSpecs data={specs} />}
        {tab == "faq" && <PanelFAQ data={faq} />}
        {tab == "projects" && <PanelProjects data={projects} />}
        {tab == "advantage" && <PanelAdvantage data={advantage} />}
      </div>
    </div>
  );
}
