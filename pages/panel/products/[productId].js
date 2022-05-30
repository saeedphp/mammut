import {useRouter} from "next/router";
import products from "../../../data/products";
import {NextSeo} from "next-seo";
import Usage from "../../../Components/Alternate/Product/Usage";
import Gallery from "../../../Components/Alternate/Product/Gallery";
import Blocks from "../../../Components/Alternate/Product/Blocks";
import Attributes from "../../../Components/Alternate/Product/Attributes";
import {useEffect, useState} from "react";
import Specs from "../../../Components/Alternate/Product/Specs";
import Video from "../../../Components/Alternate/Product/Video";
import PageTitle from "../../../Components/PageTitle";
import Comments from "../../../Components/Alternate/Product/Comments";
import FAQ from "../../../Components/ProductPanel/PanelFAQ";
import PanelIntro from "../../../Components/ProductPanel/PanelIntro";
import PageHeader from "../../../Components/ProductPanel/PageHeader";
import WhyMammut from "../../../Components/ProductPanel/WhyMammut";
import PanelType from "../../../Components/ProductPanel/PanelType";
import PanelAttr from "../../../Components/ProductPanel/PanelAttr";
import PanelImage from "../../../Components/ProductPanel/PanelImage";
import PanelSpec from "../../../Components/ProductPanel/PanelSpec";
import PanelFAQ from "../../../Components/ProductPanel/PanelFAQ";
import PanelGallery from "../../../Components/ProductPanel/PanelGallery";
import VendorsLogin from "../vendors/panel";
import ProductLink from "../../../Components/ProductPanel/ProductLink";


function ProductDetailPage() {

    const router = useRouter();
    const {productId} = router.query;
    let currProduct = null;
    for (let product of products) {
        if (product.id == productId) {
            currProduct = product;
            return (
                <div className="alternateProductDetailPage">
                    <NextSeo title={currProduct.name}/>
                    {/*<div className="pageTitle panel pageheader" style={{background: `url(/assets/images/products/panel/${currProduct.banner})`}}>
            <h1>{currProduct.name}</h1>
            <h6>{currProduct.summary}</h6>
          </div>*/}
                    <PageHeader
                        name={currProduct.name}
                        banner={currProduct.banner}
                    />
                    <ProductLink />
                    <PanelIntro
                        title={currProduct.intro.title}
                        desc={currProduct.intro.desc}
                        image={currProduct.intro.image}
                    />
                    <WhyMammut
                        title={currProduct.whyMammut.title}
                        desc={currProduct.whyMammut.desc}
                        image={currProduct.whyMammut.image}
                    />
                    {currProduct.video != null && (
                        <Video
                            videoTitle={currProduct.videoTitle}
                            name={currProduct.name}
                            videoPath={currProduct.video}
                            type="link"
                        />
                    )}
                    {currProduct.gallery ? (
                        <PanelGallery
                            gallery={currProduct.gallery}
                        />
                    ) : null}
                    <PanelType
                        typeTitle={currProduct.typeTitle}
                        type={currProduct.type}
                    />
                    <PanelImage
                        panelImage={currProduct.panelImage}
                    />
                    <div className="contents">
                        <PanelAttr items={currProduct.attributes}/>
                        <PanelSpec specs={currProduct.specs}/>
                        {/*<PanelFAQ data={currProduct.faq} name={currProduct.name}/>*/}
                        {/*<Comments />*/}
                    </div>
                </div>
            );
        }
    }
    return <div className="notFound"></div>;
}

ProductDetailPage.layout="L1";
export default ProductDetailPage;
