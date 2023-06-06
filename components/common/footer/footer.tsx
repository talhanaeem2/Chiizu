import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { homeUrl } from "@/pages";
import IFootercities from "@/components/common/footer/interfaces/IFootercities";
import IFooterProps from "@/components/common/footer/interfaces/IFooterProps";

import styles from "@/components/common/footer/footer.styles";

const intervalTime = 3000;

const currentYear = `© ${new Date().getFullYear()} Chiizu Inc. All rights reserved.`;

const Footer = (props: IFooterProps) => {
    const [currentCity, setCurrentCity] = useState<IFootercities>(props.footer.cities[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomCity = props.footer.cities[Math.floor(Math.random() * props.footer.cities.length)];
            setCurrentCity(randomCity);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [props.footer.cities]);

    return (
        <>
            <section className={styles.footer}>
                <Link href="/">
                    <Image src="/assets/images/logo.svg" alt="logo" width="165" height="43" />
                </Link>
                <p className={`${styles.paddingTop5} ${styles.paddingBottom12}`}>
                    Made with {currentCity.icon} in {currentCity.city}
                </p>
                <div className={styles.social}>
                    {
                        props.footer.socials.map((item, index) => (
                            <Link href={item.link} className={styles.socialInner} key={index}>
                                <Image
                                    src={`${homeUrl}${item.icon.data.attributes.url}`}
                                    alt={item.title}
                                    width="23"
                                    height="23"
                                />
                                <p className={styles.paddingLeft3}>{item.title}</p>
                            </Link>
                        ))
                    }
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerTextContainer}>
                        <p className={styles.footerText}>{props.footer.footerDescription}</p>
                    </div>
                </div>
            </section>
            <div className={styles.rootCopyright}>
                <div className={styles.copyrightContainer}>
                    <p className={styles.textXs}>{currentYear}</p>
                </div>
                <div className={styles.poweredContainer}>
                    <p className={styles.poweredText}>Powered by </p>
                    <Image src="/assets/images/footer/wecreate_logo.svg" alt="logo" width="133" height="17" />
                </div>
                <div className={styles.privacyContainer}>
                    <Link className={styles.privacyPolicytext} href="#">Privacy Policy</Link>
                    <Link className={styles.textXs} href="#">Terms of Service</Link>
                </div>
            </div>
        </>
    );
};

export default memo(Footer);