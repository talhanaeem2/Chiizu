import IFeaturesProps from "@/components/home/hero/interfaces/IFeaturesProps";
import ISponsors from "@/components/home/hero/interfaces/ISponsors";

export default interface IHero {
    heroHeadingBefore: string;
    HeroHeadingAfter: string;
    HeroHeadingPayments: string;
    HeroHeadingPlatform: string;
    heroDescription: string;
    feature: IFeaturesProps[];
    heroSponsors: ISponsors[];
}