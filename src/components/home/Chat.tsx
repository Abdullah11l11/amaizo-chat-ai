import { ChatProps } from "@/types";
import Message from "./Message";
import { useEffect, useRef } from "react";

const Chat = ({ messages }: ChatProps) => {
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="py-14 flex-1 overflow-auto max-h-[calc(100vh-104px-55px-32px)] px-3 sm:pl-24 md:pr-12 lg:pr-[66px] lg:pl-[107px]">
      <div className="flex overflow-auto flex-col gap-4 md:gap-[52px]">
        {messages.map(({ message, received }, index) => (
          <Message key={index} message={message} received={received} />
        ))}
      </div>
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default Chat;
