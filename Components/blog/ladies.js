import {Fragment} from "react";
import ReactPlayer from "react-player";
import styles from "../trailer/home-feature.module.css";

const Ladies = () => {
    return (
      <Fragment>
          <p>
              یکی از دستاوردهای ما در دنيای ماموت، ایجاد بستری امن برای بانوانی سخت کوش، آینده نگر و متعهد به کار است تا بتوانیم در کنار هم در مسیر بهترین شدن و یک پیشرفت بی انتها، قدم‌های موثری برداریم.
          </p>
          <p>
              تا به امروز که دو سال از حضور ارزنده بانوان باغیرت در دنيای ماموت میگذرد، بیش از 50 بانوی توانمند در خط مقدم تولید کارخانه، خالصانه و با تمرکز در کار، مشغول به فعالیت هستند. این عزیزان که اغلب سرپرست خانوار می‌باشند بعد از گذراندن دوره‌های آموزشی و کسب مهارت، تخصص لازم را در زمانی کوتاه به دست آوردند و با دقت بالا شروع به فعالیت در خطوط تولید دنیای ماموت کردند.
          </p>
          <p>
              اینچنین شد که این بانوان تلاشگر توانستند با قدم‌های هدفمند خود بهترین‌ها را در دنیای ماموت به ارمغان آورند.
          </p>
         <h2>
             دنيای ماموت دنیایی برای بهترین شدن
         </h2>
          <div style={{marginTop: '50px'}} className={styles.video_wrapper}>
              <ReactPlayer className={styles.video} controls={true} playing={false} url="https://mammutworld.faramoujwp.ir/wp-content/uploads/2022/06/خانم-هاي-توليد-10.mp4" />
          </div>
      </Fragment>
    );
};

export default Ladies;