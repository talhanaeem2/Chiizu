import IPaymentCardProps from "@/components/common/paymentCard/interfaces/IPaymentCardProps";
import ISponsors from "@/components/home/hero/interfaces/ISponsors";

export default interface IPayments {
    heading: string;
    headingAfter: string;
    sponsorsHeding: string;
    sponsorsDescription: string;
    paymentOptions: IPaymentCardProps[];
    paymentSponsors: ISponsors[];
}