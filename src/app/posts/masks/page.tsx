import { Input } from "@/src/components/ui/input";

const maskPost = () => {
  return (
    <main className="text-white pt-20 px-4">
      <h1 className="text-5xl font-medium">Máscaras</h1>
      <h1 className="pt-2">
        Como o uso de máscaras nos inputs tende a possuir uma implementação
        básica, faz-se desnecessário o uso de bibliotecas externas para aplicar
        as mesmas. Diminuindo um pouco o bundle do código devido ao uso de
        bibliotecas.
      </h1>
      <div className="pt-4">image here</div>
      <h1>
        Para a construção do algoritmo, sugiro os seguintes passos: 1 - Crie a
        função que receberá os dados do input e fará a chamada da função de
        máscara desejada. 2 - Crie a função de máscara. 3 - Crie uma tipagem
        para as máscaras. 4 -
      </h1>
      <Input placeholder="CPF*" mask="cpf" />
    </main>
  );
};

export default maskPost;
