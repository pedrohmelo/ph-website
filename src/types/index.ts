export type InputMasks =
  | "cpf"
  | "phone"
  | "cnpj"
  | "date"
  | "xyz"
  | "percentage";

export type MaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
