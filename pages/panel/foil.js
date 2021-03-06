import { NextSeo } from "next-seo";
import Image from "next/image";
import PageTitle from "../../Components/PageTitle";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from '../../public/assets/images/products/panel/foil/foil-1.webp';
import img2 from '../../public/assets/images/products/panel/foil/foil-2.webp';
import img3 from '../../public/assets/images/products/panel/foil/foil-3.webp';
import img4 from '../../public/assets/images/products/panel/foil/foil-4.webp';
import img5 from '../../public/assets/images/products/panel/foil/foil-5.webp';
import img6 from '../../public/assets/images/products/panel/foil/foil-6.webp';

const FoilPage = () => {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
  const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: true,
    rtl: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      768: {
        items: 2,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
      992: {
        items: 2,
        rtl: true,
        mouseDrag: false,
        touchDrag: false,
      },
    },
  };
  return (
    <div className="foilPage innerPage">
      <NextSeo title="ورق‌های ساندویچ پانل" />

      <PageTitle title="ورق‌های ساندویچ پانل" />
      <div className="contents">
        <div className="wrapper">
          <p>
            يكی از اجزا تشكيل دهنده ساندويچ پانل، ورق می باشد كه در دو سمت ساندويچ پانل قرار می‌گيرد. از انواع ورق‌ها كه در ساخت ساندويچ پانل مورد استفاده قرار می‌گيرد، ميتوان به اين موارد اشاره نمود: گالوانيزه، آلوزينك، پالستيسول، آلومينيوم و استيل كه در رنگ بندی‌های مختلف جهت استفاده و كاربرد در فضاهای مختلف توليد مي‌شوند.
            شركت دنيای ماموت، ساندويچ پانل‌های آلوزينك، پالستيسول و استيل خود را با استفاده از متريال وارداتی توليد می كند. لازم به توضيح است كه به تازگی ورق با پوشش آلوزينك در كشور عزيزمان در حال توليد است كه برخی توليد كنندگان از اين ورق براي توليد ساندويچ پانل استفاده می‌كنند.
            انتخاب نوع ورق ساندويچ پانل به عوامل محيطی كه قرار است پروژه در آن احداث گردد، از جمله نوع اقليم منطقه از نظر ميزان رطوبت، بارش برف و باران، نرخ خوردگي، ارتفاع از سطح دريا، دما و ميزان تابش اشعه نور خورشيد آن منطقه و نوع فعاليت يا بهره برداری صورت گرفته پس از احداث پروژه بستگی دارد .

          </p>
          <div className="picture">
            <Image src={img1} alt="image" layout={"fill"} />
          </div>
        </div>
        <h4>ورق‌های ساندويچ پانل دنيای ماموت</h4>
        <div className="wrapper">
          <div className="picture">
            <Image src={img2} alt="image" layout={"fill"} />
          </div>
          <p>
            ورق‌های مورد استفاده در دنيای ماموت به صورت پيش رنگ شده و در ضخامت‌های مختلف با تلرانس استاندارد EN 10143 می‌باشند. پوشش رنگ ورق‌های گالوانيزه، آلوزينك، آلومينيوم و استيل از نوع رزين سوپر پلي استر با دوام و پايداری بالا به ضخامت 25 ميكرون ( 5 ميكرون پرايمر 20+ ميكرون پوشش رويه ) در قسمت بيرون و 7 ميكرون رنگ پرايمر از جنس اپوكسي بعنوان COAT BACK با قابليت فوم پذير بودن در محل اتصال ورق با فوم، جهت چسبندگی بهتر می باشد. اين رنگ دوام و ثبات ظاهري بسيار بالايی دارد و همين امر موجب افزايش مقاومت در برابر UV، مقاومت در برابر خوردگي و مواد شيميايی در اين محصول می‌گردد.
            <br/>
            تفاوت ورق آلوزینک و ورق گالوانیزه تنها در پوشش آن‌ها می‌باشد. ورق گالوانیزه با عنصر روی خالص یا آلیاژ آهن – روی پوشش داده می‌شود، اما در ورق آلوزینگ شاهد آن هستیم که این محصول با پوششی از ترکیب آلومینیوم و روی تشکیل شده است. از سوی دیگر شباهت این دو ورق بر پایه آن‌ها می‌باشد که هر دو از ورق فولادي تشکیل شده‌اند و پوشش روی آن‌ها موجب می‌گردد که در شرایط مرطوب و مستعد بارش، دچار اکسید و زنگ زدگی نشوند.
            <br/>
            پلاستيسول يك نوع پوشش پليمري آلي (رنگ) بر پايه پليمر ترموپلاست پلی وينل كلرايد (PVC) مي‌باشد كه در ضخامت 150 تا 200 ميكرون بر روي ورق‌هاي كويل فلزي از جنس آلوزينك اعمال شده است.
            <br/>
            مقاومت بالا در برابر محيط‌های خاص اسيدی، بازي يا اتمسفری خاص يا مرطوب كه خوردگي بالايی دارند. مقاوم در برابر خراشيدگی و آسيب‌های سطحی كه موجب بروز صدمات احتمالی بر روی سطح ورق می‌گردد. مقاوم در برابر اشعه نور خورشيد در دراز مدت و عدم تخريب رنگ ظاهر چرمی و کیفیت پوشانندگي عالی
            اين نوع ورق در محصولات ساندويچ پانل سقفی و ديواری دنيای ماموت در مواردی كه نياز به ساندويچ پانل با مقاومت بالاتر و عملكرد بهتر در‌ برابر شرايط و محيط‌هاي اتمسفری كه نياز به مقاومت در برابر خوردگی بالايی دارند مورد استفاده قرار می‌گيرد .
            <br/>
            دنيای ماموت مفتخر است كه مبتنی بر نيازهای دقيق مشتريان با مشاوره‌هاي تخصصي و در صورت نياز بازديد از محل پروژه، به مشتريان خود كمك نمايد تا انتخابی صحيح داشته باشند.
          </p>
        </div>
        <h4>مشخصات فنی ورق‌های ساندويچ پانل دنيای ماموت</h4>
        <div className="wrapper">
          <p>
            از آنجا كه ميزان پوشش روي (ZN) در ورق‌های گالوانيزه به ميزان حداقل 120 ميكرون و يا ميزان پوشش روی، آلومينيوم و سيليكون در ورق‌های آلوزينك، كاملا مرتبط با مدت زمان ايجاد خردگي در ورق‌ها می‌باشد، اين ميزان پوشش بسيار حائز اهميت است و نهايتا به طول عمر بيشتر محصول مرتبط می‌باشد.
            <br/>
            موضوع بسيار حائز اهميت ديگر، جنس و ضخامت پوشش رنگ سوپر پلی استر به ميزان حداقل 25 ميكرون بر روی ساندويچ پانل است. بديهی است استفاده از پوشش رنگ سوپر پلي استر به جای رنگ پلی استر، تفاوت شايانی در ميزان رنگ پريدگی در طول زمان و نيز كمك به طول عمر بالاتر محصول خواهد نمود.
            <br/>
            ميزان مقاومت يك ساندويچ پانل، كاملا مرتبط با تعداد و ارتفاع گام‌هايی است كه بر روي ورق‌های آن ايجاد شده است، لذا دقت نظر بر روی نقشه ساخت نيز بسيار حائز اهميت است. جزئيات فني و نحوه همپوشانی ساندويچ پانل‌ها از عوامل ديگری است كه به حفظ دمای محيط كمك بسيار شايانی می‌كند.
          </p>
          <div className="picture">
            <Image src={img3} alt="image" layout={"fill"} />
          </div>
        </div>
        <div className="wrapper">
          <div className="picture">
            <Image src={img4} alt="image" layout={"fill"} />
          </div>
          <div className="picture">
            <Image src={img5} alt="image" layout={"fill"} />
          </div>
        </div>
      </div>
    </div>
  );
};

FoilPage.layout="L1";
export default FoilPage;
