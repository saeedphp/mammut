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

const TrailerEn = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className="alternateHomePage homePage homeTrailer enPage">
            <NextSeo title="Mammut World Trailers" />
            <HomeBanner />
            <HomeFeature
                title="One of the basic requirement of industrial and economic development in any country is the field of logistics and its transportation infrastructure. Mammut World in the seventies replaced the road transport trailers that were previously made by unconventional and non-standard methods for the first time, with the latest technology in the world. This company, as the first standard trailer producer in the country with a production capacity of more than 50 trailers per day, fabricated and shipped high quality products with new technology. These trailers, which are assembled with the use of axles, brake system, specific valves and other accessories, in addition to reducing fuel consumption and vehicle depreciation, bring high safety for road traffic. These products, which are made in accordance with the latest international regulation, beyond the domestic needs and other countries by traveling on international roads, they introduce Mammut World brand in the industry to the world."
                name="Mammut World Trailers"
                features={["Simultaneously with the advancement of technology and the introduction of new concepts based on IT, smart cars and trailers were formed in Mammut World, which led to the compony establishment that is called Shetab Tech®, one of the other subsidiaries of this company. Implementing and installing intelligent operators on our trailers is the main goal of Shetab Tech®, which makes driving easier and increasing use of digital facilities in the road logistics industry. \n"]}
                imgPath="trailer-intro.webp"
                direction="right"
            />
            <HomeCatalog
                text={
                    "See the variety of Mammut World trailers."
                }
                catalog="trailer-cataloug.pdf"
                product="Semi-trailers Catalog"
                image="/assets/images/trailer-recatalog.webp"
                btnTxt="ِDowmload"
                catalogTxt="Download Mammut world "
                suffixTxt=""
            />
            <HomeContact
                title="Contact us"
                desc="If you have any comments or questions or more information in general, feel free to contact us."
                direction="left"
                imgPath="contact-trailer.jpg"
                btnLink="/"
                contactTxt="Contact Us"
            />
            <div className="trailerTitle">
                <p>
                    Production Stages
                </p>
                <p>
                    Experience the Best
                </p>
            </div>
            <HomeFeatured
                name="Engineering and Designing the Products"
                features={["First, to produce a trailer in Mammut World, product design is done, which includes Feasibility Study, Engineering Design, Research and Development and Process Engineering."]}
                /*imgPath="lights.jpeg"*/
                direction="right"
                items={[
                    "product-1.jpg",
                    "product-2.jpg",
                ]}
            />
            <HomeFeatured
                name="Semi-Finish Products "
                features={["This stage includes all machining and die (manufacturing) based on the technical drawings. \n"]}
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
                    "piece-8.webp",
                ]}
            />
            <HomeFeatured
                name="Tool-Box Products"
                features={["In this stage, Tool-Box is fabricated and assembled in standard sizes with powder coating process based on the technical drawings."]}
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
                name="Assembly Line for Chassis"
                features={["In this stage, the chassis and structure are assembled by specific welding process, special fixture and automatic devices."]}
                direction="left"
                items={[
                    "shasi-1.jpg",
                    "shasi-2.jpg",
                    "shasi-3.jpg",
                ]}
            />

            <div className={`alternateHomeFeatured`}>
                <div className={`contents ${styles['img-row']}`}>
                    <div style={{direction: 'rtl'}} className="img-container">
                        <div className={`picture trailerImg`} style={{width: '50%'}}>
                            <Image
                                src={"/assets/images/subcategory.jpg"}
                                alt="سيستم زيربندی و محور"
                                layout="fill"
                            />
                        </div>
                        <div style={{direction: 'ltr',textAlign: 'left'}} className="left-sec" >
                            <h2 className="trailer-desc">
                                Painting Process- Surface Preparation
                            </h2>
                            <p>
                                One of the steps related to the Painting of the product is the shot Blasting process according to SA 2.5 / Epoxy sub-coat.
                                Shot Blasting is ideal for removing paint, deburring, eradicating sand from castings, and provides an excellent key for painting. All of processes are carried out by skilled and trained engineers.
                                <br />
                                Finally:
                            </p>
                            <ul>
                                <li>
                                    • Polyurethane coating as per customer requirement
                                </li>
                                <li>
                                    • Color type According to RAL system
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`alternateHomeFeatured`}>
                <div className={`contents ${styles['img-row']}`}>
                    <div style={{direction: 'rtl'}} className="img-container">
                        <div style={{direction: 'ltr',textAlign: 'left'}} className="left-sec" >
                            <h2 className="trailer-desc">
                                Assembly Line Production
                            </h2>
                            <p>
                                In this stage, all assembly parts on the product are installed as follows:
                            </p>
                            <ul>
                                <li>
                                    • Braking system
                                </li>
                                <li>
                                    • Electrical system
                                </li>
                                <li>
                                    • Plywood Parts
                                </li>
                                <li>
                                    • Curtain (Polymer) Parts
                                </li>
                                <li>
                                    • Wheel alignment test
                                </li>
                                <li>
                                    • Mudguard parts
                                </li>
                                <li>
                                    • End of line test
                                </li>
                                <li>
                                    • Rolling brake test
                                </li>
                                <li>
                                    • Accessories
                                </li>
                            </ul>
                            <br/>
                            <div className={`read-more ${open === true ? 'active' : null}`}>
                                <p>
                                    The electro-pneumatic control system replaces the purely pneumatic control of a conventional braking system by using the ECU to control solenoids integrated in the brake module. Therefore, the functions of individual components in an otherwise complicated brake control system can be functionally combined and provide enhanced pressure control characteristics.
                                </p>
                                <p>
                                    ABS prevents locking of the wheels when braking, while ASR (traction control system TCS) ensures that, when accelerating, the wheels on the drive axle do not spin, thereby ensuring optimal traction in all driving conditions.
                                </p>
                                <p>
                                    Roll-over accidents normally occur when the lateral acceleration acting upon a vehicle exceeds a vehicle-specific critical limit. For example, the lateral acceleration upper limit depends on the height of the center of gravity, which can vary not only from one vehicle to the next, but also in the same vehicle depending on the load and the loading state. Moreover, the vehicle speed and the geometric data of each vehicle have a significant effect on the limit value of the lateral acceleration. In vehicles with a fairly high center of gravity, such as some tanker vehicles, the critical roll-over lateral acceleration is lower than with a flatbed trailer that is used for transporting steel plates. However, the vehicle speed when cornering is a critical element as the developed lateral acceleration varies with the square of the vehicle speed therefore small changes in speed have a major impact on lateral acceleration. Often in semi-trailer combinations it is difficult, if not impossible, for the driver to be aware of how close the trailer is to roll-over. This is relevant when considering the characteristics of modern towing vehicles that provide high levels of driver comfort. Even if the driver did become aware of a potential roll-over it is very likely that it would be too late for him to intervene in time to reduce the vehicle speed enough to avoid an accident.
                                </p>
                                <p>
                                    Finally, this system reduces the uniform consumption and abrasion of the Wear pads by distributing the braking force and ultimately reduces costs.
                                </p>
                            </div>
                            <button className="readMore-btn" onClick={() => toggle()}>
                                {open === true ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                        <div className={`picture trailerImg`} style={{width: '50%'}}>
                            <Image
                                src={"/assets/images/lightning.jpg"}
                                alt="سيستم زيربندی و محور"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`alternateHomeFeatured`}>
                <div className={`contents ${styles['img-row']}`}>
                    <div style={{direction: 'rtl'}} className="img-container">
                        <div style={{direction: 'ltr',textAlign: 'left', width: '100%'}} className="left-sec" >
                            <h2 className="trailer-desc">
                                Final Control
                            </h2>
                            <p>
                                In this Stage , Color and all the accessories are controlled by quality control specialists.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`alternateHomeFeatured`}>
                <div className={`contents ${styles['img-row']}`}>
                    <div style={{direction: 'rtl'}} className="img-container">
                        <div style={{direction: 'ltr',textAlign: 'left', width: '100%'}} className="left-sec" >
                            <h2 className="trailer-desc">
                                Brake System Capabilities
                            </h2>
                            <p>
                                The Braking System used in Mammut World has the following capabilities:
                            </p>
                            <ul>
                                <li>
                                    ⦁	EBS braking system (Electronic braking system)

                                </li>
                                <li>
                                    ⦁	ABS (anti-lock braking system)
                                </li>
                                <li>
                                    ⦁	RSP (Roll Stability Control).
                                </li>
                            </ul>
                            <p>
                                The electro-pneumatic control system replaces the purely pneumatic control of a conventional braking system by using the ECU to control solenoids integrated in the brake module. Therefore, the functions of individual components in an otherwise complicated brake control system can be functionally combined and provide enhanced pressure control characteristics.
                            </p>
                            <p>
                                ABS prevents locking of the wheels when braking, while ASR (traction control system TCS) ensures that, when accelerating, the wheels on the drive axle do not spin, thereby ensuring optimal traction in all driving conditions.
                            </p>
                            <p>
                                Roll-over accidents normally occur when the lateral acceleration acting upon a vehicle exceeds a vehicle-specific critical limit. For example, the lateral acceleration upper limit depends on the height of the center of gravity, which can vary not only from one vehicle to the next, but also in the same vehicle depending on the load and the loading state. Moreover, the vehicle speed and the geometric data of each vehicle have a significant effect on the limit value of the lateral acceleration. In vehicles with a fairly high center of gravity, such as some tanker vehicles, the critical roll-over lateral acceleration is lower than with a flatbed trailer that is used for transporting steel plates. However, the vehicle speed when cornering is a critical element as the developed lateral acceleration varies with the square of the vehicle speed therefore small changes in speed have a major impact on lateral acceleration. Often in semi-trailer combinations it is difficult, if not impossible, for the driver to be aware of how close the trailer is to roll-over. This is relevant when considering the characteristics of modern towing vehicles that provide high levels of driver comfort. Even if the driver did become aware of a potential roll-over it is very likely that it would be too late for him to intervene in time to reduce the vehicle speed enough to avoid an accident.
                            </p>
                            <p>
                                Finally, this system reduces the uniform consumption and abrasion of the Wear pads by distributing the braking force and ultimately reduces costs.
                            </p>
                            <br/>
                            <div className={`read-more ${open === true ? 'active' : null}`}>
                                <p>
                                    The electro-pneumatic control system replaces the purely pneumatic control of a conventional braking system by using the ECU to control solenoids integrated in the brake module. Therefore, the functions of individual components in an otherwise complicated brake control system can be functionally combined and provide enhanced pressure control characteristics.
                                </p>
                                <p>
                                    ABS prevents locking of the wheels when braking, while ASR (traction control system TCS) ensures that, when accelerating, the wheels on the drive axle do not spin, thereby ensuring optimal traction in all driving conditions.
                                </p>
                                <p>
                                    Roll-over accidents normally occur when the lateral acceleration acting upon a vehicle exceeds a vehicle-specific critical limit. For example, the lateral acceleration upper limit depends on the height of the center of gravity, which can vary not only from one vehicle to the next, but also in the same vehicle depending on the load and the loading state. Moreover, the vehicle speed and the geometric data of each vehicle have a significant effect on the limit value of the lateral acceleration. In vehicles with a fairly high center of gravity, such as some tanker vehicles, the critical roll-over lateral acceleration is lower than with a flatbed trailer that is used for transporting steel plates. However, the vehicle speed when cornering is a critical element as the developed lateral acceleration varies with the square of the vehicle speed therefore small changes in speed have a major impact on lateral acceleration. Often in semi-trailer combinations it is difficult, if not impossible, for the driver to be aware of how close the trailer is to roll-over. This is relevant when considering the characteristics of modern towing vehicles that provide high levels of driver comfort. Even if the driver did become aware of a potential roll-over it is very likely that it would be too late for him to intervene in time to reduce the vehicle speed enough to avoid an accident.
                                </p>
                                <p>
                                    Finally, this system reduces the uniform consumption and abrasion of the Wear pads by distributing the braking force and ultimately reduces costs.
                                </p>
                            </div>
                            <button className="readMore-btn" onClick={() => toggle()}>
                                {open === true ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`alternateHomeFeatured`}>
                <div className={`contents ${styles['img-row']}`}>
                    <div style={{direction: 'rtl'}} className="img-container">
                        <div style={{direction: 'ltr',textAlign: 'left', width: '100%'}} className="left-sec" >
                            <h2 className="trailer-desc">
                                Axle System
                            </h2>
                            <p>
                                The axles used in the Mammut world are from two world-renowned brands as follows:
                            </p>
                            <ul>
                                <li>
                                    1-SAF
                                </li>
                                <li>
                                    2-BPW
                                </li>
                            </ul>
                            <p>
                                Both Brands are globally 	leading manufacturer of intelligent running gear system for semi-trailers.
                            </p>
                            <p>
                                All 9t air suspension system with optimized Disc/Drum brake technology and an exemplary price-performance ratio.
                            </p>
                            <p>
                                The unique design principle prolongs the service life of the pads and the disc and, at the same time, achieves:
                            </p>
                            <ul>
                                <li>
                                    ⦁	more km – less wear
                                </li>
                                <li>
                                    ⦁	more planning reliability
                                </li>
                                <li>
                                    ⦁	more efficiency
                                </li>
                                <li>
                                    ⦁	more economic efficiency
                                </li>
                            </ul>
                            <p>
                                Perfectly thought-out:ِ drum brake combines proven components into a successful system. Efficient, profitable and virtually maintenance-free – the SAF INTRADRUM is a winner with its powerful and precisely matched components and guarantees planning reliability right from the first kilometer.
                            </p>
                            <p>
                                SAF-HOLLAND® and BPW® offers pioneering 9-t air suspension systems with special product properties – purposefully optimized for specific transport requirements and challenging transport infrastructure.
                            </p>
                            <ul>
                                <li>
                                    ⦁	Significantly lower heat transfer due to small contact areas between the INTEGRAL disc and wheel hub
                                </li>
                                <li>
                                    ⦁	Targeted long-term corrosion protection also on hub caps and screw connections, wheel bolts and nut
                                </li>
                                <li>
                                    ⦁	The hub unit is a compact hub and bearings unit. It is fully factory adjusted and encapsulated the SAF/BPW
                                </li>
                                <li>
                                    ⦁	With 15 large radiator-like ventilation cross-sections in the wheel flange, the INTEGRAL achieves at least 60% more ventilation cross-section compared to a design with closed wheel flange – depending on the size of the openings in the fitted wheels
                                </li>
                                <li>
                                    ⦁	The specific shape of the flange disc made of a special alloy ensures not
                                    only exact concentricity under all driving conditions – it also reduces
                                    the umbrella effect and therefore prolongs the service life of the brake
                                    disc and pads.
                                </li>
                                <li>
                                    ⦁	Reduce the heat transfer from the disc to the hub unit and contribute to a thermal discharge of the complete head unit
                                </li>
                                <li>
                                    ⦁	Shock absorber with damping characteristics designed for use in challenging road conditions
                                </li>
                                <li>
                                    ⦁	Internal Air-Vent ventilation channels, cool the brake disc, avoid heat accumulation and support purposefully a low temperature management in the overall system
                                </li>
                                <li>
                                    ⦁	Easier maintenance
                                </li>
                                <li>
                                    ⦁	High chemical resistance
                                </li>
                                <li>
                                    ⦁	less fuel consumption
                                </li>
                                <li>
                                    ⦁	Thanks to the active cathodic corrosion protection combined with the zinc coating, the axle’s base material still remains fully protected – even if small areas of minor damage do appear on the surface over time.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`alternateHomeFeatured`}>
                <div className={`contents ${styles['img-row']}`}>
                    <div style={{direction: 'rtl'}} className="img-container">
                        <div style={{direction: 'ltr',textAlign: 'left', width: '100%'}} className="left-sec" >
                            <h2 className="trailer-desc">
                                Lighting System
                            </h2>
                            <p>
                                The lighting system of Mammut World trailers is provided by world-renowned brand such as ASPOCK® according to the ADR international standard.
                            </p>
                            <p>
                                The most important features include the following:
                            </p>
                            <ul>
                                <li>
                                    ⦁	Uniform light pattern plus a dynamic indicator with a sequential light
                                </li>
                                <li>
                                    ⦁	High IP protection classes
                                </li>
                                <li>
                                    ⦁	Anti-spark
                                </li>
                                <li>
                                    ⦁	Durability
                                </li>
                            </ul>
                            <p>
                                Supply Voltage is 24 volts and includes 7 pin sockets (in acc. with ISO 1185 and ISO3731) and 15 pin sockets (in acc. with ISO 12098) that covers the following:
                            </p>
                            <ul>
                                <li>
                                    ⦁	Front end-outline marker lamp*
                                </li>
                                <li>
                                    ⦁	Front reflex reflector
                                </li>
                                <li>
                                    ⦁	Front position (side) lamp
                                </li>
                                <li>
                                    ⦁	Side reflex reflector
                                </li>
                                <li>
                                    ⦁	Side-marker lamp
                                </li>
                                <li>
                                    ⦁	Direction indicator lamps
                                </li>
                                <li>
                                    ⦁	Rear tail lamp
                                </li>
                                <li>
                                    ⦁	Stop lamp
                                </li>
                                <li>
                                    ⦁	Reversing light
                                </li>
                                <li>
                                    ⦁	Rear fog lamp
                                </li>
                                <li>
                                    ⦁	End-outline marker lamp
                                </li>
                                <li>
                                    ⦁	Rear reflex reflector
                                </li>
                                <li>
                                    ⦁	Registration plate lamp
                                </li>
                                <li>
                                    ⦁	Rear position (side) lamp
                                </li>
                                <li>
                                    ⦁	High-mounted stop lamp
                                </li>
                            </ul>
                            <p>
                                This system is installed in accordance with international ECE-R48 standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <HomeGallery
                title="Our Projects"
                items={[
                    "trailer-7.jpg",
                    "trailer-2.jpg",
                    "trailer-3.jpg",
                    "trailer-4.jpg",
                    "trailer-5.jpg",
                    "trailer-6.jpg",
                ]}
                category="Mammut World Trailers"
            />
            <HomeClients
                title="Our Customers"
                subtitle="The greatest have trusted us"
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

TrailerEn.layout = "L2";
export default TrailerEn;
