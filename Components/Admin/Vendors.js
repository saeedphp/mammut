import vendorsPanel from "../../data/vendors";
import vendorsTrailer from "../../data/vendorsT";
import vendorsIsolate from "../../data/vendorsI";
import PagetTitle from "../PageTitle";

const Vendors = () => {
  return (
    <div className="vendors">
      <PagetTitle title="نمایندگی ها" />
      <div className="vendorsList">
      <button type="button">
          افزودن نمایندگی جدید
          <i className="far fa-plus" />
        </button>
        <ul>
          <li>
            <div className="productHead">
              <div className="state">استان </div>
              <div className="name">نام </div>

              <div className="edit">ویرایش </div>
              <div className="delete">حذف </div>
            </div>
          </li>
          {vendorsPanel.map((product, i) => {
            return (
              <li key={i}>
                <div className="productRow">
                  <div className="state">{product.state}</div>
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
          {/* {vendorsTrailer.map((product, i) => {
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
          {vendorsIsolate.map((product, i) => {
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

export default Vendors;
