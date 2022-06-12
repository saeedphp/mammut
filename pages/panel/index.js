import HomeBanner from "../../Components/Home/HomeBanner";
import HomeBlog from "../../Components/Home/HomeBlog";
import HomeCatalog from "../../Components/Home/HomeCatalog";
import HomeClients from "../../Components/Home/HomeClients";
import HomeFAQ from "../../Components/Home/HomeFAQ";
import HomeNature from "../../Components/Home/HomeNature";
import WhyPanel from "../../Components/WhyPanel";
import WhyPanelSecond from "../../Components/WhyPanelSecond";
import {NextSeo} from "next-seo";
import WhyProduct from "../../Components/Home/WhyProduct";
import HomeIntro from "../../Components/Home/HomeIntro";
import HomeCover from "../../Components/Home/HomeCover";
import HomeGallery from "../../Components/Home/HomeGallery";

export default function Home() {
    return (
        <div className="homePage homePanel">
            <NextSeo title="ساندویچ پانل‌های دنیای ماموت"/>
            <HomeBanner
                persianSlogan={{
                    h1: "تجربه بهترین ها! ",
                }}
                englishSlogan={{h1: "EXPERIENCE THE BEST! "}}
                bannerImage={"homeBannerPanel.webp"}
                btnTxt="فروش آنلاین"
            />
            <HomeIntro
                title="ساندویچ پانل دنیای ماموت"
                subTitle="تلاقی كیفیت و نوآوری"
                p1="متخصصین دنیای ماموت در ادامه تكنولوژی شیمیایی نوآورانه در تولید، ساندویچ پانل را كه در گام نخست از كشور آلمان وارد شده بود، بومی سازی كرده و با تاسیس شركت دانش بنیان مهرسا شیمی مواد اولیه مورد نیاز این صنعت را با تكیه بر دانش بومی و ظرفیت‌های داخلی تولید نموده‌اند كه جهش بزرگی در این حوزه محسوب می‌شود."
                img= "sandwich-panelIntro.jpg"
            />
            <HomeIntro
                title="کاربرد ساندویچ پانل"
                subTitle="تلاقی كیفیت و نوآوری"
                p1="ساندویچ پانل به مصالحی گفته می‌شود که به صورت ساندویچ (لایه‌ای) تولید
          می‌شود و لایه‌های بیرونی از جنس ورق فلزی است و همچنین دارای یک هسته از
          جنس فوم پلی یورتان می‌باشد که با دانسیته‌های مختلف در بین دو لایه ورق،
          تزریق می‌شود."
                p2="از ساندویچ پانل‌ها جهت پوشاندن سقف‌ها و دیوارهای سالن‌های صنعتی،
          کارخانه‌ها، سالن‌های تولید، انبارها، ساختمان‌های پیش ساخته، کانکس،
          سردخانه‌ها، ‌اتاق‌های تمیز، اتاق‌های سردخانه‌ای، کمپ و اسکان‌های موقت
          و ... استفاده می شود."
                p3="ساندویچ پانل‌ها، نسبت به متریال‌های مشابه در خصوص پوشش، از لحاظ سبک
          بودن و عایق بودن بهترین متریال در نوع خود می‌باشند. این محصول علاوه بر
          وزن کم و سرعت در اجرا نسبت به مصالح دیگر مقرون به صرفه‌تر بوده و تمامی
          استانداردهای ذخیره سازی انرژی را رعایت می‌نمایند."
                p4="یكی از ویژگی‌های ساندویچ پانل‌های ساخته شده با استفاده از پلی یورتان،
        عایق بودن نسبت به دما و پایین‌ترین ضریب انتقال دما می‌باشد. به طور مثال
        ضریب انتقال دمای یک ساندویچ پانل به ضخامت 5 سانتی‌متر به علت ضریب انتقال
        حرارتی فوق‌العاده پایین معادل یک دیوار آجری به ضخامت172 سانتی‌متر است كه
        همین امر منجر به صرفه جویی در مصرف انرژی و كاهش هزینه‌ها در طولانی مدت
        خواهد شد."
                img= "blogs/sandwich/wall sandwich panel (2).jpg"
            />

            <HomeNature
                title="حمایت از محیط زیست ، حمایت از زندگی است ."
                text="ساندویچ پانل‌ها در شرایط مختلف آب و هوایی قابل استفاده هستند و برای استفاده از آن‌ها هیچ‌گونه محدودیتی وجود ندارد. ساندویچ پانل‌ها در مقایسه با سایر مصالح دورریز کمتری دارند و این امر ارزش فوق‌العاده این مصالح ساختمانی را به خوبی نشان می دهد و همچنین در مقایسه با مصالح سنتی، حرارت بسیار كمتری را از خود عبور می‌دهد كه همین امر موجب جلوگیری از اتلاف انرژی و حفظ منابع طبیعی می‌شود."
            />
            <WhyProduct
                title="چرا ساندویچ پانل دنیای ماموت؟"
                subTitle="هم‌نشینی كیفیت و نوآوری"
                desc="از ویژگی‌ها و دلایل مهم استفاده از ساندویچ پانل‌ها میتوان به موارد زیر
          اشاره كرد:"
                p1="سرعت نصب و اجرای بالا"
                p2=" عایق حرارتی و عملکرد مناسب در مواقع بروز حریق"
                p3="جذب رطوبت پایین و نفوذ ناپذیر در برابر برف، باران و گرد و خاک"
                p4=" مقاوم در برابر انوع مواد شیمیایی و قابلیت شستشو و بهداشتی بودن آن"
                more="دنیای ماموت با استفاده از پیشرفته‌ترین خطوط پیوسته و تمام اتوماتیک با
          ظرفیت تولید متوسط 6.500.000 مترمربع در سال، به عنوان رهبر بازار در حال
          فعالیت می‌باشد كه توانسته علاوه بر تامین نیاز گسترده بازار داخلی،
          موفق‌ترین تجربه‌های صادرات به کشورهای خاورمیانه را داشته باشد."
            />
            {/* <WhyPanelSecond /> */}
            <HomeCover imgPath="panel_cover_pure.jpg"/>
            <HomeClients
                title="مشتریان ما"
                subtitle="بزرگ‌ترین‌ها به ما اعتماد کرده اند"
            />
            <HomeCatalog
                text={
                    "تنوع و گستردگی را در كاتالوگ ساندویچ پانل‌های دنیای ماموت مشاهده كنید."
                }
                subTitle="کاتالوگ"
                catalog="cataloug.pdf"
                product="ساندویچ پانل‌های"
                image="/assets/images/homeCatalog.png"
                btnTxt="دانلود کاتالوگ"
                catalogTxt="کاتالوگ دنیای ماموت "
            />
            {/* <HomeBlog prefix="conex" /> */}
            <HomeFAQ title="پرسش‌های متداول" prefix="panel"/>
            <HomeGallery
                title="پروژه های ما"
                items={[
                    "panel-1.png",
                    "panel-2.jpg",
                    "panel-3.jpg",
                    "panel-4.jpg",
                    "panel-5.jpg",
                    "panel-6.jpeg",
                ]}
                category="ساندویچ پانل‌های دنیای ماموت"
            />
        </div>
    );
}

Home.layout = "L1";
