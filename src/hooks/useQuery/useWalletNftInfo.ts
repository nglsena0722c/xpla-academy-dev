import axios from "axios"
import { useQuery } from '@tanstack/react-query';
import useUserAddress from "../Zustand/useUserAddress";

interface WalletNftInfoResponse {
    returnCode: string;
    returnMsg: string;
    extension : {
        name : string;
        attributes : {
            trait_type : string;
            value : string;
        }[],
        image : string;
    }
}

const useWalletNftInfo = (tokenId : string) => {
    const { userAddress } = useUserAddress();

    return useQuery({
        queryKey: ['useWalletNftInfo', userAddress, tokenId],
        queryFn: async () => {
            const { data } = await axios.post<WalletNftInfoResponse>(`https://gw-qa-gcl.c2xstation.net:40201/wallet/wallet-nft-info`, {
                wallet: userAddress,
                tokenId: tokenId,
            });

            return data;
        },
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        enabled : !!userAddress,
    })

}

export default useWalletNftInfo