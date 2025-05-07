import { ButtonProps } from "@/types";

const MainButton = ({ children, className, type, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`flex-center w-full bg-coral text-white text-base text-center py-2.5 rounded-xl cursor-pointer hover:bg-coral/70 duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
