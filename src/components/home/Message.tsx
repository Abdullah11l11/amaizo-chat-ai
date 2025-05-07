import { FaRegUser } from "react-icons/fa";
import ProfilePhoto from "../UI/ProfilePhoto";
import { MessageProps } from "@/types";

import { VscRobot } from "react-icons/vsc";
import MessageLoader from "./MessageLoader";

const Message = ({ received, message }: MessageProps) => {
  return (
    <div
      className={`text-white flex items-center gap-2 ${
        received ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <ProfilePhoto className="!w-11 !h-11 hidden md:flex-center  !rounded-full">
        {received ? <VscRobot size={20} /> : <FaRegUser size={20} />}
      </ProfilePhoto>
      {message === "loading" ? (
        <MessageLoader />
      ) : (
        <div className="text-base leading-8 text-white bg-gunmetal px-5  py-1 rounded-xl">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
