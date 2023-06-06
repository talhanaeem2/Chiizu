import { memo } from "react";

import { homeUrl } from "@/pages";
import IPayments from "@/components/home/payments/interfaces/IPayments";
import IPaymentsProps from "@/components/home/payments/interfaces/IPaymentsProps";
import IRequestDemoProps from "@/components/common/requestDemo/interfaces/IRequestDemoProps";
import PaymentCard from "@/components/common/paymentCard/paymentCard";
import RequestDemo from "@/components/common/requestDemo/requestDemo";
import SponsorsImages from "@/components/common/sponsorsImages/sponsorsImages";

import styles from "@/components/home/payments/payments.styles";

const renderPaymentCards = (payments: IPayments) => payments.paymentOptions.map((item, index) => {
    const { title, description, image, gradient } = item;

    return (
        <PaymentCard
            title={title}
            description={description}
            image={{
                data: {
                    id: item.image.data.id,
                    attributes: {
                        url: `${homeUrl}${image.data.attributes.url}`,
                        width: image.data.attributes.width,
                        height: image.data.attributes.height
                    }
                }
            }}
            gradient={`bg-gradient-to-b from-${gradient} to-white`}
            key={index}
        />
    );
});

const requestDemoProps: IRequestDemoProps = {
    inputProps: {
        type: "text",
        name: "email-address",
        placeholder: "Email Address",
    },
    themeButtonProps: {
        text: "Request a demo",
    },
    buttonProps: {
        text: "Or chat with us",
        icon: "/assets/images/arrow_right.svg",
        textColor: "darkJungleGreen",
    },
};

const Payments = (props: IPaymentsProps) => {
    const payments = props.payments;

    return (
        <section className={styles.root}>
            <h1 className={styles.h1}>
                <span className={styles.textClearBlue}>{payments.heading}</span>
                {payments.headingAfter}
            </h1>
            <div className={styles.paymentCardRoot}>
                <div className={styles.paymentCardContainer}>
                    {renderPaymentCards(payments)}
                </div>
            </div>
            <div className={styles.bgWhite}>
                <h1 className={styles.bgWhiteH1}>{props.payments.sponsorsHeding}</h1>
                <p className={styles.bgWhiteP}>{props.payments.sponsorsDescription}</p>
                <SponsorsImages data={payments.paymentSponsors} bgColor={false} />
                <RequestDemo {...requestDemoProps} />
            </div>
        </section>
    );
};

export default memo(Payments);