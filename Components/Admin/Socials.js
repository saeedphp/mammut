import PagetTitle from "../PageTitle";

const Socials = () => {
    const saveData = (e) => {
        e.preventDefault();
        alert("saved changes");
    }
    const dismissData = (e) => {
        e.preventDefault();
        alert("dismissed changes");
    }
  return (
    <div className="socials">
      <PagetTitle title="اطلاعات تماس" />
      <form>
        <div className="inputs">
          <div className="inputRow">
            <i className="fas fa-map" />
            <label>آدرس کارخانه</label>
            <input type="text"></input>
          </div>
          <div className="inputRow">
            <i className="fas fa-map" />
            <label>آدرس دفتر</label>
            <input type="text"></input>
          </div>
          <div className="inputRow">
            <i className="far fa-phone" />
            <label>تلفن کارخانه</label>
            <input type="tel"></input>
          </div>
          <div className="inputRow">
            <i className="far fa-phone" />
            <label>تلفن دفتر</label>
            <input type="tel"></input>
          </div>
          <div className="inputRow">
            <i className="far fa-envelope" />
            <label>ایمیل</label>
            <input type="email"></input>
          </div>
          <div className="inputRow">
            <i className="fab fa-whatsapp" />
            <label>لینک whatsapp</label>
            <input type="text"></input>
          </div>
          <div className="inputRow">
            <i className="fab fa-instagram" />
            <label>لینک instagram</label>
            <input type="text"></input>
          </div>
          <div className="inputRow">
            <i className="fab fa-linkedin" />

            <label>لینک linkedin</label>
            <input type="text"></input>
          </div>
          <div className="inputRow">
            <i className="fas fa-film" />

            <label>لینک aparat</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="buttons">
          <button type="submit" className="save" onClick={(e) => saveData(e)}>
            ذخیره
          </button>
          <button type="submit" className="cancel" onClick={(e) => dismissData(e)}>
            لغو
          </button>
        </div>
      </form>
    </div>
  );
};

export default Socials;
