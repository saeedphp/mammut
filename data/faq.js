const data = [
    {
        question: "ساندویچ پانل‌ها در چه بخش‌هایی كاربرد دارند؟",
        answer: `از ساندویچ پانل برای پوشش سقف و دیوار ساختمان‌های اقامتگاهی، اداری، تجاری، آموزشی، سالن‌های صنعتی، سردخانه‌ها، کلین روم‌ها، آشیانه هواپیما‌ها، سوله‌های کشاورزی، سالن‌های ورزشی، انبار سیلو‌ها، گاوداری‌ها، مرغداری‌ها و بسیاری از موارد دیگر استفاده می‌شود.`,
    },
    {
        question:
            "لایه رویه و لایه زیره در محصول ساندویچ پانل از چه جنسی می‌باشند؟",
        answer: `لایه رویه و زیره متناسب با نوع کاربری مورد نظر از استیل، آلومینیوم، گالوانیزه یا آلوزنیک پیش رنگ شده می‌باشند.`,
    },
    {
        question:
            "منظور از دانسیته یا چگالی مورد استفاده در ساخت ساندویچ پانل چيست و معمولا اين ميزان چقدر می‌باشد؟",
        answer: `دانسیته، چگالی، فشردگی يا وزن مخصوص همه این کلمات به معنی ميزان مقدار جرم موجود در واحد حجم است. دانسیته یا تراکم جرم یک جسم، با مقدار جرم آن جسم رابطه مستقیم دارد. یعنی هرچه جسم سنگین تر باشد در نتیجه دانسیته آن بیشتر است. معمولا دانسیته اجسام با دانسیته آب مقایسه می‌شود تا متوجه شویم آیا این اجسام روی آب شناور می‌مانند یا در آن غرق می‌شوند. معمولاً دانسیته مطلوب ساندویچ پانل بین 40 تا 42 کیلوگرم بر متر مکعب است.`,
    },
    {
        question: "منظور از عايق حرارتی چيست و چرا ساندویچ پانل عایق حرارتی می‌باشد؟",
        answer: `همواره گرما از سیستم‌هایی که دمای بالاتری دارند به سیستم‌های با دمای کمتر، جریان می‌یابد و این پدیده اجتناب ناپذیر است. اما می‌توان نرخ این جریان را به شدت کاهش داد و این هدف اصلی عایق‌های حرارتی است. عایق کاری حرارتی، اتلاف انرژی حرارتی را در بناها، سازه‌ها و ساختمان‌ها و همچنین صنایع و تجهیزات به حداقل رسانده و پیرو آن منجر به صرفه جویی در هزینه‌های انرژی می‌شود، به دليل اينكه پلي يورتان / پلي ايزوسيونات خاصيت عايق حرارتی دارند و در هسته يك ساندويچ پانل قرار دارد، نهايتا به ساندويچ پانل خاصيت عايق بودن را مي‌دهد. `,
    },
    {
        question: "از پانل‌های دیواری در چه کاربری‌هایی استفاده می‌شود؟",
        answer: `1)  دیوارهای سوله‌های صنعتی 2) خانه‌های پیش ساخته 3) اتاق‌های تمیز ( کلین روم) 4) سردخانه‌ها `,
    },
    {
        question: "آیا میتوان از ساندویچ پانل‌های دیواری به عنوان دیوار یا پارتیشن استفاده کرد؟",
        answer: `بله در مصارف سازه‌های اداری جهت تفکیک اتاق‌ها با توجه به عایق بودن ساندویچ پانل، میتوان به عنوان یک دیواره اصلی یا پارتیشن استفاده کرد.`,
    },
    {
        question: "از چه ورق‌هایی برای تولید ساندویچ پانل‌های دیواری استفاده می‌شود؟",
        answer: `در تولید ساندویچ پانل‌های دیواری می‌توان از ورق‌های گالوانیزه، آلوزینك، آلومينيوم، پلاستيسول متناسب با نوع كاربری استفاده كرد. از جمله ویژگی‌های ساندويچ پانل‌های دنیای ماموت استفاده از ورق‌های آلوزینك وارداتی با كیفیت و مقاومت بالا در برابر خوردگی می‌باشد. `,
    },
    {
        question: "چرا مقاومت ساندویچ پانل سقفي از دیواری بیشتر است؟",
        answer: `با توجه به گام‌های موجود در ساندويچ پانل‌های سقفي و اورلپ ساندویچ پانل سقفی، مقاومت ساندويچ پانل سقفي نسبت به دیواري بیشتر است لذا این موضوع منجر به افزایش استحکام سازه می‌گردد بنابراين پیشنهاد می‌گردد در سوله‌های صنعتی در مناطق بادخیز از پانل سقفی در دیواره‌ها استفاده شود.`,
    },
    {
        question: "آیا از پانل سقفی میتوان در سردخانه‌ها استفاده کرد؟",
        answer: `خیر، به دلیل وجود فاق زبانه در ساندویچ پانل دیواری، این موضوع منجر به ایجاد یک محیط کاملا ایزوله و عایق در برابر انتقال حرارت نسبت به ساندویچ پانل دیواری می‌گردد. `,
    },
    {
        question: "نحوه محاسبه ساندویچ پانل سقفی به چه صورت می‌باشد؟",
        answer: `1براساس مساحت و با عرض مفید یک متر محاسبه می‌گردد. `,
    },
    {
        question: "چه مدل از ساندویچ پانل‌ها در کلین روم قابل استفاده می‌باشند؟",
        answer: `از ساندویچ پانل‌های دیواری با ورق‌های دو رو صاف در محیط‌های كلین روم یا اتاق تمیز به جهت عدم انباشته شدن باكتری‌ها استفاده می‌شود.`,
    },
    {
        question: "ساندویچ پانل‌های کلین روم چه مزيت‌هايی دارند؟",
        answer: `•\tعدم انباشته شدن باکتری‌ها
•\tشستشو سریع آسان
•\tظاهر شکیل و زیبا مختص کلین روم‌ها و محیط‌های آزمایشگاهی و دارویی و آرایشی
•\tقابل استفاده در صنایع غذایی و دارویی و کشاورزی و صنابع بیولوژیکی و بیمارستان ها
 `,
    },
    {
        question: "ضخامت ساندویچ پانل‌های مورد استفاده در کلین روم چند سانتی‌متر می‌باشد؟",
        answer: `ساندویچ پانل‌های اتاق تمیز معمولا در ضخامت 6 سانت تولید می‌شوند ولی امکان تولید برای ضخامت‌های 4 الی 15 سانتی‌متر به دلخواه مشتری میسر می‌باشد. این امکان به مشتری کمک می‌کند تا میزان قابل توجه‌ای از هزینه‌های جانبی را کاهش دهد. `,
    },
    {
        question: "ضخامت ساندويچ پانل ديواره جلو ، سقف و عقب اتاق حمل نوشيدنی چند سانتي متر است؟",
        answer: `4 سانتي متر  ، 6 سانتي متر ، 8 سانتي متر `,
    },
    {
        question: "درب‌های كركره‌ای در اتاق ايزوله حمل نوشيدنی از چه جنسی هستند؟",
        answer: `آلومينيوم ، فولادي ، ورق آلوزينك`,
    },
    {
        question: "ضخامت ساندويچ پانل ديواره جلو ، سقف و عقب اتاق حمل خشكبار چند سانتي متر است؟",
        answer: `4 سانتی متر  ، 6 سانتی متر ، 8 سانتی متر `,
    },
    {
        question: "كفي اتاق حمل خشكبار از كدام نوع نمی‌تواند باشد؟",
        answer: `چوب چند لايی ، كف آهنی آجدار ، كف آهنی صاف `,
    },
    {
        question: "قابلیت نصب كدام تجهيز برای اتاق‌های حمل خشكبار امكان پذير است؟",
        answer: `مهاربند بار ، ريل كف ، قفسه ، يا همه موارد`,
    },
    {
        question: "قابلیت نصب كدام تجهيز برای اتاق‌های ايزوله يخچالی امكان پذير است؟",
        answer: `درب بغل ، پارتيشن متحرك ثابت يا متحرك ، و يا همه موارد`,
    },
    {
        question: "پلیت‌های سردکننده در كدام قسمت‌های اتاق حمل بستنی نصب نمی‌شوند؟",
        answer: `ديواره های كناری ، ديواره جلو ، سقف`,
    },
    {
        question: "ضخامت ورق آلوزينك بيرونی اتاق‌های ايزوله چند ميلی‌متر است؟",
        answer: `0.7 ، 0.5 ، 0.9`,
    },
    {
        question: "ضخامت ورق آلوزينك درونی اتاق‌های ايزوله چند ميلی‌متر است؟",
        answer: `0.5 ، 0.7 ، 0.9`,
    },
    {
        question: "قابليت تنظيم دمای اتاق حمل پروتئين در چه بازه اي قرار دارد؟",
        answer: `20- الي 5+ درجه سانتی‌گراد، 10- الي 8+ درجه سانتی‌گراد ،15- الي 10+ درجه سانتی‌گرادر`,
    },
    {
        question: "قابليت تنظيم دماي اتاق حمل شكلات در چه بازه ای قرار دارد؟",
        answer: `18+ الی 21+ درجه سانتی‌گراد، 2- الي 8+ درجه سانتی‌گراد ،10- الی 10+ درجه سانتی‌گراد`,
    },
    {
        question: "نصب پارتيشن متحرك يا ثابت به چه منظور صورت می‌پذيرد؟",
        answer: `ايجاد چند دمای مختلف در باكس، جلوگيری از سرقت`,
    },
    {
        question: "كدام نوع ورق در كف اتاق‌های ايزوله حمل بار مورد استفاده قرار نمی‌گيرد؟",
        answer: `كف شيب دار ، كف آجدار ، كف صاف`,
    },
    {
        question: "كدام نوع درب در اتاق‌های ايزوله يخچالی مورد استفاده است؟",
        answer: `فايبر گلاس، ساندويچ پانل`,
    },

];

export default data;