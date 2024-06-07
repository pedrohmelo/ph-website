import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

import { User } from "lucide-react";

const maskPost = () => {
  return (
    <main className="text-neutral-200 pt-20 px-4 md:px-16 lg:px-24">
      <h1 className="text-5xl font-medium">Máscaras</h1>
      <h1 className="pt-2 lg:text-2xl">
        Como o uso de máscaras nos inputs tende a possuir uma implementação
        básica, faz-se desnecessário o uso de bibliotecas externas para aplicar
        as mesmas. Diminuindo um pouco o bundle do código devido ao uso de
        bibliotecas.
      </h1>

      <div className="pt-8 flex flex-col gap-y-4">
        <h1>
          1 - Ajuste seu componente de Input para receber suas funções de
          máscara:
        </h1>
        <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1">
          <pre>
            <code>
              {`<input
    type={type}
    onChange={handleChange}
    onKeyDown={handleKeyDown}
    {...props}
/>`}
            </code>
          </pre>
        </div>
        <h1 className="text-sm">
          Não há estilização alguma nesse componente, pois o intuito do tutorial
          é mostrar o comportamento das funções apenas.
        </h1>
        <h1>
          2 - Adicione uma função para lidar com o evento de mudança de valor do
          input:
        </h1>
        <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1">
          <pre>
            <code>
              {`const handleChange = React.useCallback(
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
              `}
            </code>
          </pre>
        </div>
        <h1 className="text-sm">
          A função handleChange é usada como um manipulador de eventos para o
          evento onChange de um elemento input. Ela é criada usando
          React.useCallback para memorização, o que ajuda a otimizar o
          desempenho evitando a criação de uma nova função em cada renderização.
        </h1>
        <h1>
          3 - Adicione uma função que lida com o evento de pressionamento de
          teclas enquanto o input está focado.
        </h1>
        <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1">
          <pre>
            <code>
              {`const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.onKeyDown) {
          props.onKeyDown(event);
        }
      },
      [props]
);
              `}
            </code>
          </pre>
        </div>
        <h1 className="text-sm">
          De forma análoga ao handleChange, também utilizamos o hook useCallback
          para otimizar essa função. O propósito desta função nos nossos inputs
          é permitir que o usuário apague os caracteres.
        </h1>
        <h1>
          4 - Defina um objeto para mapear todos os tipos de máscara de entrada
          para funções manipuladoras de máscara.
        </h1>
        <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1">
          <pre>
            <code>
              {`const maskHandlers: Record<InputMasks, MaskHandler> = {
    cpf: handleCPFMask,
};
              `}
            </code>
          </pre>
        </div>
        <h1 className="text-sm">
          Record é um utilitário do TypeScript que constrói um tipo de objeto
          cujas chaves são do tipo InputMasks e cujos valores são do tipo
          MaskHandler.
          <br />
          <br />
          InputMasks é um tipo que define as máscaras de entrada disponíveis
          (neste caso, a de CPF).
          <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1 my-2">
            <pre>
              <code>{`export type InputMasks = "cpf";`}</code>
            </pre>
          </div>
          MaskHandler é um tipo que define a assinatura de uma função que lida
          com eventos de input e aplica a máscara apropriada.
          <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1 my-2">
            <pre>
              <code>{`export type MaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
`}</code>
            </pre>
          </div>
        </h1>
        <h1>
          5 - Adicionamos nossa função que irá chamar a função de formatação:
        </h1>
        <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1">
          <pre>
            <code>
              {`export const handleCPFMask = (event: { target: any }) => {
  const { value } = event.target;
  const formattedValue = maskCPF(value);
  event.target.value = formattedValue;
};`}
            </code>
          </pre>
        </div>
        <h1>6 - Adicionamos nossa função para formatação de CPF:</h1>
        <h1>
          Esperamos receber uma string de entrada e retorná-la no formato
          "XXX.XXX.XXX-XX"
        </h1>
        <h1>Função de formatação para CPF:</h1>
        <div className="overflow-auto bg-[#252424] rounded-lg px-2 py-1">
          <pre>
            <code>
              {`export function maskCPF(cpf: string) {
    const numbersOnly = cpf.replace(/\\D/g, '');

    if (numbersOnly.length <= 3) {
        return numbersOnly;
    } else if (numbersOnly.length <= 6) {
        return \`\${numbersOnly.slice(0, 3)}.\${numbersOnly.slice(3)}\`;
    } else if (numbersOnly.length <= 10) {
        return \`\${numbersOnly.slice(0, 3)}.\${numbersOnly.slice(3, 6)}.\${numbersOnly.slice(6)}\`;
    } else {
        return \`\${numbersOnly.slice(0, 3)}.\${numbersOnly.slice(3, 6)}.\${numbersOnly.slice(6, 9)}-\${numbersOnly.slice(9, 11)}\`; 
    }
}`}
            </code>
          </pre>
        </div>
        <h1>
          Por fim, teremos o seguinte ao chamar o nosso componente de input
          passando a máscara "cpf" como parâmetro:
        </h1>
        <div className="flex flex-col">
          <h1 className="font-medium">Input com máscara de CPF:</h1>
          <Input mask="cpf" placeholder="CPF" />{" "}
        </div>
      </div>
    </main>
  );
};

export default maskPost;
