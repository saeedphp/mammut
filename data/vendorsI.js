const data = [
    {
      id: "1",
      name: "حسین زارعی ",
      state: "خراسان ",
      address:
        "خراسان  مشهد خیابان بهار چهارراه لشگر پلاك بزرگراه آیت الله سعیدی، میدان نماز اسلامشهر شهرك كامیونداران بلوار امام حسین (ع) پسبزوار شهرک صنعتی خاوران روبروی گواه پ ۲۶ طبقه همكف",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:05744440705 ", value: "057-44440705" },
    },
  
    {
      id: "2",
      name: "محمد كریمی",
      state: "كرمان",
      address: "جاده تهران نرسیده به بلوار حجاج بلوار آیت ا... هاشمی رفسنجانی فجر طبقه همكف مجتمع",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:03432614363", value: "034-32614363" },
    },
    {
      id: "3",
      name: "محمدحسین برومند",
      state: "تهران",
      address: "شهرک كامیون داران بلوار موسی ابن جعفر (ع) پ ۱۷ نمایندگی سایپادیزل كد ۲۷",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:02155262053", value: "021-55262053" },
    },
    {
      id: "4",
      name: "سپید خودرو",
      state: "گیلان",
      address: "منطقه آزاد انزلی مجتمع تجاری ستاره",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:9113447462 ", value: "9113447462" },
    },
    {
      id: "5",
      name: "امیر جلالی فرد",
      state: "گیلان",
      address:
        "رشت بلوار امام رضا )ع( بالاتر از پاكت سازی جنب نمایندگی هیوندا",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:01333872423", value: "013-33872423" },
    },
    {
      id: "6",
      name: "خدانظر راستی زاده",
      state: "بوشهر",
      address: "كیلومتر ۱۱ جاده برازجان به شیراز جنب پلیس راه ",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:07734245049", value: "077-34245049" },
    },
    {
      id: "7",
      name: "بهزاد عیسی خانی",
      state: "آذربایجان شرقی",
      address: "بناب كیلومتر ۲ جاده ملكان جنب زیرگذر",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:9143215293", value: "9143215293" },
    },
    {
      id: "8",
      name: "مرتضی قاسمی زاده",
      state: "یزد",
      address:
        "یزد سرچشمه زارچ باند كندرو نمایندگی ماموت",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:03535279704", value: "035-35279704" },
    },
    {
      id: "9",
      name: "محمد گرمابی",
      state: "خراسان ",
      address:
        "نیشابور بلوار رسالت غربی  روبروی رسالت غربی ۶",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:051-42347182", value: "051-42347182" },
    },
    {
      id: "10",
      name: "ولی اله مختاری",
      state: "اصفهان",
      address: "شاهپور جدید خ مشیرالدوله شرقی خ مهارت خیابان پولاد نمایندگی آمیكو",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:03133853180 ", value: "031-33853180" },
    },
    {
      id: "11",
      name: "ابولفضل مشایخی",
      state: "مركزی",
      address: "اراك كیلومتر 9 جاده تهران ",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:08633544292", value: "086-33544292" },
    },
    {
      id: "12",
      name: "احمد مطلب زاده",
      state: "آذربایجان غربی",
      address: "منطقه آزاد ماكو بلوار شهدای آذربایجان نمایندگی ارس خودرو",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:04434352304", value: "044-34352304" },
    },
    {
      id: "13",
      name: "ثمین خودرو خراسان",
      state: "خراسان ",
      address: " مشهد شهرك صنعتی طرق بعد از پایانه بار انتهای كوچه سی متری",
      map: "https://maps.google.com/maps?q=Mammut%20Industrial%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: { href: "tel:05133935060", value: "051-33935060" },
    },
    

  ];
  
  export default data;
  