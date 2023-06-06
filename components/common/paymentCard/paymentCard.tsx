import { memo } from "react";
import Image from "next/image";

import IPaymentCardProps from "@/components/common/paymentCard/interfaces/IPaymentCardProps";

import styles from "@/components/common/paymentCard/paymentCard.styles";

const PaymentCard = (props: IPaymentCardProps) => (
    <div className={`${styles.root} ${props.gradient}`}>
        <div className={`${styles.box}`}>
            <Image
                src={props.image.data.attributes.url}
                alt={props.title}
                width={props.image.data.attributes.width}
                height={props.image.data.attributes.height}
            />
        </div>
        <h3 className={styles.h3}>{props.title}</h3>
        <p className={styles.p}>{props.description}</p>
    </div>
);

export default memo(PaymentCard);