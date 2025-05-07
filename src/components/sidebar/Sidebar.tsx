import { useState, useEffect } from "react";
import MainButton from "../UI/MainButton";
import SettingsBar from "./SettingsBar";
import SidebarLinks from "./SidebarLinks";
import SidebarLogo from "./SidebarLogo";
import SidebarProfile from "./SidebarProfile";
import { TfiAngleLeft } from "react-icons/tfi";

import { AnimatePresence, motion } from "motion/react";
import { textVariants } from "@/utils/opacityAnimate";

const Sidebar = () => {
  const [fullSidebar, setFullSidebar] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const changeStateSidebarHandler = () => {
    setFullSidebar((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const collapsedWidth = screenWidth < 640 ? 0 : 80;
  const fullWidth = screenWidth < 640 ? 300 : 352;
  const sidebarWidth = fullSidebar ? fullWidth : collapsedWidth;

  return (
    <div className="relative duration-300 flex text-dark-one min-h-screen">
      <SettingsBar />
      <motion.div
        animate={{ width: sidebarWidth }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="absolute lg:relative z-20 bg-charcoal min-h-screen left-14 lg:left-0  flex flex-col overflow-hidden duration-300 w-full justify-between"
      >
        <div className="w-full">
          <SidebarLogo
            fullSidebar={fullSidebar}
            setFullSidebar={changeStateSidebarHandler}
          />
          <SidebarLinks fullSidebar={fullSidebar} />
          <AnimatePresence>
            {fullSidebar && (
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-3.5"
              >
                <MainButton className="!rounded-2xl capitalize !py-2 w-full mt-10 sm:mt-16">
                  <img src="/coins.png" alt="coins" width={40} height={40} />
                  <span className="font-semibold text-base text-gunmetal">
                    view plan
                  </span>
                </MainButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <SidebarProfile fullSidebar={fullSidebar} />
      </motion.div>
      <div
        className={`absolute z-50 cursor-pointer duration-300 left-0 lg:!left-full top-0 lg:top-1/2 py-6 px-3 ${
          fullSidebar ? "rotate-0" : "rotate-180"
        }`}
        onClick={changeStateSidebarHandler}
        // style={{ left: `calc(100% + ${sidebarWidth}px)` }}
      >
        <TfiAngleLeft size={30} />
      </div>
    </div>
  );
};

export default Sidebar;
