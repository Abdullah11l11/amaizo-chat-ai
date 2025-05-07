import { FaRegUser } from "react-icons/fa";
import ProfilePhoto from "../UI/ProfilePhoto";
import { AnimatePresence, motion } from "motion/react";
import { SidebarControlProps } from "@/types";
import { textVariants } from "@/utils/opacityAnimate";
//         fullSidebar ? "justify-between" : "justify-center"

const SidebarProfile = ({ fullSidebar }: SidebarControlProps) => {
  return (
    <div className={`p-3.5 flex items-center justify-between`}>
      <div className="flex-center gap-5">
        <ProfilePhoto>
          <FaRegUser size={20} />
        </ProfilePhoto>
        <AnimatePresence>
          {fullSidebar && (
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col text-nowrap"
            >
              <h3 className="text-xl text-dark-one font-medium">Abdullah Mz</h3>
              <p className="text-xs -mt-1 text-dark-one/50">11 Dialogues</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {fullSidebar && (
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col te-nowrap"
          >
            <img
              src="/Expand_down.svg"
              width={20}
              height={20}
              className="rotate-90 mt-2"
            />
            <img
              src="/Expand_down.svg"
              width={20}
              height={20}
              className="-rotate-90 -mt-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarProfile;
