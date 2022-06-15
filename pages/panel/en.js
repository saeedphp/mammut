import HomeBanner from "../../Components/Home/HomeBanner";
import HomeCatalog from "../../Components/Home/HomeCatalog";
import HomeClients from "../../Components/Home/HomeClients";
import HomeFAQ from "../../Components/Home/HomeFAQ";
import HomeNature from "../../Components/Home/HomeNature";
import { NextSeo } from "next-seo";
import WhyProduct from "../../Components/Home/WhyProduct";
import HomeIntro from "../../Components/Home/HomeIntro";
import HomeCover from "../../Components/Home/HomeCover";
import HomeGallery from "../../Components/Home/HomeGallery";
import faqConex from "../../data/faqConex";
import faqPanel from "../../data/faqPanel";
import FaqCard from "../../Components/FaqCard";
import Image from "next/image";

export default function EnPanelHome(props) {

        const prefix = props.prefix;
        const faq = faqPanel;


    return (
        <div className="homePage enPage">
            <NextSeo title="Mammut World Sandwich Panel" />
            <HomeBanner
                persianSlogan={{
                    h1: "",
                }}
                englishSlogan={{ h1: "EXPERIENCE THE BEST! " }}
                bannerImage={"homeBannerPanel.webp"}
                btnTxt="Online Sale"
            />
                <HomeIntro
                    title="Mammut World Sandwich Panel"
                    subTitle="Quality and innovation"
                    p1="Specialists in the world of mammoths, in continuation of innovative chemical technology in production, localized the sandwich panels that were imported from Germany in the first step, and by establishing Mehrsa Shimi Knowledge-Based Company, the raw materials required by this industry, relying on local knowledge and capacities. Have produced domestically, which is a big leap in this area."
                    img= "A4 _2 (1).jpg"
                />
                <HomeIntro
                    title="Application of sandwich panels"
                    subTitle="Quality and innovation"
                    p1="Sandwich panel is a compound material which is produced in the form of sandwiches (layers) that the external layers are made of sheet metal (PPGI, Aluzinc or Aluminum) and also has a core made of polyurethane foam with different densities which is injected between two layers of sheet."
                    p2="This type of material is used to cover the Roof and wall of industrial halls, factories, production halls, warehouses, prefabricated buildings, portable cabins, cold storages, clean rooms, camps, temporary accommodation and etc."
                    p3="Sandwich panels are the best material of their kind in terms of lightness and insulation compared to similar covering materials. In addition to low weight and speed of execution, this product is more economical than other materials and meets all energy storage standards."
                    p4="One of the important features of polyurethane sandwich panels is their insulation against temperature and the lowest temperature transfer coefficient. For example, the temperature transfer coefficient of a 5 cm thick sandwich panel is equivalent to a 172 cm thick brick wall due to its extremely low heat transfer coefficient, which will lead to energy savings and reduced costs in the long run."
                    img= "blogs/sandwich/wall sandwich panel (2).jpg"
                />

            <HomeNature
                title="Protecting the environment is protecting life."
                text="Sandwich panels can be used in different weather conditions and there are no restrictions. Sandwich panels have less waste compared to other materials, which shows the extraordinary value of them.
It also transmits much less heat than traditional materials, which prevents energy waste and conserves natural resources."
            />
            <WhyProduct
                title="Why Mammut World Sandwich Panel?"
                subTitle="Quality and innovation"
                desc="Important features and reasons for using sandwich panels include the following:"
                p1="Quick installation time"
                p2="Thermal insulation and improved anti-flame feature against fire"
                p3="Less water absorption and ambient production against snow, rain and dust."
                p4="Washable and resistant against various chemical materials."
                more="Mammut World Company, by means of latest continuous and automatic machines with an average capacity of 6,500,000 square meters per year is currently active as local market leader which not only have succeeded to meet the needs of the domestic market and national projects, but also had noticeable experiences in the Middle East."
            />
            {/* <WhyPanelSecond /> */}
            <HomeCover imgPath="panel_cover_pure.jpg" />
            <HomeClients
                title="Our Customers"
                subtitle="The greatest have trusted us"
            />
            <HomeCatalog
                text={
                    "See the variety of Mammut World sandwich panels.\n"
                }
                subTitle="Catalog"
                catalog="cataloug.pdf"
                image="/assets/images/homeCatalog.png"
                product="Sandwich"
                btnTxt="Download Catalog"
                catalogTxt="Mammut World Panels Catalog "
            />
            {/* <HomeBlog prefix="conex" /> */}
            {/*<HomeFAQ title="Common Questions" prefix="panel" />*/}
                <div className="homeFAQ">
                        <div className="content">
                                <div className="text">
                                        <div className="title">
                                                <h2>Common Questions</h2>
                                        </div>
                                        <div className="contents">
                                                {faq.map((item, i) => {
                                                        return (
                                                            <FaqCard
                                                                question={item.questionEN}
                                                                answer={item.answerEn}
                                                                key={i}
                                                            />
                                                        );
                                                })}
                                        </div>
                                </div>
                                <div className="picture">
                                        <Image
                                            src="/assets/images/faq.jpg"
                                            alt="پرسش‌های متداول"
                                            layout="fill"
                                        />
                                </div>
                        </div>
                </div>
            <HomeGallery
                title="Our Projects"
                items={[
                    "panel-1.png",
                    "panel-2.jpg",
                    "panel-3.jpg",
                    "panel-4.jpg",
                    "panel-5.jpg",
                    "panel-6.jpeg",
                ]}
                category="Mammut World Sandwich Panels"
            />
        </div>
    );
}

EnPanelHome.layout="L2";
