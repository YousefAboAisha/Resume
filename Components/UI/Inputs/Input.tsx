import React, { forwardRef } from "react";

type InputProps = {
  value?: string;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string;
  style?: string;
  icon?: JSX.Element;
  error?: string;
  pattern?: string;
  required?: boolean;
} & React.ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      placeholder,
      style,
      icon,
      error,
      pattern,
      required = true,
      ...rest
    },
    ref
  ) => {
    const hasError = error;

    return (
      <>
        <div className="relative bg-theme ">
          <div className="absolute flex justify-center p-2 rounded-l-md items-center left-1 top-[50%] translate-y-[-50%] h-full border-none outline-none text-theme text-theme">
            {icon}
          </div>

          <input
            ref={ref}
            value={value}
            {...rest}
            className={`h-[56px] pl-11 full-theme rounded-[8px] outline-none duration-300 w-full disabled:cursor-not-allowed ${
              error ? "!border-[red] animate-shake" : ""
            } ${style}`}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
          />
        </div>
        {error ? <span className="text-[red] text-[12px]">{error}</span> : null}
      </>
    );
  }
);

export default Input;
