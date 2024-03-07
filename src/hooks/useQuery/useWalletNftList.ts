import axios from "axios"
import { useQuery } from '@tanstack/react-query';
import { useWallet } from "@xpla/wallet-provider";
import useUserAddress from "../Zustand/useUserAddress";

export interface WalletNftListResponse {
    returnCode: string;
    returnMsg: string;
    tokenList: {
        tokens : string[]
    };
}

const useWalletNftList = () => {
    const { userAddress } = useUserAddress();

    return useQuery({
        queryKey: ['useWalletNftList', userAddress],
        queryFn: async () => {
            const { data } = await axios.post<WalletNftListResponse>(`https://gw-qa-gcl.c2xstation.net:40201/wallet/wallet-nft-list`, {
                wallet: userAddress,
                startTokenId: "0",
            });

            return data;
        },
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        enabled : !!userAddress,
    })

}

export default useWalletNftList