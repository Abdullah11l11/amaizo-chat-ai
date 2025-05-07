import Chat from "@/components/home/Chat";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { MessageProps } from "@/types";
import React, { useState } from "react";

const App: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const addMessage = (
    text: string,
    received: boolean = false,
    loading: boolean = false
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        message: text,
        received,
        loading,
      },
    ]);
  };

  return (
    <div className="flex-1 max-h-screen overflow-hidden  flex flex-col bg-jet p-1 sm:py-4.5">
      <Header />
      <Chat messages={messages} />
      <Footer setMessage={setMessages} addMessage={addMessage} />
    </div>
  );
};

export default App;

{
  /* <AnimatedWrapper type="flash" isVisible={isVisible}>
  <div className="text-xl text-white bg-blue-400 p-4 rounded-xl">
    Welcome to Abdullah Starter App
  </div>
  </AnimatedWrapper> */
}
