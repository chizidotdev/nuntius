import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&family=Playfair+Display:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;500;800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/bubble-chat.png" type="image/x-icon" />
        <meta
          name="description"
          content="Nuntius is an interactive anonymous messaging site with a dare game. Create your Profile Link and Send it to all your contacts to check what your friends will say to you"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuntius.chizi.dev/login" />
        <meta property="og:title" content="Login - Nuntius" />
        <meta
          property="og:description"
          content="Nuntius is an interactive anonymous messaging site with a dare game. Create your Profile Link and Send it to all your contacts to check what your friends will say to you"
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nuntius.chizi.dev/login"
        />
        <meta property="twitter:title" content="Login - Nuntius" />
        <meta
          property="twitter:description"
          content="Nuntius is an interactive anonymous messaging site with a dare game. Create your Profile Link and Send it to all your contacts to check what your friends will say to you"
        />
        <meta property="twitter:image" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
