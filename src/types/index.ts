export type InputMasks = "cpf" | "phone" | "cnpj" | "xyz" | "percentage";

export type MaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
