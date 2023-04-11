import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div className=" dark:bg-slate-900 min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
