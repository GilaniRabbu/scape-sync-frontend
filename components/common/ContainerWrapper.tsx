import { ReactNode } from "react";

interface ContainerWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContainerWrapper = ({ children, className }: ContainerWrapperProps) => {
  return (
    <div
      className={`${className} container mx-auto py-5 px-5 md:px-10 lg:px-14`}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
