import Image from "next/image";
import { useEffect, useState } from "react";
import productsPanel from "../../data/products";
import productsConex from "../../data/productsC";

const EditProduct = ({ id, state, setState }) => {
  const [currProduct, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    for (let product of productsPanel)
      if (product.id == id) {
        setProduct(product);
        setName(product.name);
        setSummary(product.summary);
        setDescription(product.description);
      }
    for (let product of productsConex)
      if (product.id == id) {
        setProduct(product);
        setName(product.name);
        setSummary(product.summary);
        setDescription(product.description);
      }
  }, [id]);

  if (currProduct == null) return null;
  else {
    return (
      <div className={`editProduct ${state ? "show" : "hidden"}`} key={id}>
        <form>
          <button type="button" onClick={() => setState(false)}>
            X
          </button>
          <div className="inputs">
            <div className="inputRow id">
              <label>شناسه</label>
              <p>{id}</p>
            </div>
            <div className="inputRow name">
              <label>نام</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputRow summary">
              <label>معرفی</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className="inputRow description">
              <label>توضیحات</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="inputRow specs">
              <ul>
                {currProduct.specs.map((spec, i) => {
                  return (
                    <li key={i}>
                      <label>{spec.key}</label>
                      <input type="text" placeholder={spec.value}></input>
                      <button type="button">
                        <i className="far fa-trash" />
                      </button>
                    </li>
                  );
                })}
              </ul>
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
              <label>تصاویر محصول  </label>
              <input type="file" />
              <ul>
                <li>
                  {/* <Image /> */}
                </li>
                <li>
                  {/* <Image /> */}
                </li>
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
  }
};

export default EditProduct;
