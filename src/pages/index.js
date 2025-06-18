import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Commerce</title>
        <meta name="description" content="電子記事販売アプリです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${notoSansJP.variable}`}>
        <h2>Book Commerce</h2>
        <p>電子記事販売アプリです。</p>
      </div>
    </>
  );
}
