/**
 * @File components/button.tsx
 */
import classNames from "classnames";
import { ReactNode } from "react";

const Variant = {
  primary: "bg-[#2148C0] text-white",
  inverted: "bg-white text-[#2148C0] border border-[#2148C0]",
} as const;

interface ButtonProps {
  id: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  variant?: keyof typeof Variant;
  onClick?: () => void;
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    id,
    children,
    type = "button",
    disabled = false,
    loading = false,
    className,
    onClick,
    variant = "primary",
  } = props;
  return (
    <button
      id={id}
      type={type}
      className={classNames(
        "flex justify-center items-center w-full h-[45px] hover:brightness-75 font-semibold rounded shadow-button disabled:brightness-75",
        Variant[variant],
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "LOADING..." : children}
    </button>
  );
};

export default Button;
