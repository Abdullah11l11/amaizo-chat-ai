import { LuSun } from "react-icons/lu";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const SettingsBar = () => {
  return (
    <div className="text-gray w-14 py-6 items-center border-r border-gunmetal h-full flex flex-col justify-between">
      <div></div>
      <div className="flex *:cursor-pointer flex-col gap-5">
        <LuSun size={20} className="text-gunmetal" />
        <AiOutlineQuestionCircle size={20} />
      </div>
      <button className="cursor-pointer">
        <IoSettingsOutline size={30} />
      </button>
    </div>
  );
};

export default SettingsBar;
