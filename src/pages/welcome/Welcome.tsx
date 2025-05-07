import Button from "@/components/UI/Button";
import GradientCard from "@/components/UI/GradientCard";
import { useNavigate } from "react-router-dom";

import { motion } from "motion/react";
import { mainVariants } from "@/utils/opacityAnimate";
const Welcome = () => {
  const nav = useNavigate();

  return (
    <div className="flex relative justify-center items-center min-h-screen">
      <motion.div
        variants={mainVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        <GradientCard className="absolute w-[55vw] h-[18.3vw]  -z-10 blur-[102px] rounded-full animate-pulse -rotate-[24deg]">
          <div></div>
        </GradientCard>
        <div className="flex justify-center flex-col items-center gap-5">
          <h1 className="font-bold text-3xl md:text-[6vw] lg:text-[96px] text-center text-white">
            AI-Powered <br /> Productivity.
          </h1>
          <p className="font-normal px-5 text-sm md:text-base  lg:text-xl text-center text-white">
            AI-powered tools in one to supercharge your team productivity.{" "}
            <br />
            With Taskade, all your work is in sync in one unified workspace.
          </p>
          <Button color="#ff805f" onClick={() => nav("/login")}>
            Get Started
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
