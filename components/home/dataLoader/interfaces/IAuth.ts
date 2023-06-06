import IUser from "@/components/home/dataLoader/interfaces/IUser";

export default interface IAuth {
    jwt: string;
    user: IUser;
}