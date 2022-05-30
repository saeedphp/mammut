const Summary = (props) => {
  const name = props.name;
  const code = props.code;
  const state = props.state;
  const address = props.address;
  const phone = props.phone;
  return (
    <div className="summary">
      <div className="name">
        <label>نام</label>
        <p>{name}</p>
      </div>
      <div className="code">
        <label>کد نمایندگی</label>
        <p>{code}</p>
      </div>
      <div className="state">
        <label>استان</label>
        <p>{state}</p>
      </div>
      <div className="state">
        <label>آدرس</label>
        <p>{address}</p>
      </div>
      <div className="address">
        <label>شماره تماس</label>
        <a href={phone.href}>{phone.value}</a>
      </div>
    </div>
  );
};

export default Summary;
