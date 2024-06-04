import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { maskCPF } from "./masks";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleCPFChange = (event: { target: any }) => {
  const { value } = event.target;
  const formattedValue = maskCPF(value);
  event.target.value = formattedValue;
};
