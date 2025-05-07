import { FooterProps } from "@/types";
import GradientCard from "../UI/GradientCard";
import SecondButton from "../UI/SecondButton";
import { useEffect, useState } from "react";
import { useTranslateText } from "@/hooks/useTranslateText";

const Footer = ({ addMessage, setMessage }: FooterProps) => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (error) setError(null);
  };

  const deleteTextHandler = () => {
    setText("");
    setError(null);
  };

  const onSuccess = (translateText: string) => {
    addMessage(translateText, true);
  };

  const onError = () => {
    setError("Translation failed. Please try again.");
  };

  const { mutate, isPending, isError } = useTranslateText(onSuccess, onError);

  useEffect(() => {
    if (isPending) {
      addMessage("loading", true, true);
    } else {
      setMessage((prev) => prev.filter((msg) => !(msg.message === "loading")));
    }
  }, [isPending]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input
    const trimmedText = text.trim();
    if (!trimmedText) {
      setError("Please enter a message");
      return;
    }

    if (isPending) return;

    addMessage(trimmedText);
    deleteTextHandler();
    mutate(trimmedText);
  };

  const isSubmitDisabled = !text.trim() || isPending;

  return (
    <footer className="px-3 md:pl-24 lg:pl-12.5 lg:pr-12.5 py-2.5 h-[104px]">
      <div>
        <GradientCard className="p-0.5 flex-center rounded-2xl h-12">
          <form
            onSubmit={submitHandler}
            className="flex items-center pl-3.5 bg-secondary-gray h-full w-full rounded-2xl"
          >
            <input
              value={text}
              onChange={changeTextHandler}
              className="placeholder:text-sm text-sm placeholder:text-smoke-white/50 text-white outline-none caret-purple flex-1"
              placeholder="Enter your question, goal or next big project ...."
              type="text"
              autoFocus
            />
            <div className="flex items-center px-2 gap-2.5 py-1.5 ">
              <button
                type="button"
                disabled={isPending}
                onClick={deleteTextHandler}
                className="cursor-pointer hover:scale-[.9] duration-300 disabled:opacity-50"
              >
                <img src="/Trash_light.svg" alt="delete" />
              </button>
              <button
                type="button"
                disabled={isPending}
                className="cursor-pointer hover:scale-[.9] duration-300 disabled:opacity-50"
              >
                <img src="/Copy_alt_light.svg" alt="copy" />
              </button>
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`cursor-pointer hover:scale-[.9] duration-300 flex-center bg-coral rounded-full w-8.5 h-8.5 ${
                  isSubmitDisabled ? "opacity-50" : ""
                }`}
              >
                {isPending ? (
                  <span className="w-5 h-5 border-2 border-t-2 border-t-transparent border-white border-solid rounded-full animate-spin"></span>
                ) : (
                  <img src="/send.svg" alt="copy" width={24} height={24} />
                )}
              </button>
            </div>
          </form>
        </GradientCard>
        {error && <p className="text-red-500 text-xs mt-1 pl-2">{error}</p>}
        {isError && !error && (
          <p className="text-red-500 text-xs mt-1 pl-2">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
      <div className="flex justify-between text-xs md:text-base items-center mt-2.5">
        <SecondButton>
          <img src="/Cancel_light.svg" alt="" />
          <span>No Tool |</span>
          <img src="/Code_light.svg" alt="" />
        </SecondButton>
        <SecondButton>
          <span>Credit remaining</span>
          <span className="bg-[#4B3A56] text-sm rounded-[7px] px-2">111</span>
        </SecondButton>
      </div>
    </footer>
  );
};

export default Footer;
