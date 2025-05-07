import { IconLinkProps, SidebarControlProps } from "@/types";
import { NavLink } from "react-router-dom";

import { textVariants } from "@/utils/opacityAnimate";
import { AnimatePresence, motion } from "motion/react";

const SidebarLink = ({
  to,
  title,
  icon,
  fullSidebar,
}: IconLinkProps & SidebarControlProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex gap-1 relative capitalize px-3.5 font-semibold py-1.5 duration-300
        before:content-[''] before:h-full before:w-0 before:absolute before:left-0 before:top-0 before:bg-salmon before:duration-300
        hover:before:w-[6px]
        ${isActive ? "text-salmon before:w-[6px]" : ""}
        `
      }
    >
      <img src={icon} alt={title} />
      <AnimatePresence>
        {fullSidebar && (
          <motion.span
            variants={textVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className="text-nowrap"
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </NavLink>
  );
};

export default SidebarLink;
