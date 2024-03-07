import { useMutation } from '@tanstack/react-query';
import axios from "axios"
import useUserAddress from '../Zustand/useUserAddress';
import { LCDClient, SimplePublicKey } from '@xpla/xpla.js';

interface Response {
    fee : string;
    payAmount : number;
    returnCode: string;
    returnMsg: string;
    tid: number;
    unsignedTx: string;
}

const chainID = "cube_47-5";
const URL = "https://cube-lcd.xpla.dev";
const lcd = new LCDClient({ chainID, URL });

const useRecordUnsigned = () => {
    const { userAddress } = useUserAddress();
    const unsignedUrl = `https://gw-qa-gcl.c2xstation.net:40201/wallet/wallet-score-record-unsigned`;

    const fetchData = async () => {
        const addressinfo = await lcd.auth.accountInfo(userAddress || "");
        const pubkey = addressinfo.getPublicKey() as SimplePublicKey;

        const unsignedPost = {
            wallet: userAddress,
            userPubKey: pubkey.key,
            userSeq: addressinfo.getSequenceNumber(),
        };

        const res = await axios.post(
            unsignedUrl,
            unsignedPost
        );

        return res.data;
    };

    const res = useMutation({
        mutationFn: fetchData,
        mutationKey: ['useRecordUnsigned', userAddress, Date.now()],
        onSuccess: (data: Response) => {
            if (data.returnCode !== "0") {
                if (data.returnCode === "499" && data.returnMsg.includes("insufficient funds")) {
                    throw new Error("601");
                } else {
                    throw new Error(data.returnCode);
                }
            }
        },
        onError : (err) => {
            throw err;
        }
    })

    return res;
}

export default useRecordUnsigned