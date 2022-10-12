import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Index() {
  return (
    <div>
      <Head>
        <title>KGT</title>
        <meta name="description" content="DAPP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>KGT Hello World</p>

        <ConnectButton />
      </main>
    </div>
  );
}
