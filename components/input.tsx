/**
 * @File components/input.tsx
 */
import classNames from "classnames";
import Image from "next/image";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  id: string;
  placeholder?: string;
  icon?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  value?: string;
  setValue?: (val: string) => void;
  error?: string;
}

const Input = (props: InputProps): JSX.Element => {
  const {
    id,
    placeholder,
    icon,
    type = "text",
    className,
    value,
    setValue,
    error,
  } = props;

  return (
    <div className={classNames("relative w-full h-[45px]", className)}>
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Image src={icon} alt="icon" width={20} height={20} />
        </div>
      )}
      <input
        value={value}
        type={type}
        id={id}
        className={classNames(
          "bg-[#2148C0] h-full font-semibold border text-white text-sm rounded block w-full p-3 placeholder-white placeholder:font-light",
          icon && "pl-12",
          error
            ? "border-red-500 focus:ring-red-600 focus:border-red-600 focus:border-2 outline-none"
            : "border-gray-300 focus:ring-white focus:border-white focus:border-2 outline-none"
        )}
        placeholder={placeholder}
        onChange={setValue ? (e) => setValue(e.target.value) : undefined}
      />
      {error && (
        <div className="absolute top-11 right-0 flex items-center pr-1 pointer-events-none text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
