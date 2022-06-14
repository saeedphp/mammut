import HomeFeature from "../../Components/trailer/home-feature";
import HomeFeatured from "../../Components/Alternate/HomeFeatured";
import HomeBanner from "../../Components/trailer/home-banner";
import { NextSeo } from "next-seo";
import HomeGallery from "../../Components/Home/HomeGallery";
import HomeClients from "../../Components/Home/HomeClients";
import HomeContact from "../../Components/trailer/home-contact";
import HomeImage from "../../Components/trailer/home-image";
import Image from "next/dist/client/image";
import styles from "../../Components/trailer/home-image.module.css";
import HomeCatalog from "../../Components/Home/HomeCatalog";
import {useState} from "react";
import HomeVideo from "../../Components/trailer/home-video";

const HomePage = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

  return (
    <div className="alternateHomePage homePage homeTrailer">
      <NextSeo title="تريلرهای دنيای ماموت" />
      {/*<HomeBanner />*/}
        <HomeVideo />
      <HomeFeature
          title="يكی ديگر از نيازمندی های اساسی توسعه صنعتی و اقتصادی در هر كشور حوزه لجستيک و زيرساخت های حمل و نقل آن است. دنيای ماموت در دهه هفتاد نخستين بار تريلرهای حمل و نقل جاده‌ای را كه سابق بر اين به روش كارگاهی و غير استاندارد ساخته می‌شدند، با آخرين تكنولوژی روز دنيا جايگزين نمود و به عنوان اولين تريلرساز استاندارد كشور با ظرفيت توليد بيش از 50 تريلر در روز محصولاتی با كيفيت و با تكنولوژی نوين توليد و روانه بازار حمل و نقل نمود. اين تريلرها كه با بهره مندی از محورها، سيستم ترمز، شيرآلات و ساير متعلقات به روز ساخته می‌شوند، علاوه بر كاهش مصرف سوخت و استهلاک خودرو و جاده، ايمني بالايی را برای تردد جاده‌ای به ارمغان می‌آورند. اين محصولات كه عيناً مطابق با آخرين استانداردهای بين المللی ساخته می‌شوند، علاوه بر تامين نياز داخل كشور به ساير كشورهای همسايه نيز صادر می‌شوند و با تردد در جاده‌های بين المللی، برند دنيای ماموت اين نام آشنا در صنعت را به جهانيان معرفی می‌نمايند."
        name="تريلرهای دنيای ماموت"
        features={["همزمان با پيشرفت تكنولوژی و ورود مفاهيم نوين مبتنی بر it ، هوشمندسازی خودروها و تريلرهای توليدی دنيای ماموت در دستور كار قرار گرفت و اين ايده منتج به تاسيس شركت شتاب تک از ديگر زيرمجموعه‌های دنيای ماموت گرديد. پياده سازی و نصب آپشن‌های هوشمند بر روی تريلرهای توليدی ما رسالت اصلی شتاب تك می‌باشد كه موجب سهولت رانندگی و استفاده روزافزون از امكانات ديجيتال در صنعت لجستيک جاده‌ای می‌گردد."]}
        imgPath="trailerImg-intro.webp"
        direction="right"
      />
        <HomeCatalog
            text={
                "تنوع و گستردگی را در تریلر‌های دنیای ماموت مشاهده كنید."
            }
            catalog="trailer-cataloug.pdf"
            product=" تریلر"
            image="/assets/images/trailer-recatalog.webp"
            btnTxt="دانلود کاتالوگ"
            catalogTxt="کاتالوگ  "
            suffixTxt="های دنیای ماموت"
        />
        <HomeContact
            title="ارتباط با ما"
            desc="در صورت داشتن هرگونه سوال از دنيای ماموت و يا دريافت اطلاعات با ما در ارتباط باشيد."
            direction="left"
            imgPath="contact-trailer.jpg"
            btnLink="/"
            //contactTxt="ارتباط با ما"
        />
        <div className="trailerTitle">
            <p>
                مراحل توليد تريلرهای دنيای ماموت
            </p>
            <p>
                دنيای ماموت تجربه بهترين ها
            </p>
        </div>
        <HomeFeatured
            name="  طراحی محصول"
            features={["ابتدا برای توليد يک تريلر در دنيای ماموت طراحي محصول انجام می‌شود كه شامل امكان سنجی، طراحی مهندسی، تحقيق و توسعه و مهندسی فرآيندها می‌باشد."]}
            /*imgPath="lights.jpeg"*/
            direction="right"
            items={[
                "product-1.jpg",
                "product-2.jpg",
            ]}
        />
        <HomeFeatured
            name="  قطعه سازی"
            features={["مرحله قطعه سازی شامل كليه پروسه‌های ماشين كاری و قالب سازی مطابق با طراحی مهندسی می‌باشد."]}
            /*imgPath="lights.jpeg"*/
            direction="left"
            items={[
                "piece-1.jpg",
                "piece-2.jpg",
                "piece-3.jpg",
                "piece-4.jpg",
                "piece-5.jpg",
                "piece-6.jpg",
                "piece-7.jpg",
                "piece-8.jpg",
            ]}
        />
        <HomeFeatured
            name="  جعبه سازی"
            features={["در مرحله جعبه سازی، ساخت و مونتاژ جعبه ابزاردر سايزهای استاندارد و رنگ پودری قطعات و يا مجموعه‌های مونتاژی مطابق با طراحی مهندسی انجام می‌شود. "]}
            direction="right"
            items={[
                "box-1.jpg",
                "box-2.jpg",
                "box-3.jpg",
                "box-4.jpg",
                "box-5.jpg",
                "box-6.jpg",
            ]}
        />
        <HomeFeatured
            name="  شاسی سازی"
            features={["در مرحله شاسی سازی، شاسی و استراكچر محصول مونتاژ می‌شوند و در نهايت اتصالات و جوشكاری استراكچر محصول صورت می‌گيرد."]}
            direction="left"
            items={[
                "shasi-1.jpg",
                "shasi-2.jpg",
                "shasi-3.jpg",
            ]}
        />
        <HomeFeatured
            name="  شات بلاست و رنگ "
            features={["در اين مرحله از رنگ‌های پلی اورتان استفاده می‌شود."]}
            direction="right"
            items={[
                "color-trailer.jpg",
            ]}
        />
        <HomeFeatured
            name="  مونتاژ تكميلی محصولات"
            features={["اين مرحله تمام پروسه‌های مونتاژ محور، سيستم ترمز، سيستم روشنايی، تخته‌ها، متعلقات چادر، تكميل ساير قطعات مونتاژی، تنظيم چرخ‌ها، نصب گلگيرها، نصب برنامه سيستم ترمز – EOL و در نهايت تست رول تست را شامل می شود."]}
            direction="left"
            items={[
                "montazh-1.jpg",
                "montazh-2.jpg",
                "montazh-3.jpg",
                "montazh-4.jpg",
            ]}
        />
        <HomeFeatured
            name="  لكه گيری و كنترل نهايی "
            features={["و در آخر رنگ و كليه متعلقات كنترل می‌شوند."]}
            direction="right"
            items={[
                "final-check.jpg",
            ]}
        />
        <HomeImage
            title="قابليت های سيستم ترمز در تريلرهای دنيای ماموت"
            imgPath="brake-system.jpg"
            description="سيستم ترمز مورد استفاده در دنيای ماموت دارای قابليت‌های زير می‌باشد:
مجهز به سیستم ترمز EBS (سیستم ترمز الکترونیکی)، ABS (سیستم ترمز ضد قفل) و RSP (سیستم الکترونیکی ضد واژگونی).
سیستم ترمز EBS علاوه بر قابليت  ABS  به معناي گرفتن و آزاد کردن ترمز و جلوگیری از قفل شدن چرخ می‌باشد. اين سيستم میزان فشار باد روی هر یک از بوسترها و در نتیجه نیروی ترمزگیری را به تناسب میزان بار تریلر به صورت الکترونیکی و بهينه کنترل می‌نماید. همچنین نیروی ترمزگیری را با توجه به شرایط جاده‌ای (لغزندگی و سر پیچ‌ها) و سرعت تریلر کنترل می‌نماید. این عمل از قفل شدن چرخ‌ها و یا قیچی کردن تریلر در جاده‌های لغزنده جلوگیری می‌کند. سیستم ترمز EBS با بهبود عمل ترمزگیری و کاهش خط ترمز باعث بالا بردن ایمنی تریلر در جاده می‌شود. این سیستم با توزیع نیروی ترمز متناسب با سرعت چرخ‌های تریلر و کشنده باعث کاهش مصرف و ساییدگی یکنواختی لنت‌ها می‌گردد و در نهایت کاهش هزینه‌ها را به دنبال خواهد داشت.
"
            direction= "right"
        />
        <div className={`alternateHomeFeatured`}>
            <div className={`contents ${styles['img-row']}`}>
                <div style={{direction: 'ltr'}} className="img-container">
                    <div className={`picture`} style={{width: '50%'}}>
                        <Image
                            src={"/assets/images/subcategory.jpg"}
                            alt="سيستم زيربندی و محور"
                            layout="fill"
                        />
                    </div>
                    <div style={{direction: 'rtl'}} className="left-sec" >
                        <h2 className="trailer-desc">
                            سيستم زيربندی و محور
                        </h2>
                        <p>
                            در تریلرهای تولیدی ماموت از زیربندی و محور شرکت BPW , SAF استفاده می‌شود. همچنین معمولا محور جلوی تریلر دارای بالابر می‌باشد. به طور معمول سيستم ترمز كاسه‌اي در محصولات به اصطلاح off road  پيشنهاد شده كه مقاومت در برابر نيروهاي حاصل از سطوح جاده از امتيازات آن محسوب مي‌شود اما طول خط ترمز اين سيستم با ترمز ديسكی داراي تفاوت‌هايی می‌باشد:
                        </p>
                        <ul>
                            <li>
                                1) طراحی این محورها  به گونه‌ای است که مانند رادیاتور عمل می‌کند.
                            </li>
                            <li>
                                2) استفاده از کانال‌های منحصر به فرد با شکل مخروطی باعث انتقال و جریان یافتن هوا می‌شود.
                            </li>
                            <li>
                                3) کانال‌ها باعث کاهش شوک‌های حرارتی در دیسک ترمز و انباشتگی در حرارت محبوس شده می‌شوند.
                            </li>
                            <li>
                                4) بهینه سازی و استفاده از تکنولوژي منحصر به فرد در ساخت دیسک ترمز متناسب با نرخ عملکرد و قیمت
                                این نوع زیربندی قابلیت تنظیم ارتفاع تریلر را دارد.
                            </li>
                        </ul>
                        <br/>
                        <p>
                            از ویژگی‌های عمده این دسته از محورها می‌توان به موارد زیر اشاره نمود:
                        </p>
                        <ul className={`read-more ${open === true ? 'active' : null}`}>
                            <li>
                                •	محافظت در برابر خوردگی در دامنه وسیع و گسترده  تا 5 برابر بیشتر از روش‌های مرسوم
                            </li>
                            <li>
                                •	کمترین حد نفوذ و زنگ زدگی پس از آسیب دیدن احتمالی توسط سنگ و اجزا مشابه
                            </li>
                            <li>
                                •	بالا بودن مقاومت شیمیایی در برابر مواد شوینده و نامناسب
                            </li>
                            <li>
                                •	بالا بردن عمر شاسی اصلی تشکیل دهنده محور
                            </li>
                            <li>
                                •	مقاوم در برابر حرارت
                            </li>
                            <li>
                                •	تعمیر و نگهداری ساده‌تر و دسترسی راحت‌تر
                            </li>
                            <li>
                                •	عدم نیاز به روغن کاری مکرر
                            </li>
                        </ul>
                        <button className="readMore-btn" onClick={() => toggle()}>
                            {open === true ? 'مطالعه کمتر' : 'مطالعه بیشتر'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <HomeImage
            title="سیستم روشنایی و مدار سیم کشی"
            imgPath="lightning.jpg"
            description="سیستم روشنایی تریلرهای دنياي ماموت از شرکت‌هاي معتبر خارجي نظير ASPOCK مطابق استاندارد بین المللی ADR تهیه می‌گردد. سیستم روشنایی دارای چراغ‌های ضد جرقه، LED، مقاوم در مقابل آب، نور آفتاب و دارای طول عمر بالا می‌باشد. سیستم برق تریلر 24 ولت می‌باشد و شامل سوکت‌های 7 و 15 پین، چراغ ترمز عقب، چراغ‌های گوشه عقب (چراغ پایه دار)، چراغ دنده عقب، چراغ مه شکن، شب نمای خطر عقب، چراغ شب عقب، چراغ‌های بغل، شب نمای بغل، چراغ‌های جلو با شب نمای جلو و چراغ پلاک می‌باشد که این چراغ‌ها و علایم مطابق استانداردهای ملی و بین المللی ECE  اروپا نصب می‌گردد."
            direction= "right"
        />
        <HomeGallery
            title="پروژه های ما"
            items={[
                "trailer-7.jpg",
                "trailer-2.jpg",
                "trailer-3.jpg",
                "trailer-4.jpg",
                "trailer-5.jpg",
                "trailer-6.jpg",
            ]}
            category="تريلرهای دنيای ماموت"
        />
        <HomeClients
            title="مشتریان ما"
            subtitle="بزرگ‌ترین‌ها به ما اعتماد کرده اند"
        />
     {/* <HomeNetwork />*/}
      {/*<HomeServices title={"آشنایی با دنیای ماموت"} summary={"بازدید از دنیای ماموت روزانه و در هر ساعت مکان پذیر است "} items={[
        {
          picture: "tour.jpeg",
          text: "تور مجازی دنیای ماموت"
        },
        {
          picture: "visit.jpeg",
          text: "بازدید از دنیای ماموت"
        }
      ]}/>*/}
      {/*<HomeHighlights />*/}
      {/*<HomeBlogs />*/}
      {/*<HomeServices title={" به وسعت دنیای ماموت"} summary={"آشنایی با واحد‌های تریلر سازی دنیای ماموت"} items={[
        {
          picture: "delivery.jpeg",
          text: "تحویل"
        },
        {
          picture: "quality.jpeg",
          text: "کنترل کیفیت"
        },
        {
          picture: "production.jpeg",
          text: " خطوط تولید"
        }
      ]}/>*/}
    </div>
  );
};

HomePage.layout="L1";
export default HomePage;
