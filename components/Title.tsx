import { PropsWithChildren, ReactNode } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }: any) => {
  return (
    <h1 className="font-bold text-gray-800 inline dark:bg-gradient-to-r dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 bg-clip-text font-display text-5xl tracking-tight dark:text-transparent">
      {children}
    </h1>
  );
};

export default Title;
