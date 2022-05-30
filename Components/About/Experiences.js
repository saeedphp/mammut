import Image from "next/image";

const Experiences = () => {
  return (
    <div className="experiences">
      <div className="picture">
        <Image
          src="/assets/images/experiences.jpg"
          alt="دنیای ماموت تجربه بهترینها"
          layout="fill"
        />
      </div>
      <div className="text">
        <h2>دنیای ماموت تجربه بهترینها</h2>
        <p>
          {`
                جهت تكمیل زنجیره ارزش مشتری در حوزه ساخت و ساز، شركت سازه و سوله ماموت به عنوان یكی از شركت‌های زیر مجموعه دنیای ماموت پای به عرصه نهاد و در زمانی كوتاه با تبدیل شدن به بزرگترین سازنده اسكلت فلزی در كشور دنیای كسب و كار، ما را در حوزه ساختمانی وسیع‌تر نمود. 
پس از آن كه یك سوله صنعتی ساخته و با ساندویچ پانل پوشش داده می‌شود، جهت جا به جایی مواد اولیه و تجهیزات در سالن به جرثقیل‌های سقفی نیاز خواهد داشت. در این مرحله شركت وزنه، از دیگر زیر مجموعه‌های دنیای ماموت وارد عمل شده و جرثقیل‌هایی با كیفیت بین المللی و با ظرفیت و تناژهای مختلف ساخته و نصب می‌نماید. 

                `}
        </p>
      </div>
    </div>
  );
};

export default Experiences;
