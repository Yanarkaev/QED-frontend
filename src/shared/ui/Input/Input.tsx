import clsx from "clsx";
import React, {
  type ChangeEvent,
  type DetailedHTMLProps,
  forwardRef,
} from "react";
import s from "./Input.module.scss";

interface IProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: "default" | "ghost";
  onlyNumbers?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  (
    {
      value,
      onChange,
      onFocus,
      onBlur,
      className = "",
      variant = "outlined",
      onlyNumbers = false,
      ...props
    },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (onlyNumbers) {
        const allowedKeys = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "Backspace",
          "Tab",
          "ArrowLeft",
          "ArrowRight",
          "Delete",
        ];

        if (!allowedKeys.includes(e.key)) {
          e.preventDefault();
        }
      }

      props.onKeyDown?.(e);
    };

    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        className={clsx(s.Input, s[variant], className)}
        {...props}
      />
    );
  }
);
