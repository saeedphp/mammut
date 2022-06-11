import Head from "next/head";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";
import {allMenus} from "../data/main-menu";

export default function LandingPage() {

    const menus = allMenus();

   /* useEffect(() => {
        document.querySelector(".contactCollapse h4").onclick = () => {
            document.querySelector(".contactCollapse").classList.toggle("opened");
        };
    });*/
    return (
        <div className="landingPage">
            <Head>
                <title>دنیای ماموت </title>
                <meta name="google-site-verification" content="rY1G76_mdE_njK0p_i60phZLa8ZwDx0kpx_9AeaHUgE" />
                <meta name="description" content="Mammut World WebSite"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section className="header" id="top">
                <div className="logo">
                    <Image
                        src={require("../public/assets/images/logoWhite.png")}
                        alt="MAMMUT"
                        layout="fill"
                    />
                </div>
                <div className="left">
                    <ul className="main_menu">
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <Link href={menu.link}>
                                        <a>
                                            {menu.title}
                                            {menu.children ? <i className="fa fa-angle-down"></i> : null}
                                        </a>
                                </Link>
                                {menu.children && <ul>
                                    {menu.children.map((item, index) => (
                                        <li key={index}>
                                            <Link href={`/${item.link}`}>
                                                {item.label}
                                            </Link>
                                            {item.links && <div>
                                                {item.links.map((item2, index) => (
                                                        <a key={item2.index} href={`tel: ${item2.link}`}>
                                                            {item2.title}
                                                        </a>
                                                ))}
                                            </div>}
                                        </li>
                                    ))}
                                </ul>}
                            </li>
                        ))}
                    </ul>
                    {/*<Link href="/about">درباره ما</Link>
                    <div className="contactCollapse">

                        <h4>
                            درباره ما
                        </h4>

                        <ul>
                            <li>
                                <Link href="/">
                                    <a>
                                        مسئولیت اجتماعی
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contactCollapse">
                        <h4>ارتباط با ما</h4>
                        <ul>
                            <li>
                                <label>واحد فروش</label>
                                <a href="tel:0214500">021-4500</a>
                                <a href="tel:0264500">026-4500</a>
                            </li>
                            <li>
                                <label>واحد منابع انسانی</label>
                                <a href="tel:02644525490">026-44525490</a>
                            </li>
                            <li>
                                <label>واحد مالی</label>
                                <a href="tel:02644526514">026-44526514</a>
                            </li>
                            <li>
                                <label>واحد بازرگانی</label>
                                <a href="tel:02644523821">026-44523821</a>
                            </li>
                            <li>
                                <label>واحد حقوقی</label>
                                <a href="tel:02644523712">026-44523712</a>
                            </li>
                        </ul>
                    </div>
                    <Link href="/panel/blogs">اخبار و مقالات</Link>
                    <Link href="/faq">سوالات متداول</Link>
                    <a href="https://mammutco.adilar.com/">استخدام</a>*/}
                </div>
            </section>

            <section className="features">
                <div className="container-fluid">
                    <div id="departments">
                        <div className="trailer overCard">
                            <a href="./trailer">
                                <div className="card">
                                    <div className="picture">
                                        <Image
                                            src={"/assets/images/landing/cardTrailer.webp"}
                                            layout="fill"
                                            alt="تریلر"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>تریلر</h4>
                                        <h4> SEMI-TRAILER </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="sandwich overCard">
                            <a href="./panel">
                                <div className="card">
                                    <div className="picture">
                                        <Image
                                            src={"/assets/images/landing/cardPanel.png"}
                                            layout="fill"
                                            alt="پانل"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>ساندویچ پانل </h4>
                                        <h4> SANDWICH PANEL </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="isolate overCard">
                            <a href="https://mammutworld.faramoujwp.ir/isolated-rooms/">
                                <div className="card">
                                    <div className="picture">
                                        <Image
                                            src={"/assets/images/landing/cardIsolate.png"}
                                            layout="fill"
                                            alt="اتاق‌های ایزوله"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4> اتاق‌های ایزوله </h4>
                                        <h4> ISOLATED ROOMS </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="conex overCard">
                            <a href="https://mammutworld.faramoujwp.ir/conex/">
                                <div className="card">
                                    <div className="picture">
                                        <Image
                                            src={"/assets/images/landing/cardConex.png"}
                                            layout="fill"
                                            alt="کانکس"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>کانکس </h4>
                                        <h4> CONEX </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="continer overCard">
                            <a href="https://mammutworld.faramoujwp.ir/container/">
                                <div className="card">
                                    <div className="picture">
                                        <Image
                                            src={"/assets/images/landing/cardContiner.png"}
                                            layout="fill"
                                            alt="کانتینر"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4> کانتینر </h4>
                                        <h4>CONTAINER </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

LandingPage.layout="L1";
