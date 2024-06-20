export function maskCPF(cpf: string) {
  const numbersOnly = cpf.replace(/\D/g, "");

  if (numbersOnly.length <= 3) {
    return numbersOnly;
  } else if (numbersOnly.length <= 6) {
    return `${numbersOnly.slice(0, 3)}.${numbersOnly.slice(3)}`;
  } else if (numbersOnly.length <= 10) {
    return `${numbersOnly.slice(0, 3)}.${numbersOnly.slice(
      3,
      6
    )}.${numbersOnly.slice(6)}`;
  } else {
    return `${numbersOnly.slice(0, 3)}.${numbersOnly.slice(
      3,
      6
    )}.${numbersOnly.slice(6, 9)}-${numbersOnly.slice(9, 11)}`;
  }
}

export function maskCNPJ(cnpj: string) {
  const numbersOnly = cnpj.replace(/\D/g, "");

  if (numbersOnly.length <= 2) {
    return numbersOnly;
  } else if (numbersOnly.length <= 5) {
    return `${numbersOnly.slice(0, 2)}.${numbersOnly.slice(2)}`;
  } else if (numbersOnly.length <= 8) {
    return `${numbersOnly.slice(0, 2)}.${numbersOnly.slice(
      2,
      5
    )}.${numbersOnly.slice(5)}`;
  } else if (numbersOnly.length <= 12) {
    return `${numbersOnly.slice(0, 2)}.${numbersOnly.slice(
      2,
      5
    )}.${numbersOnly.slice(5, 8)}/${numbersOnly.slice(8)}`;
  } else {
    return `${numbersOnly.slice(0, 2)}.${numbersOnly.slice(
      2,
      5
    )}.${numbersOnly.slice(5, 8)}/${numbersOnly.slice(
      8,
      12
    )}-${numbersOnly.slice(12, 14)}`;
  }
}

export function maskPhone(phone: string) {
  const numbersOnly = phone.replace(/\D/g, "");

  if (numbersOnly.length <= 2) {
    return numbersOnly;
  } else if (numbersOnly.length <= 7) {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`;
  } else if (numbersOnly.length <= 11) {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(
      2,
      3
    )} ${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7)}`;
  } else {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(
      2,
      3
    )} ${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7, 11)}`;
  }
}

export function maskPercentage(value: string) {
  const number = Number(value);

  return number < 100 ? `${number}%` : "100%";
}

export function maskKWH(value: string) {
  const number = Number(value);

  return `${number} kwh`;
}
