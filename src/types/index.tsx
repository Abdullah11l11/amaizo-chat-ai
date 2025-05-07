import { NavLinkProps } from "react-router-dom";

export interface UIProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps extends UIProps {
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

export interface IconLinkProps extends NavLinkProps {
  icon: string;
}

export interface MessageProps {
  message: string;
  received?: boolean;
  loading?: boolean;
}

export interface SidebarControlProps {
  fullSidebar: boolean;
  setFullSidebar?: () => void;
}

export interface FooterProps {
  addMessage: (text: string, received?: boolean, loading?: boolean) => void;
  setMessage: React.Dispatch<React.SetStateAction<MessageProps[]>>;
}

export interface ChatProps {
  messages: MessageProps[];
}
