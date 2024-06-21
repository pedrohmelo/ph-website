import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { maskCNPJ, maskCPF, maskPercentage, maskPhone, maskXYZ } from "./masks";

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

export const handleCNPJMask = (event: { target: any }) => {
  const { value } = event.target;
  const formattedValue = maskCNPJ(value);
  event.target.value = formattedValue;
};

export const handleXYZMask = (event: { target: any }) => {
  const { value } = event.target;

  let numbersOnly = value.replace(/\D/g, "");

  const formattedValue = maskXYZ(numbersOnly);
  event.target.value = formattedValue;
};

export const handlePercentageMask = (event: { target: any }) => {
  const { value } = event.target;

  let numbersOnly = value.replace(/\D/g, "");

  const formattedValue = maskPercentage(numbersOnly);
  event.target.value = formattedValue;
};

export const xyzKeyDown = (event: { key: string; target: any }) => {
  if (event.key === "Backspace" || event.key === "Delete") {
    const target = event.target;
    const value = target.value;

    const position = value.length - 4;

    if (target.selectionStart === value.length) {
      target.selectionStart = target.selectionEnd = position;
    }
  }
};

export const percentageKeyDown = (event: { key: string; target: any }) => {
  if (event.key === "Backspace" || event.key === "Delete") {
    const target = event.target;
    const value = target.value;

    const position = value.length - 1;

    if (target.selectionStart === value.length) {
      target.selectionStart = target.selectionEnd = position;
    }
  }
};
