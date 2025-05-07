import classes from "./MessageLoader.module.css";

const MessageLoader = () => {
  return (
    <div className="w-20 flex-center">
      <div className={classes.loader}></div>
    </div>
  );
};

export default MessageLoader;
