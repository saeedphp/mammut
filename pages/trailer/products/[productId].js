import { useRouter } from "next/router";
import products from "../../../data/productsT";
import { NextSeo } from "next-seo";
import Usage from "../../../Components/Alternate/Product/Usage";
import Gallery from "../../../Components/Alternate/Product/Gallery";
import Blocks from "../../../Components/Alternate/Product/Blocks";
import Attributes from "../../../Components/Alternate/Product/Attributes";
import { useEffect, useState } from "react";
import Specs from "../../../Components/Alternate/Product/Specs";
import Video from "../../../Components/Alternate/Product/Video";
import PageTitle from "../../../Components/PageTitle";
import Comments from "../../../Components/Alternate/Product/Comments";
import HomeGallery from "../../../Components/Home/HomeGallery";
import Intro from "../../../Components/Alternate/Product/Intro";
import IntroImage from "../../../Components/Alternate/Product/IntroImage";

function ProductDetailPage(props) {
  const router = useRouter();
  const parent = props.parent;
  const children = props.children;
  const [currProduct, setProduct] = useState(
    children.length == 0 ? parent : children[0]
  );
  const { productId } = router.query;

  if (children.length == 0) {
    return (
      <div className="alternateProductDetailPage productDetailPage">
        <NextSeo title={parent.name} />
        {/*<PageTitle title={parent.name} />*/}
        <IntroImage
            image={parent.image}
        />
        <Intro
            title={currProduct.intro.title}
            description={currProduct.intro.description}
            image={currProduct.intro.image}
            links={currProduct.intro.links}
        />
        <Video name={parent.name} videoPath={parent.video} type="link" />
        <div className="contents">
          <Specs specs={currProduct.specs} />
          <Gallery items={currProduct.pictures} />
          {/*{currProduct.attributes.length > 0 && (
            <Attributes items={currProduct.attributes} />
          )}*/}
          {/*<Usage items={currProduct.usage} />
          <Comments />
          {currProduct.catalog != "" && (
            <Blocks catalog={currProduct.catalog} />
          )}*/}
        </div>
      </div>
    );
  } else if (parent != null) {
    return (
      <div className="alternateProductDetailPage">
        <NextSeo title={parent.name} />
        {/*<PageTitle title={parent.name} />*/}
        <IntroImage
            image={parent.introImage}
        />
        <Intro
            title={parent.intro.title}
            description={parent.intro.description}
            image={parent.intro.image}
            links={parent.intro.links}
        />
        <Video name={parent.name} videoPath={parent.video} type="link" />
        <div className="types">
          <ul>
            {children.map((child, i) => {
              return (
                <li
                  key={i}
                  onClick={() => setProduct(child)}
                  className={currProduct.name == child.name ? "active" : ""}
                >
                  {child.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contents">
          <Specs specs={currProduct.specs} />
          <Gallery items={currProduct.pictures} />
          {/*{currProduct.attributes.length > 0 && (
            <Attributes items={currProduct.attributes} />
          )}*/}

          {/*<Usage items={currProduct.usage} />
          <Comments />
          {currProduct.catalog != "" && (
            <Blocks catalog={currProduct.catalog} />
          )}*/}
        </div>
      </div>
    );
  }
  return <div className="notFound"></div>;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "edge",
        },
      },
      {
        params: {
          productId: "compress",
        },
      },
      {
        params: {
          productId: "tanker",
        },
      },
      {
        params: {
          productId: "curtain",
        },
      },
      {
        params: {
          productId: "bottom",
        },
      },
      {
        params: {
          productId: "fridge",
        },
      },
      {
        params: {
          productId: "blade",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const params = { context };
  const productId = context.params.productId;
  let parent = null;
  let children = [];
  for (let product of products) {
    if (product.id == productId) {
      parent = product;
      for (let other of products)
        if (other.parent == product.id) {
          children.push(other);
        }
    }
  }

  return {
    props: {
      parent: parent,
      children: children,
    },
  };
}

ProductDetailPage.layout="L1";
export default ProductDetailPage;
