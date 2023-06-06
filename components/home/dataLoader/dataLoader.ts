import IAuth from "@/components/home/dataLoader/interfaces/IAuth";
import IDataProps from "@/types/interfaces/IDataProps";

const DataLoader = async (apiUrl: string, collectionType: string, url: string,): Promise<IDataProps> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        identifier: "chiizu",
        password: "Chiizu@123",
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    const authResponse = await fetch(`${apiUrl}/api/auth/local`, requestOptions);
    const authResult: IAuth = await authResponse.json();

    const authHeaders = new Headers();
    authHeaders.append("Authorization", `Bearer ${authResult.jwt}`);

    const dataOptions = {
        method: "GET",
        headers: authHeaders,
    };

    const dataResponse = await fetch(`${apiUrl}/api/${collectionType}?${url}`, dataOptions);
    const data: IDataProps = await dataResponse.json();

    return data;
};

export default DataLoader;