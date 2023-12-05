import Link from "@docusaurus/Link";
import React, { useEffect, useState } from "react";
import ConnectWalletTest from "./ConnectWalletTest";
import clsx from 'clsx';

const Market = () => {
  const xInfo = localStorage.getItem('xInfo');
  const xId = JSON.parse(xInfo)?.id || undefined;

  // const [followX, setFollowX] = useState<boolean>(false);

  // useEffect(() => {
  //   const xInfo = localStorage.getItem('xInfo');
  //   console.log(xInfo)
  //   if (xInfo) {
  //     setFollowX(true);
  //   }
  // }, [])
  console.log(1);

  return (
    <div>
      <div className="w-full flex justify-end">
        <ConnectWalletTest />
      </div>

      <div className="mt-[20px] bg-[#FFF2CD] rounded text-[30px] flex flex-col justify-center items-center p-[30px]">
        <span>메인 배너</span>

        <span>Start with connect wallet</span>
      </div>

      <div className="mt-[20px] font-semibold text-[20px]">
        커뮤니티 기본 퀘스트 1
      </div>

      <div className="mt-[20px] grid grid-cols-3 gap-[10px]">
        <div className="rounded border-solid border-[1px] p-[20px] flex flex-col gap-[10px] justify-center items-center bg-[#012060] text-white">
          XPLA 트위터 팔로우
          <div className={clsx("w-full grid gap-[10px]", (xInfo && xId === undefined)? 'grid-cols-2 ' : 'grid-cols-1 ')}>
            {
              xInfo ? 
              xId ?
              <div className="border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer">
              claim
            </div>
            :
              <>
              <input placeholder="Input your x id"/>
            <div className="border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer">
              submit
            </div>
              </>
              :

            <div onClick={() => localStorage.setItem('xInfo', JSON.stringify({
              clicked : true
            }))} className="border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer">
              Follow
            </div>
            }

          </div>
        </div>
        <div className="rounded border-solid border-[1px] p-[20px] flex justify-center items-center bg-[#012060] text-white">
          텔레그램 어쩌구
        </div>
        <div className="rounded border-solid border-[1px] p-[20px] flex justify-center items-center bg-[#012060] text-white">
          미디엄 어쩌구
        </div>
      </div>
    </div>
  );
};

export default Market;
