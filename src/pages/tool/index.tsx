import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  WalletStatus,
  useConnectedWallet,
  useWallet,
} from "@xpla/wallet-provider";
import WalletWrap from "@site/src/components/Wallet/WalletWrap";
import UserStatus from "./UserStatus";
import Connect from "@site/src/components/Wallet/Connect";

export default function Tool(): JSX.Element {
  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <main>
        <Link to="/#playgame">메인 화면 게임 링크</Link>
        <br />
        <Link to="/blog/play-game">blog/play-game 화면 링크</Link>
        <WalletWrap>
          <Connect />
        </WalletWrap>
      </main>
    </Layout>
  );
}
