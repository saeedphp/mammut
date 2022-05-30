import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ConexDescription(props) {
  const dRef = useRef();
  const name = props.name;
  const description = props.description;
  const picture = props.pictures;
  const [pictureState, setPicture] = useState({ title: "", file: "" });

  useEffect(() => {
    const text = document.querySelector(".content p");
    const tmp = document.querySelector(".content span");
    const button = document.querySelector(".conexDescription .content button");
    text.classList.remove("full");
    const textheight = () => {
      if (tmp.offsetHeight > 112) {
        button.classList.remove("hidden");
        button.onclick = () => {
          text.classList.toggle("full");
        };
      } else {
        button.classList.add("hidden");
      }
    };
    textheight();
    window.onresize = () => {
      textheight();
    };
  });
  return (
    <div className="conexDescription">
      <div className="title">
        <h4 ref={dRef}>{name}</h4>
      </div>
      <div className="content">
        <div className="text">
          <span>{description}</span>
          <p>{description}</p>
          <button type="button" className="hidden">
            مشاهده بیشتر
          </button>
        </div>
        {picture.file != "" && (
          <div className="picture">
            <Image
              src={require("../../public/assets/images/conexGallery/" +
                picture.file)}
              alt={picture.title}
              layout="fill"
              onClick={() => {
                setPicture(picture);
                document.querySelector(".popupImage").classList.add("show");
              }}
            />
          </div>
        )}

      </div>
    </div>
  );
}
