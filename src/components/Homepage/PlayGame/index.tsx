import React from "react";
import Cocosgame from "../../Cocosgame";
import clsx from "clsx";
import "./index.css";
import Link from "@docusaurus/Link";

export default function PlayGame({
  moveToElement,
}: {
  moveToElement: React.MutableRefObject<HTMLDivElement>;
}): JSX.Element {

  return (
    <section
      ref={moveToElement}
      className={clsx(
        "relative h-[1000px] md:h-[1392px] flex flex-col bg-[#CBF0FF] justify-center items-center px-4"
      )}
    >
      <img
        src="/xpla-academy-dev/img/PlayGame/bgassets-left.svg"
        alt="bgassets-left"
        className="max-[800px]:hidden absolute mix-blend-luminosity bottom-[103px] left-[116px]"
      />
      <img
        src="/xpla-academy-dev/img/PlayGame/bgassets-right.svg"
        alt="bgassets-right"
        className="max-[800px]:hidden absolute mix-blend-luminosity bottom-0 right-0"
      />

      <div className="flex flex-col items-center z-10">
        <img
          width="780px"
          height="66px"
          src="/xpla-academy-dev/img/PlayGame/gametitle.svg"
          alt="gametitle"
          className="mb-[20px]"
        />
        <div className="text-[#004FFF] font-semibold text-[50px] leading-[60px] mb-[56px]">
          Play Demo Game
        </div>
        <div className="mb-[51px]">
          <img
            className="min-[921px]:hidden"
            src="/xpla-academy-dev/img/PlayGame/comingsoon.svg"
          />
          <Cocosgame />
        </div>
        <div className="mb-[42px] text-center text-[29px] leading-[39px] font-medium">
          Play <span className="font-bold">XPLA ACADEMY</span>'s Demo Game{" "}
          <br />
          Experience Game Building within XPLA
        </div>
        <div className="flex justify-center items-center gap-[84px]">
          <Link
            to="https://github.com/xpladev/academy"
            className="font-medium text-[20px] leading-[24px] text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline"
          >
            <img
              src="/xpla-academy-dev/img/PlayGame/githubwhite.svg"
              alt="githubwhite"
              width="40px"
              height="40px"
            />
            Game code on
            <br /> GitHub! ➔
          </Link>

          <div className="h-full border-solid border-[0px] border-r-[1.5px]"></div>

          <Link
            to="/playgame#aboutGame"
            className="font-medium text-[20px] leading-[24px] text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline"
          >
            <img
              src="/xpla-academy-dev/img/PlayGame/game-asset.svg"
              alt="gameAsset"
              width="114px"
              height="40px"
            />
            About
            <br />
            Break The Bricks ➔
          </Link>
        </div>
      </div>
    </section>
  );
}
