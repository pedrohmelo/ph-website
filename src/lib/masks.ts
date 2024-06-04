export const maskCPF = (cpf: string) => {
  const numbersOnly = cpf.replace(/\D/g, "");

  if (numbersOnly.length <= 3) {
    return numbersOnly;
  } else if (numbersOnly.length <= 6) {
    return `${numbersOnly.slice(0, 3)}.${numbersOnly.slice(3)}`;
  } else if (numbersOnly.length <= 10) {
    return `${numbersOnly.slice(0, 3)}.${numbersOnly.slice(
      3,
      6
    )}.${numbersOnly.slice(6)}}`;
  } else {
    return `${numbersOnly.slice(0, 3)}.${numbersOnly.slice(
      3,
      6
    )}.${numbersOnly.slice(6, 9)}-${numbersOnly.slice(9, 11)}`;
  }
};
