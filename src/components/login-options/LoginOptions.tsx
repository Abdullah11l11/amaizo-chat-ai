import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { toast } from "react-toastify";

const LoginOptions = () => {
  const options: {
    imageSrc?: string;
    title: string;
  }[] = [
    { imageSrc: "/google.png", title: "Sign up with Google" },
    { imageSrc: "/apple.png", title: "Sign up with Apple" },
    { title: "Skip for now" },
  ];

  const clickHandler = (title: string) => {
    if (title === "Skip for now") toast.success("Welcome Guest !");
    else return null;
  };

  return (
    <div className="flex flex-col gap-1 mb-6">
      {options.map(({ imageSrc, title }) => (
        <Link to={title === "Skip for now" ? "/home" : "/"}>
          <Button
            onClick={() => clickHandler(title)}
            key={title}
            className="*:gap-2.5 w-full md:min-w-[415px] py-2.5 *:flex-center !border-white"
            color="white"
          >
            {imageSrc && (
              <img width={20} height={20} src={imageSrc} alt={"icon"} />
            )}
            <span>{title}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default LoginOptions;
