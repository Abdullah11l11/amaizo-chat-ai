import { SidebarControlProps } from "@/types";
import ProfilePhoto from "../UI/ProfilePhoto";
import { LiaAngleLeftSolid } from "react-icons/lia";

import { AnimatePresence, motion } from "motion/react";
import { textVariants } from "@/utils/opacityAnimate";

const SidebarLogo = ({ fullSidebar, setFullSidebar }: SidebarControlProps) => {
  return (
    <div className={`flex items-center p-3.5 justify-between`}>
      <div className="flex-center gap-5">
        <ProfilePhoto className="text-xl">AM</ProfilePhoto>
        <AnimatePresence>
          {fullSidebar && (
            <motion.h3
              variants={textVariants}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              className="font-bold text-nowrap text-dark-one text-xl"
            >
              Amiazo Chat
            </motion.h3>
          )}
        </AnimatePresence>
      </div>
      {fullSidebar && (
        <button
          className={`ml-12 hidden lg:block cursor-pointer`}
          onClick={setFullSidebar}
        >
          <LiaAngleLeftSolid size={24} />
        </button>
      )}
    </div>
  );
};

export default SidebarLogo;
