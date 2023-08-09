import {
  SignBytesResult,
  WalletStatus,
  useConnectedWallet,
  useWallet,
} from "@xpla/wallet-provider";
import { LCDClient, SignMode, SimplePublicKey, Tx } from "@xpla/xpla.js";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

interface CONVERTFORM {
  amount: number;
}

const TestConvert = () => {
  const form = useForm<CONVERTFORM>({ mode: "onChange" });
  const connectedWallet = useConnectedWallet();

  const {
    status,
    wallets,
  } = useWallet();

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
  const onSubmit = async ({ ...submitValues }: CONVERTFORM) => {
      const { amount } = submitValues;
      const lcd = new LCDClient({ chainID, URL });
      const userAddress = wallets[0].xplaAddress;
      const addressinfo = await lcd.auth.accountInfo(userAddress);
      const pubkey = addressinfo.getPublicKey() as SimplePublicKey;
      // const walletServerAddr = "http://127.0.0.1:40202";
      const walletServerAddr = "https://gw-qa-gcl.c2xstation.net:40202"

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
      console.log('unsigned', unsignedTx);

      if (unsignedTx === undefined) {
        throw new Error("Server Error!");
      }
      const decodedTx = Tx.fromBuffer(Buffer.from(unsignedTx, "base64"));
      console.log("decode", decodedTx);

      const { result: signedTx, success } = await connectedWallet.sign({
        msgs: decodedTx.body.messages,
        fee: decodedTx.auth_info.fee,
        signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
      });

      console.log("sign", signedTx);

      if (!success) {
        throw new Error("Vault Sign Error");
      }

      const userSignedTx = Buffer.from(signedTx.toBytes()).toString("base64");

      const convertPost: any = {
        wallet: userAddress,
        tid: unsignedRes.data.tid,
        userTx: userSignedTx,
      };
      console.log("convertPost:", convertPost);

      const walletUrl = `${walletServerAddr}/wallet/wallet-gamecurrency-to-coin`;
      let res = await axios.post(walletUrl, convertPost);
      console.log("res : ", res);
      //TODO : 트랜잭션 정보 가져오는 걸 txINfo로 하는데,,, 이걸 LCDClient가 아니라 서버에 물어보기
      // 서버에 물어보고, returncode가 0이면 성공, 500이면 블록체인에 기록중, 나머지는 에러.
      // url은  `${walletServerAddr}/wallet/txinfo?txhash={txhash}`이다.
  };

  return (
    <>
      {status === WalletStatus.WALLET_NOT_CONNECTED ? (
        <span>You Need to Connect Wallet!</span>
      ) : wallets.length == 0 ? (
        "Loading..."
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>게임 재화를 토큰으로 바꾸는 요청s</span>
          <input {...register("amount")} placeholder="amount" />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default TestConvert;
