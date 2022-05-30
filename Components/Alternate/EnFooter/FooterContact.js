const FooterContact = () => {
  const contacts = [
    { title: "Office phone", link: "tel:0214500", value: "021-4500-1" },
    { title: "Factory phone", link: "tel:0264500", value: "026-4500-1" },
    {
      title: "Email",
      link: "mailto:info@mammutworld.com",
      value: "info@mammutworld.com",
    },
    { title: "Fax", link: "tel:02188103520", value: "021-88103520" },
    // {
    //   title: "آدرس کارخانه",
    //   link: "/",
    //   value: "اتوبان كرج به قزوین، 5 كیلومتر بعد از پل هوایی كردان ",
    // },
    // {
    //   title: "آدرس دفتر",
    //   link: "/",
    //   value: "تهران، خیابان وزرا، کوچه 7، پلاک 7",
    // },
  ];
  return (
    <div className="footerBlock footerContact">
      <h4>
       Contact Us
        <i className="far fa-angle-down" />
      </h4>
      <ul>
        {contacts.map((contact, i) => {
          return (
            <li key={i}>
              <span>{contact.title}:</span>
              <a href={contact.link}>{contact.value}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterContact;
