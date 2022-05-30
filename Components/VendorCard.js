export default function VendorCard(props) {
  const name = props.name;
  const code = props.code;
  const state = props.state;
  const address = props.address;
  const phone = props.phone;
  return (
    <div className="vendorCard">
      <div className="contents">
        <div className="name">
          <label>نام</label>
          <p>{name}</p>
        </div>
        {code != null && (
          <div className="code">
            <label>کد نمایندگی</label>
            <p>{code}</p>
          </div>
        )}
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
    </div>
  );
}
