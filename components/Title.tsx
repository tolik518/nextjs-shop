import { PropsWithChildren, ReactNode } from "react";

const Title: React.FC<PropsWithChildren> = ({ children }: any) => {
  return (
    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
      {children}
    </h1>
  );
};

export default Title;
