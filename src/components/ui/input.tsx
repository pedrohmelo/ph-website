"use client";

import * as React from "react";
import { cn, handleCPFMask } from "@/src/lib/utils";
import { InputMasks, MaskHandler } from "@/src/types";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  error?: boolean;
  mask?: InputMasks;
  symbol?: string;
}

const maskHandlers: Record<InputMasks, MaskHandler> = {
  cpf: handleCPFMask,
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition, error, mask, ...props }, ref) => {
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (mask && maskHandlers[mask]) {
          maskHandlers[mask](event);
        }
        if (props.onChange) {
          props.onChange(event);
        }
      },
      [mask, props]
    );

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.onKeyDown) {
          props.onKeyDown(event);
        }
      },
      [props]
    );

    return (
      <div className={cn(error && "border-[#E03F5C]")}>
        {icon}
        <input
          type={type}
          className={cn(
            "flex w-full outline-none ring-offset-background placeholder:text-[#000000] text-black px-2 py-1"
          )}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
