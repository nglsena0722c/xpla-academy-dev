import axios from "axios"
import { useQuery } from '@tanstack/react-query';
import useUserAddress from "../Zustand/useUserAddress";

interface UserInfoResponse {
    clearStage: number;
    diamond: number;
    id: string;
    returnCode: string;
    returnMsg: string;
    token: string;
    xpla: string;
    convertValue : number;
    convertMax : number;
}

const useUserInfo = () => {
    const { userAddress } = useUserAddress();
    console.log(process.env.REACT_APP_SERVERURL, 2);

    return useQuery({
        queryKey: ['useUserInfo', userAddress],
        queryFn: async () => {
            const { data } = await axios.post<UserInfoResponse>(`https://gw-qa-gcl.c2xstation.net:40201/wallet/wallet-user-info`, {
                wallet: userAddress,
            });

            return data;
        },
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        enabled : !!userAddress,
    })

}

export default useUserInfo