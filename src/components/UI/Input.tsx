import React from "react";

const Input = ({
  className,
  touched,
  errors,
  ...props
}: React.ComponentProps<"input"> & {
  touched: boolean | undefined;
  errors: string | undefined;
}) => {
  return (
    <div>
      <input
        className={`bg-gray  focus:ring-1 focus:ring-gray/50 w-full outline-none px-7 py-2.5 rounded-lg placeholder:capitalize ${className}`}
        {...props}
      />
      {touched && errors && (
        <p className="text-sm text-red-400 mt-1">{errors}</p>
      )}
    </div>
  );
};

export default Input;
