import {
  SignBytesResult,
  WalletStatus,
  useConnectedWallet,
  useWallet,
} from "@xpla/wallet-provider";
import {
  LCDClient,
  MsgExecuteContract,
  SignMode,
  SimplePublicKey,
  Tx,
  TxAPI,
} from "@xpla/xpla.js";
import axios from "axios";
import clsx from "clsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";

interface CONVERTFORM {
  amount: number;
}

const TestConvert = ({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}) => {
  const [requestResult, setRequestResult] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<string | null>(null);

  const form = useForm<CONVERTFORM>({ mode: "onChange" });
  const connectedWallet = useConnectedWallet();

  const { status, wallets } = useWallet();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    resetField,
    reset,
    clearErrors,
  } = form;
  const { formState } = form;
  const { errors } = formState;
  const { ...values } = watch();

  const chainID = "cube_47-5";
  const URL = "https://cube-lcd.xpla.dev";
  const walletServerAddr = "https://gw-qa-gcl.c2xstation.net:40201";
  const lcd = new LCDClient({ chainID, URL });

  const onSubmit = async ({ ...submitValues }: CONVERTFORM) => {
    try {
      const { amount } = submitValues;
      const userAddress = wallets[0].xplaAddress;
      const addressinfo = await lcd.auth.accountInfo(userAddress);
      const pubkey = addressinfo.getPublicKey() as SimplePublicKey;
      // const walletServerAddr = "http://127.0.0.1:40201";

      const unsignedPost = {
        wallet: userAddress,
        amount,
        userPubKey: pubkey.key,
        userSeq: addressinfo.getSequenceNumber(),
      };

      const unsignedUrl = `${walletServerAddr}/wallet/wallet-gamecurrency-to-coin-unsigned`;
      const unsignedRes = await axios.post(unsignedUrl, unsignedPost);
      // console.log(unsignedRes);
      const unsignedTx = unsignedRes.data.unsignedTx;

      if (unsignedTx === undefined) {
        throw new Error(unsignedRes.data.returnMsg);
      }
      const decodedTx = Tx.fromBuffer(Buffer.from(unsignedTx, "base64"));

      const { result: signedTx, success } = await connectedWallet.sign({
        msgs: decodedTx.body.messages,
        fee: decodedTx.auth_info.fee,
        signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
      });

      if (!success) {
        throw new Error("Vault Sign Error");
      }

      const userSignedTx = Buffer.from(signedTx.toBytes()).toString("base64");

      const convertPost: any = {
        wallet: userAddress,
        tid: unsignedRes.data.tid,
        userTx: userSignedTx,
      };

      const walletUrl = `${walletServerAddr}/wallet/wallet-gamecurrency-to-coin`;
      let res = await axios.post(walletUrl, convertPost);

      setLoading(true);
      setTimeout(waitResult, 1000, res.data.txhash);

      //TODO : 트랜잭션 정보 가져오는 걸 txINfo로 하는데,,, 이걸 LCDClient가 아니라 서버에 물어보기
      // 서버에 물어보고, returncode가 0이면 성공, 500이면 블록체인에 기록중, 나머지는 에러.
      // url은  `${walletServerAddr}/wallet/txinfo?txhash={txhash}`이다.
    } catch (error) {
      setRequestError(
        `Unknown Error: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };
  // 블록에 최종 저장된 기록을 조회한다.
  async function waitResult(txhash) {
    try {
      const txUrl = `${walletServerAddr}/wallet/txinfo?txhash=${txhash}`;
      const txRes = await axios.get(txUrl);
      if (txRes.data.returnCode === "500") {
        setTimeout(waitResult, 1000, txhash);
      } else if (txRes.data.returnCode === "0") {
        setLoading(false);
        setRequestResult(txRes.data.returnMsg);
        if (txRes.data.returnMsg === "success") {
          setTxhash(txhash);
        }
      }
    } catch (error) {
      setRequestError(
        `Unknown Error: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }

  const getTxFee = async () => {
    const serverAdd = "xpla16rckux27qz5rv4etjk0rdm675ct26v9w8uk286";
    const cw20_contract =
      "xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3";
    const accInfo = await lcd.auth.accountInfo(serverAdd);
    const recipient = wallets[0].xplaAddress;
    const transferMsg = new MsgExecuteContract(serverAdd, cw20_contract, {
      transfer: {
        recipient,
        amount: String(values.amount) + "000000",
      },
    });
    const pubkey = accInfo.getPublicKey() as SimplePublicKey;

    const tx_api = new TxAPI(lcd);
    const simul_fee = await tx_api.estimateFee(
      [{ sequenceNumber: accInfo.getSequenceNumber(), publicKey: pubkey }],
      {
        msgs: [transferMsg],
        gasAdjustment: 1.5,
      }
    );
    setEstimateFee(simul_fee.amount.toString());
  };

  return (
    <div
      className={clsx(
        "px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
        className
      )}
    >
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {status === WalletStatus.WALLET_NOT_CONNECTED ? (
          <>Connect Wallet</>
        ) : wallets.length == 0 ? (
          "Loading..."
        ) : (
          <form
            className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-2">
              <div className="min-w-[100px]">Amount :</div>
              <input
                {...register("amount", {
                  onBlur: getTxFee,
                })}
              />
            </div>

            {estimateFee && <div>{estimateFee}</div>}
            <button
              type="submit"
              className=" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              // onClick={() => setClicked("[]")}
            >
              Submit &nbsp;
              {loading && <CircularProgress size={12} />}
            </button>
          </form>
        )}

        {requestResult && (
          <>
            <div className="mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 ">
              <div className="flex items-center justify-between gap-4">
                Request Result
                {txhash ? (
                  <a
                    href={`https://explorer.xpla.io/testnet/tx/${txhash}`}
                    target="_blank"
                  >
                    {txhash}
                  </a>
                ) : (
                  <span>Error!</span>
                )}
              </div>
            </div>
          </>
        )}
        {requestError && (
          <>
            <div className="mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 ">
              <div className="flex items-center justify-between gap-4">
                Request Error
                <span>{requestError}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestConvert;
