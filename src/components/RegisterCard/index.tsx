import clsx from "clsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useWallet, WalletStatus } from "@xpla/wallet-provider";
import axios, { AxiosResponse } from "axios";

interface IDPW {
  id: string;
  pw: string;
}

const RegisterCard = ({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}) => {
  const form = useForm<IDPW>({ mode: "onChange" });
  const { register, handleSubmit } = form;

  const [requestResult, setRequestResult] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);

  const onSubmit = async ({ id, pw }: IDPW) => {
    try {
      if (wallets.length < 1) {
        throw new Error("Connect Wallet!");
      }

      const result : AxiosResponse = await axios.post('https://gw-qa-gcl.c2xstation.net:40201/wallet/wallet-connect', {
        wallet : wallets[0].xplaAddress,
        id,
        password : pw
      });
      console.log(result)
      setRequestResult(result.data.returnMsg);

    } catch (error) {
      setRequestError(
        `Unknown Error: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }

    console.log(id, pw);
  };

  const { status, wallets } = useWallet();

  const contents = (
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
              <div className="min-w-[100px]">Your Id :</div>
              <input {...register("id")} />
            </div>
            <div className="flex gap-2">
              <div className="min-w-[100px]">Your Pw :</div>
              <input {...register("pw")} />
            </div>
            <button
              type="submit"
              className=" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              // onClick={() => setClicked("[]")}
            >
              Register Your Account
            </button>
          </form>
        )}
        {requestResult && (
          <>
            <div className="mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 ">
              <div className="flex items-center justify-between gap-4">
                Request Result
                <span>{requestResult}</span>
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

  return contents;
};

export default RegisterCard;
