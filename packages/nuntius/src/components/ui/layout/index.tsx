import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ children, title }: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>{`${title} - Nuntius`}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-[90vh] items-center justify-center bg-gradient-to-b from-blue to-dark p-5">
        <main className="flex min-h-[78vh] max-w-md flex-col items-center gap-7 rounded bg-gray px-5 py-10 sm:py-16 sm:px-10">
          {children}
        </main>
      </div>

      <footer className="flex min-h-[10vh] flex-col items-center justify-center bg-dark py-6 text-sm text-white">
        <div className="flex items-center gap-3">
          <Link href="/">Home</Link>
          <p>&copy; {currentYear} - Nuntius</p>
        </div>
        <p>
          Built by{" "}
          <a
            className="text-blue underline underline-offset-2"
            href="https://www.chizi.dev"
          >
            chizidotdev
          </a>
        </p>
      </footer>
    </>
  );
};

export default Layout;