import { useState } from "react";
import productsPanel from "../../data/products";
import productsConex from "../../data/productsC";
// import productsTrailer from "../../data/productsT";
// import productsIsolate from "../../data/productsI";
import PagetTitle from "../PageTitle";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Products = () => {
  const [selected, setSelected] = useState(null);
  const [opened, setOpened] = useState(false);
  const [add, setAdd] = useState(false);
  return (
    <div className="products">
      <PagetTitle title="محصولات" />
      <EditProduct id={selected} state={opened} setState={setOpened}/>
      <AddProduct state={add} setState={setAdd}/>
      <div className="productsList">
        <button type="button" onClick={() => setAdd(true)}>
          افزودن محصول جدید
          <i className="far fa-plus" />
        </button>
        <ul>
          <li>
            <div className="productHead">
              <div className="id">شناسه </div>
              <div className="name">نام </div>
              <div className="edit">ویرایش </div>
              <div className="delete">حذف </div>
            </div>
          </li>
          {productsPanel.map((product, i) => {
            return (
              <li key={i}>
                <div className="productRow">
                  <div className="id">{product.id}</div>
                  <div className="name">{product.name}</div>
                  <div className="edit">
                    <button
                      type="button"
                      onClick={() => {
                        setSelected(product.id);
                        setOpened(true);
                      }}
                    >
                      <i className="far fa-pencil" />
                    </button>
                  </div>
                  <div className="delete">
                    <button type="button">
                      <i className="far fa-trash" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          {productsConex.map((product, i) => {
            return (
              <li key={i}>
                <div className="productRow">
                  <div className="id">{product.id}</div>
                  <div className="name">{product.name}</div>
                  <div className="edit">
                    <button
                      type="button"
                      onClick={() => {
                        setSelected(product.id);
                        setOpened(true);
                      }}
                    >
                      <i className="far fa-pencil" />
                    </button>
                  </div>
                  <div className="delete">
                    <button type="button">
                      <i className="far fa-trash" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          {/* {productsTrailer.map((product, i) => {
            if (product.parent != null)
              return (
                <li key={i}>
                  <div className="productRow">
                    <div className="id">{product.id}</div>
                    <div className="name">{product.name}</div>
                    <div className="edit">
                      <button type="button">
                        <i className="far fa-pencil" />
                      </button>
                    </div>
                    <div className="delete">
                      <button type="button">
                        <i className="far fa-trash" />
                      </button>
                    </div>
                  </div>
                </li>
              );
          })}
          {productsIsolate.map((product, i) => {
            return (
              <li key={i}>
                <div className="productRow">
                  <div className="id">{product.id}</div>
                  <div className="name">{product.name}</div>
                  <div className="edit">
                    <button type="button">
                      <i className="far fa-pencil" />
                    </button>
                  </div>
                  <div className="delete">
                    <button type="button">
                      <i className="far fa-trash" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default Products;
