export default function AfterSaleFrom() {
  return (
    <form className="aftrSaleForm">
      <h6>
        شرکت دنیای ماموت با دارا بودن بزرگ ترین زنجیره ساخت سازه‌های صنعتی در
        تمامی مراحل به ارائه خدمات پس از فروش متعهد خواهد بود. سرعت در ارائه
        خدمات به نحو مطلوب و کسب رضایتمندی مشتریان اولویت واحد خدمات پس از فروش
        دنیای ماموت میباشد. برای دریافت اطلاعات بیشتر در مورد شرایط دریافت
        گارانتی با ما در ارتباط باشید.
      </h6>
      <div className="inputs">
        <input type="text" placeholder="نام شما..."></input>
      </div>
      <div className="inputs">
        <input type="text" placeholder="نام خانوادگی شما..."></input>
      </div>
      <div className="inputs">
        <input type="tel" placeholder="تلفن  شما..."></input>
      </div>
      <div className="inputs">
        <input type="mail" placeholder="ایمیل  شما..."></input>
      </div>

      <div className="buttons">
        <button type="submit"> ثبت درخواست</button>
      </div>
    </form>
  );
}
