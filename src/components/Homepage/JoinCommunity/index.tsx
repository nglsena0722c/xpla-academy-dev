import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export default function JoinCommunity(): JSX.Element {
  return (
    <section className="h-[832px] flex flex-col justify-center items-center px-[16px]">
      <div className="font-bold text-[50px] mb-[53px]">
        Join the XPLA DEV Network
      </div>
      <div
        className={clsx(
          "px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-8",
          styles.trailblazer
        )}
      >
        <span className="font-semibold text-[38px] text-[#ffffff]">
          XPLA Trailblazer
        </span>
        <Link
          to="https://6tpnthyk0ch.typeform.com/XPLATrailBlazer"
          className="w-fit"
          style={{ textDecoration: "none" }}
        >
          <span className={styles.registerNow}>Register Now</span>
        </Link>
      </div>
      <Link
        to="https://app.glitch-hack.com/"
        className={clsx(
          "hover:cursor-pointer px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px]",
          styles.hackathon
        )}
      />
    </section>
  );
}
