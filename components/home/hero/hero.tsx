import { memo } from "react";
import Image from "next/image";

import { homeUrl } from "@/pages";
import Button from "@/components/common/button/button";
import IHero from "@/components/home/hero/interfaces/IHero";
import IHeroProps from "@/components/home/hero/interfaces/IHeroProps";
import Input from "@/components/common/input/input";
import SponsorsImages from "@/components/common/sponsorsImages/sponsorsImages";
import ThemeButton from "@/components/common/themeButton/themeButton";

import styles from "@/components/home/hero/hero.styles";

const renderFeatures = (hero: IHero) => hero.feature.map((item, index) => (
    <span key={index} className={styles.paddingRight5}>
        <Image
            className={styles.inlineBlock}
            src={`${homeUrl}${item.icon.data.attributes.url}`}
            alt={item.text}
            width={item.icon.data.attributes.width}
            height={item.icon.data.attributes.height}
        />
        <span className={styles.perksSpan}>{item.text}</span>
    </span>
));

const Hero = (props: IHeroProps) => {
    const hero = props.hero;

    return (
        <div className={styles.root}>
            <h1 className={styles.h1}>
                {hero.heroHeadingBefore}<br /> {hero.HeroHeadingAfter} <span className={styles.textClearBlue}>
                    {hero.HeroHeadingPayments}
                </span>
                <br />
                {hero.HeroHeadingPlatform}
            </h1>
            <p className={styles.p}>{hero.heroDescription}</p>
            <div>{renderFeatures(hero)}</div>
            <div className={styles.componentsContainer}>
                <div className={styles.smMarginRight5}>
                    <Input type="text" name="email-address" placeholder="Email Address" />
                </div>
                <div className={styles.buttonContainer}>
                    <ThemeButton text="Request a demo" />
                    <Button
                        text="Or chat with us"
                        icon="/assets/images/arrow_right.svg"
                        textColor="white"
                    />
                </div>
            </div>
            <SponsorsImages data={hero.heroSponsors} bgColor={true} />
        </div>
    );
};

export default memo(Hero);