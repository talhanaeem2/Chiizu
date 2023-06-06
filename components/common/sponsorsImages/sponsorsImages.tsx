import { memo } from "react";
import Image from "next/image";

import { homeUrl } from "@/pages";
import ISponsorsImagesProps from "@/components/common/sponsorsImages/interfaces/ISponsorsImagesProps";

import styles from "@/components/common/sponsorsImages/sponsorsImages.styles";

const SponsorsImages = (props: ISponsorsImagesProps) => (
    <div
        className={
            `${styles.commonSponsors} ${props.bgColor ? `${styles.bgWhite} ${styles.sponsors}` : ""}`
        }
    >
        {props.data.map((item, index) =>
            <Image
                className={styles.imageSpacing}
                key={index}
                alt=""
                src={`${homeUrl}${item.sponsors.data[0].attributes.url}`}
                width={item.sponsors.data[0].attributes.width}
                height={item.sponsors.data[0].attributes.height}
            />
        )}
    </div>
);

export default memo(SponsorsImages);