import { memo } from "react";
import Image from "next/image";

import { homeUrl } from "@/pages";
import IStoriesCarouselProps from "@/components/home/stories/interfaces/IStoriesCarouselProps";
import IStoriesProps from "@/components/home/stories/interfaces/IStoriesProps";

import styles from "@/components/home/stories/stories.styles";

const renderStories = (stories: IStoriesCarouselProps[]) => stories.map((item, index) => {
    const { author, title, description, logo } = item;

    return (
        <div className={styles.carouselItem} key={index} >
            <div className={styles.itemContainer}>
                <Image
                    src={`${homeUrl}${logo.data.attributes.url}`}
                    alt={title}
                    width={logo.data.attributes.width}
                    height={logo.data.attributes.height}
                />
                <div className={styles.paddingLeft5}>
                    <h3 className={styles.carouselItemH3}>{title}</h3>
                    <p className={styles.carouselItemP}>{author}</p>
                </div>
            </div>
            <p className={styles.carouselDesc}>{description}</p>
        </div>
    );
});

const Stories = (props: IStoriesProps) => {
    const stories = props.stories;

    return (
        <section className={styles.root}>
            <h1 className={styles.rootH1}>
                {stories.heading} <span className={styles.textClearBlue}>{stories.headingAfter}</span>
            </h1>
            <p className={styles.rootP}>{stories.description}</p>
            <div className={styles.carouselContainer}>
                {renderStories(stories.stories)}
            </div>
        </section>
    );
};

export default memo(Stories);