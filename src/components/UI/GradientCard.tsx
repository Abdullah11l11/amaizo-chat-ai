import { UIProps } from "@/types";
import "./GradientCard.css";

const GradientCard = ({ className, children }: UIProps) => {
  return <div className={`animate-gradient-text ${className}`}>{children}</div>;
};
export default GradientCard;
