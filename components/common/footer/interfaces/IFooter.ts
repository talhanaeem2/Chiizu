import IFootercities from "@/components/common/footer/interfaces/IFootercities";
import ISocials from "@/components/common/footer/interfaces/ISocials";

export default interface IFooter {
    footerDescription: string;
    socials: ISocials[];
    cities: IFootercities[];
}