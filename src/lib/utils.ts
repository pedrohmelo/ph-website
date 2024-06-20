import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { maskCPF, maskPhone } from "./masks";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleCPFMask = (event: { target: any }) => {
  const { value } = event.target;
  const formattedValue = maskCPF(value);
  event.target.value = formattedValue;
};

export const handlePhoneMask = (event: { target: any }) => {
  const { value } = event.target;
  const formattedValue = maskPhone(value);
  event.target.value = formattedValue;
};
