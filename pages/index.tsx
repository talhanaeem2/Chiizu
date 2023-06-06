import { memo } from "react";

import DataLoader from "@/components/home/dataLoader/dataLoader";
import Footer from "@/components/common/footer/footer";
import Head from "@/components/common/head/head";
import Hero from "@/components/home/hero/hero";
import IPost from "@/types/interfaces/IPost";
import Navbar from "@/components/common/navbar/navbar";
import Payments from "@/components/home/payments/payments";
import Stories from "@/components/home/stories/stories";

export const apiUrl = process.env.API_URL as string;
const collectionType = "homepages";

type IKeyword = string | { name: string; populate: string[] };

const keywords = [
  "head",
  { name: "storiesComponent", populate: ["stories"] },
  { name: "hero", populate: ["feature", "heroSponsors"] },
  { name: "paymentSection", populate: ["paymentSponsors", "paymentOptions"] },
  { name: "footer", populate: ["socials", "cities"] },
];

const generateUrl = (keyword: IKeyword) => {
  if (typeof keyword === "string") {
    return `populate[${keyword}][populate]=*`;
  } else if (typeof keyword === "object") {
    const { name, populate } = keyword;
    const subPopulate = populate.map((subKeyword) =>
      `populate[${name}][populate][${subKeyword}][populate]=*`).join("&");

    return subPopulate;
  }

  return "";
};

const url = keywords.map(generateUrl).join("&");

const root = "mt-[30px] flex justify-center items-center flex-col";

const poppins = "font-poppins";

const styles = {
  root,
  poppins
};

const Main = ({ head, hero, paymentSection, storiesComponent, footer }: IPost) => {
  if (!head || !hero || !paymentSection || !storiesComponent || !footer) {
    return (
      <div className={styles.root}>
        <h1>404</h1>
        <p>Page not found.</p>
      </div>
    );
  }

  return (
    <section className={styles.poppins}>
      <Head head={head} />
      <Navbar />
      <Hero hero={hero} />
      <Payments payments={paymentSection} />
      <Stories stories={storiesComponent} />
      <Footer footer={footer} />
    </section>
  );
};

export const getStaticProps = async () => {
  try {
    const receivedPosts = await DataLoader(apiUrl, collectionType, url);

    return {
      props: { ...receivedPosts.data[0].attributes },
    };
  } catch (error) {
    return {
      props: { error: true },
    };
  }
};

export const homeUrl = process.env.HOME_URL;
export default memo(Main);