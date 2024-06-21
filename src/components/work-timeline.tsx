import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";

import EXEMPLO from "@/public/images/eudenovo.jpg";
import PLIN from "@/public/images/plin.png";
import COAMO from "@/public/images/coamo.jpg";
import OHFY from "@/public/images/ohfy.png";
import UEM from "@/public/images/UEM.png";

const WorkTimeline = () => {
  return (
    <main className="border border-[#737373] p-2 xl:p-4 rounded-lg max-w-96">
      <div className="flex gap-x-2">
        <BriefcaseBusiness color="#737373" />
        <h1 className="text-neutral-300">Trajetória Profissional</h1>
      </div>

      <div className="pt-4 flex items-start justify-between">
        <div className="flex gap-x-2">
          <Image
            src={PLIN}
            alt="fon"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-neutral-300">PLIN Energia</h1>
            <h1 className="text-gray-500 text-sm">Desenvolvedor Frontend</h1>
          </div>
        </div>
        <h1 className="text-gray-500 text-xs">2024 - atualmente</h1>
      </div>
      <div className="pt-4 flex items-start justify-between">
        <div className="flex gap-x-2">
          <Image
            src={COAMO}
            alt="fon"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-neutral-300">COAMO</h1>
            <h1 className="text-gray-500 text-sm">Analista de Sistemas</h1>
          </div>
        </div>
        <h1 className="text-gray-500 text-xs">2023 - 2024</h1>
      </div>
      <div className="pt-4 flex items-start justify-between">
        <div className="flex gap-x-2">
          <Image
            src={OHFY}
            alt="fon"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-neutral-300">OHFY</h1>
            <h1 className="text-gray-500 text-sm">Desenvolvedor Frontend</h1>
          </div>
        </div>
        <h1 className="text-gray-500 text-xs">2022 - 2023</h1>
      </div>
      <div className="pt-4 flex items-start justify-between">
        <div className="flex gap-x-2">
          <Image
            src={UEM}
            alt="fon"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-neutral-300">UEM</h1>
            <h1 className="text-gray-500 text-sm">
              Bolsista Iniciação Científica
            </h1>
          </div>
        </div>
        <h1 className="text-gray-500 text-xs">2019 - 2021</h1>
      </div>
    </main>
  );
};

export default WorkTimeline;
