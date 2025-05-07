import { UIProps } from "@/types";

const SecondButton = ({ children, className }: UIProps) => {
  return (
    <button
      className={` p-2 flex-center cursor-pointer gap-1 text-smoke-white bg-gunmetal rounded-lg hover:scale-[.9] duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondButton;
