import Image from "next/image";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import Link from "next/link";
import AboutPage from "../trailer/about";

export default function Ferdows() {
  let prefix = "";
  useEffect(() => {
    document.querySelector("footer").style.display = "none";    
  })
  return (
    <section className="ferdows">
      <NextSeo title="به یاد بهروز فردوس" />
      <div className="pageContents">
        <div className="banner">
          <div className="picture">
            <Image
              src={require("../../public/assets/images/behrouzFerdows.jpg")}
              alt="Behzad ferdows"
              layout="fill"
            />
          </div>
          <div className="memory">
            <h5>IN MEMORY OF</h5>
            <h1>BEHROUZ FERDOWS</h1>
            <h3>1940-2021</h3>
          </div>
        </div>
        <div className="text">
          <div className="english">
            <p>
              Behrouz Ferdows was born in 1940. He was a prominent entrepreneur,
              craftsman, investor and consultant who was active internationally
              and with 60 years of success in various fields, left a real and
              unique partnership in the world of business and entrepreneurship.
            </p>
            <p>
              He gave several lectures on modular construction as well as
              humanitarian logistics in the Covid-19 crisis and the role of
              entrepreneurship in job creation and development.
            </p>
            <p>
              It goes without saying that Behrouz Ferdows has been active in
              countless charities in poor African countries and has made
              tremendous efforts to import steel made to poor African countries
              to build the necessary infrastructure in poor areas.
            </p>
            <p>His name will last forever as the father of Iranian industry.</p>
            <p>
              We are sorry to hear about his loss, he lived a fabulous life and
              was an inspiration to everyone who knew him. Our deepest
              condolences.
            </p>
          </div>

          <div className="persian">
            <p>
              بهروز فردوس متولد 1319، کارآفرین، صنعتگر، سرمایه گذار و مشاور
              برجسته ای بود که در عرصه بین المللی فعال بود و با 60 سال موفقیت در
              عرصه‌های مختلف، مشارکتی واقعی و منحصر به فرد در دنیای تجارت و
              کارآفرینی از خود بر جای گذاشت.
            </p>
            <p>
              او چندین سخنرانی بشردوستانه در مورد ساخت و ساز مدولار و لجستیک در
              بحران کووید-19 و نقش کارآفرینی در ایجاد و توسعه شغل ارائه کرد.
            </p>
            <p>
              ناگفته نماند که بهروز فردوس در موسسات خیریه بی شماری در کشورهای
              فقیر آفریقایی فعالیت داشته و تلاش‌های شگرفی برای واردات فولاد
              ساخته شده به کشورهای فقیر آفریقایی برای ایجاد زیرساخت‌های لازم در
              مناطق فقیر انجام داده است.
            </p>
            <p>نام او به عنوان پدر صنعت ایران جاودانه خواهد ماند.</p>
            <p>
              از شنیدن خبر از دست دادن او متاسفیم، او زندگی شگفت انگیزی داشت و
              الهام بخش همه کسانی بود که او را می شناختند.
            </p>
            <p>از دست دادن او را عمیقا تسلیت می‌گوییم.</p>
            <p>روحش شاد و یادش گرامی</p>
          </div>

        </div>
        <div className="description" style={{textAlign: "justify", padding: "1rem"}}>
            <p>
              آقای مهندس بهروز فردوس موسس و بنیانگذار گروه صنعتی ماموت پس از
              آنکه در آلمان فارغ التحصیل شد همسری آلمانی برگزید و مجدداً به
              ایران بازگشت و با عشق و علاقه وافر به آب و خاک وطن، فعالیت صنعتی و
              اقتصادی خود را آغاز نمود. وی ابتدا با برادران خود شرکت FM را تاسیس
              نمود و به ساخت اتاقهای یخچالی فایبری جهت حمل مواد فاسد شدنی
              پرداخت. در خاطرات وی آمده -یک روز در خیابان وانتهایی را دیدم که
              در گرمای تابستان گوشت و مرغ حمل میکردند و از اینکه مردم کشورم
              باید گوشت و مرغی را مصرف نمایند که به دلیل حمل و نقل غیر استاندارد
              در دمای بالا فاسد میشوند دلم گرفت- آنجا بودکه غیرت ملیاش
              خدشهدار شد و فوراً با الگو برداری از آنچه در تکنولوژی روز آلمان
              دیده و آموخته بود جهت استاندارد سازی حمل گوشت و مرغ و کالاهای فاسد
              شدنی اقدام به طراحی و ساخت اتاقهای یخچالی جهت نصب بر روی وانتها
              و خودروهای تجاری درون شهری نمود. پس از انقلاب اسلامی که بسیاری از
              سرمایهداران مهاجرت نمودند ایشان با حس عمیق وطنپرستی که داشت در
              وطن خویش ماند و با ایدههای ناب صنعتی خود در راه پیشرفت و آبادانی
              کشور تلاش شبانه روزی انجام داد. او به عنوان یک پدر دلسوز همه چیز
              را برای فرزندان و نسل آینده کشور میخواست ولذا با شروع دهه 70 برند
              ماموت را تاسیس نمود و فرزندانش را که تازه از دانشگاههای آمریکا
              فارغالتحصیل شده و به کشور بازگشته بودند در زمینی به وسعت 10,000
              متر مربع به کار گمارد و با حمایتها و راهنماییهای بینظیر خود
              نسلی توانمند را در مسیر توسعه و اعتلای صنعت کشور تربیت نمود.
            </p>
            <p>
              در دوره سازندگی کشور چون ایجاد زیرساختهای صنعتی نیاز به توسعه
              داشت، با تولید انواع سازههای فلزی و ساندویچ پانلهای سقفی و
              دیواری نقش اساسی در ساخت سولههای صنعتی مورد نیاز در بخشهای مختلف
              اعم از نیروگاهها، پتروشیمیها، پالایشگاهها و غیره ایفا نمود.
              عِرق ملی ایشان چنان زیاد بود که همواره در سفرهای خود به آلمان و
              سایر کشورهای پیشرفته سعی میکرد بهترین و آخرین تکنولوژیهای روز
              دنیا را آموخته و سپس در کشور خود پیادهسازی نماید. دراین راستا با
              توجه به اینکه هر کشوری جهت توسعه پایدار نیاز به شبکه حمل و نقل و
              لجستیک قابل اطمینان دارد نیاز کشور به تریلرهای حمل و نقل جادهای
              را که به صورت دست دوم از اروپا وارد میشدند به طور کامل بر طرف
              نمود و با احداث کارخانجاتی با آخرین تکنولوژی روز تولید، تریلرهایی
              تولید نمود که علاوه بر تامین نیاز داخل کشور به دلیل کیفیت بالای
              ساخت و بهرهمندی از استانداردهای روز دنیا به اقصی نقاط دنیا نیز
              صادر شد. وی با پشتکار و نگاه بلند خود کاری کرد که نام ماموت و کلمه
              -ساخت ایران -در تمام کشورهای خاورمیانه و آفریقا ماندگار شود.
            </p>
            <p>
              امروز به جرات میتوان گفت هیچ جادهای در کشورهای خاورمیانه، آفریقا
              و اروپا وجود ندارد که تریلرهای ساخت ماموت در آن تردد نداشته باشد.
            </p>
            <p>
              وی از همان ابتدا عشق و علاقهای شدید به تولید داشت و اعتقاد داشت
              هر صنعتی مشروط به اینکه موجب اشتغالزایی جوانان کشور شود و بتواند
              محصول قابل رقابت با بهترینهای دنیا تولید نماید که امکان صادرات
              داشته باشد ارزشمند خواهد بود.
            </p>
            <p>
              همزمان با توسعه شرکت ماموت سالیانه حداقل 300 نفر نیروی کار جدید به
              مجموعه اضافه میشد و هم اکنون این مجموعه تبدیل به یک هلدینگ بزرگ
              صنعتی شده است و با بیش از 50 شرکت متنوع در زمینههای مختلف کسب و
              کار موجبات اشتغالزایی بیش از 10,000 نفر را فراهم آورده است.
            </p>
            <p>
              وی تا دقایق پایانی عمر خویش نیز دغدغه تولید داشت و همواره سعی
              میکرد در جهت خودکفایی هر چه بیشتر صنعت کشور تلاش نماید.
            </p>
            <p>
              هم اکنون نه فقط خانواده و کارکنان او، بلکه کل جامعه صنعتی کشور
              داغدار نبودنش هستند. امید که جوانان این آب و خاک الگویی بینظیر
              همانند ایشان را سرلوحه کار خود قرار داده و در مسیر توسعه و پیشرفت
              اقتصاد کشور تلاش نمایند.
            </p>
            <p>روحش شاد، یادش گرامی و راهش پر رهرو باد.</p>
          </div>
        <div className="videos">
          <div className="videoFrame">
            <video controls>
              <source src="../assets/videos/ferdows1.mov" />
            </video>
          </div>
          <div className="videoFrame">
            <video controls>
              <source src="../assets/videos/ferdows2.mov" />
            </video>
          </div>
        </div>
        <div className="goHome">
            <a href={"/"}>
              بازگشت به صفحه اصلی  <i className="far fa-angle-left" />
            </a>
        </div>
      </div>
    </section>
  );
}

Ferdows.layout="L1";
