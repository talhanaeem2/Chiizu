import IFooter from "@/components/common/footer/interfaces/IFooter";
import IHead from "@/components/common/head/interfaces/IHead";
import IHero from "@/components/home/hero/interfaces/IHero";
import IPayments from "@/components/home/payments/interfaces/IPayments";
import IStories from "@/components/home/stories/interfaces/IStories";

export default interface IPost {
    head: IHead;
    hero: IHero;
    paymentSection: IPayments;
    storiesComponent: IStories;
    footer: IFooter;
}