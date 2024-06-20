import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

import { User } from "lucide-react";

const maskPost = () => {
  return (
    <main className="text-neutral-200 pt-20 px-4 md:px-16 lg:px-24">
      <div>
        <h1 className="text-5xl font-medium py-10">
          Implementação Manual de Máscaras de Input
        </h1>
        <h1 className="lg:text-xl pb-4">
          A aplicação de máscaras em campos de input é uma funcionalidade comum
          em muitos formulários. Embora existam várias bibliotecas externas que
          podem facilitar essa tarefa, muitas vezes uma implementação manual
          básica é suficiente para atender às necessidades do projeto.
        </h1>
        <h1 className="pt-2 lg:text-xl pb-4">
          Optar por implementar máscaras manualmente, em vez de usar bibliotecas
          externas, oferece algumas vantagens significativas:
        </h1>
        <div className="flex flex-col pl-14 gap-y-4">
          <h1 className="pt-2 lg:text-xl ">
            <span className="font-semibold">
              • Redução do Tamanho do Bundle:
            </span>{" "}
            Ao evitar bibliotecas externas, o tamanho do bundle de código é
            reduzido. Isso resulta em tempos de carregamento mais rápidos e
            melhor desempenho geral da aplicação. Em projetos onde o desempenho
            é crucial, cada kilobyte conta.
          </h1>
          <h1 className="pt-2 lg:text-xl ">
            <span className="font-semibold">• Controle Total:</span> Implementar
            máscaras manualmente dá ao desenvolvedor controle total sobre o
            comportamento do input. Isso permite customizações específicas que
            podem não ser suportadas por bibliotecas genéricas.
          </h1>
          <h1 className="pt-2 lg:text-xl ">
            <span className="font-semibold">• Simplicidade:</span> Para casos de
            uso simples, a implementação de máscaras pode ser feita com algumas
            linhas de código JavaScript ou TypeScript, eliminando a necessidade
            de adicionar dependências externas.
          </h1>
        </div>
      </div>

      <div className="flex flex-col pt-10 gap-y-4">
        <h1 className="lg:text-2xl font-medium">Exemplos:</h1>
        <div className="flex gap-x-2 items-center">
          <h1 className="font-medium lg:text-lg">Input com máscara de CPF :</h1>
          <Input mask="cpf" placeholder="CPF" />
        </div>

        <div className="flex gap-x-2 items-center">
          <h1 className="font-medium lg:text-lg">
            Input com máscara de telefone celular :
          </h1>
          <Input mask="phone" placeholder="Telefone" />
        </div>
      </div>

      <h1 className="pt-10 font-semibold text-lg lg:text-3xl">
        Fluxo de desenvolvimento dos algoritmos:
      </h1>

      <div className="pt-8 flex flex-col gap-y-14 ">
        <div className="flex flex-col gap-y-2">
          <h1 className="lg:text-xl">
            1 - Ajuste seu componente de Input para receber suas funções de
            máscara:
          </h1>
          <div className="flex justify-center">
            <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
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
          </div>
          <h1 className="text-sm lg:text-lg">
            Não há estilização alguma nesse componente, pois o intuito do
            tutorial é mostrar o comportamento das funções apenas.
          </h1>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="lg:text-xl">
            2 - Adicione uma função para lidar com o evento de mudança de valor
            do input:
          </h1>
          <div className="flex justify-center">
            <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
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
);`}
                </code>
              </pre>
            </div>
          </div>
          <h1 className="text-sm lg:text-lg">
            A função handleChange é usada como um manipulador de eventos para o
            evento onChange de um elemento input. Ela é criada usando
            React.useCallback para memorização, o que ajuda a otimizar o
            desempenho evitando a criação de uma nova função em cada
            renderização.
          </h1>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="lg:text-xl">
            3 - Adicione uma função que lida com o evento de pressionamento de
            teclas enquanto o input está focado.
          </h1>
          <div className="flex justify-center">
            <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
              <pre>
                <code>
                  {`const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.onKeyDown) {
          props.onKeyDown(event);
        }
      },
      [props]
);`}
                </code>
              </pre>
            </div>
          </div>
          <h1 className="text-sm lg:text-lg">
            De forma análoga ao handleChange, também utilizamos o hook
            useCallback para otimizar essa função. O propósito desta função nos
            nossos inputs é permitir que o usuário apague os caracteres.
          </h1>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="lg:text-xl">
            4 - Defina um objeto para mapear todos os tipos de máscara de
            entrada para funções manipuladoras de máscara.
          </h1>
          <div className="flex justify-center">
            <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
              <pre>
                <code>
                  {`const maskHandlers: Record<InputMasks, MaskHandler> = {
    cpf: handleCPFMask,
};`}
                </code>
              </pre>
            </div>
          </div>
          <h1 className="text-sm lg:text-lg">
            Record é um utilitário do TypeScript que constrói um tipo de objeto
            cujas chaves são do tipo InputMasks e cujos valores são do tipo
            MaskHandler.
            <br />
            <br />
            InputMasks é um tipo que define as máscaras de entrada disponíveis
            (neste caso, a de CPF).
            <div className="flex justify-center py-2">
              <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
                <pre>
                  <code>{`export type InputMasks = "cpf";`}</code>
                </pre>
              </div>
            </div>
            MaskHandler é um tipo que define a assinatura de uma função que lida
            com eventos de input e aplica a máscara apropriada.
            <div className="flex justify-center py-2">
              <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
                <pre>
                  <code>{`export type MaskHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
`}</code>
                </pre>
              </div>
            </div>
          </h1>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="lg:text-xl">
            5 - Adicionamos nossa função que irá chamar a função de formatação:
          </h1>
          <div className="flex justify-center">
            <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
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
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="lg:text-xl">
            6 - Adicionamos nossa função para formatação de CPF:
          </h1>
          <h1 className="lg:text-lg">
            Esperamos receber uma string de entrada e retorná-la no formato
            "XXX.XXX.XXX-XX"
          </h1>
          <h1>Função de formatação para CPF:</h1>
          <div className="flex justify-center">
            <div className="overflow-auto bg-[#252424] rounded-lg px-4 py-2 lg:w-[34rem] xl:w-[44rem]">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default maskPost;
