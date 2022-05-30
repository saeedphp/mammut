import Image from "next/image";
import { useEffect, useState } from "react";
import productsPanel from "../../data/products";
import productsConex from "../../data/productsC";

const AddProduct = ({ state, setState }) => {
  const [specs, setSpecs] = useState([{ key: "", value: "" }]);
  return (
    <div className={`editProduct ${state ? "show" : "hidden"}`}>
      <form>
        <button type="button" onClick={() => setState(false)}>
          X
        </button>
        <div className="inputs">
          <div className="inputRow id">
            <label>شناسه</label>
            <input type="text" />
          </div>
          <div className="inputRow name">
            <label>نام</label>
            <input type="text" />
          </div>
          <div className="inputRow summary">
            <label>معرفی</label>
            <textarea />
          </div>
          <div className="inputRow description">
            <label>توضیحات</label>
            <textarea />
          </div>
          <div className="inputRow specs">
            <ul>
              {specs.map((spec, i) => {
                return (
                  <li key={i}>
                    <input type="text" placeholder={i}></input>
                    <input type="text" placeholder={spec.value}></input>
                    <button
                      type="button"
                      onClick={() => setSpecs(specs.splice(i, 1))}
                    >
                      <i className="far fa-trash" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => setSpecs([...specs, { key: "", value: "" }])}
            >
              +
            </button>
          </div>
          <div className="inputRow video">
            <label>لینک ویدیو</label>
            <input type="text" />
          </div>
          <div className="inputRow picture">
            <label>تصویر اصلی </label>
            <input type="file" />
          </div>
          <div className="inputRow pictures">
            <label>تصاویر محصول </label>
            <input type="file" />
            <ul>
              <li>{/* <Image /> */}</li>
              <li>{/* <Image /> */}</li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <button type="submit" className="save">
            ذخیره
          </button>
          <button type="submit" className="cancel">
            لغو
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
