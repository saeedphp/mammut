import PageTitle from "../PageTitle";

const Profile = () => {
  
  const saveData = (e) => {
    e.preventDefault();
    alert("saved changes");
  };
  const dismissData = (e) => {
    e.preventDefault();
    alert("dismissed changes");
  };
  return (
    <div className="profile">
      <PageTitle title="پروفایل" />

      <form>
        <div className="inputs">
          <div className="inputRow">
            <label>نام کاربری</label>
            <input type="text" />
          </div>
          <div className="inputRow">
            <label>رمز عبور</label>
            <input type="password" />
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

export default Profile;
