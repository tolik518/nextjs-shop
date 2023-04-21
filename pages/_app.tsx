import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import HeadMetadata from "../components/HeadMetadata";
import Title from "../components/Title";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <HeadMetadata/>
      <div className="dark:bg-slate-900 min-h-screen bg-cover p-6 dark:text-gray-300">
        <Title>Retro Stuff Shop</Title>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
