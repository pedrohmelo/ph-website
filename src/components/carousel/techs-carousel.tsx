"use client";

import * as React from "react";

import { Card, CardContent } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import PLSQL from "@/public/svgs/icons8-oracle-pl-sql.svg";
import NextJS from "@/public/svgs/icons8-nextjs.svg";
import ReactJS from "@/public/svgs/icons8-react.svg";
import Typescript from "@/public/svgs/icons8-typescript.svg";

const techsLibrary = [
  { src: Typescript, alt: "Typescript icon", name: "Typescript" },
  { src: NextJS, alt: "NextJS icon", name: "NextJS" },
  { src: ReactJS, alt: "ReactJS icon", name: "ReactJS" },
  { src: PLSQL, alt: "PLSQL icon", name: "PLSQL" },
  { src: PLSQL, alt: "PLSQL icon", name: "PLSQL" },
];

export function TechsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {techsLibrary.map((tech, index) => (
          <CarouselItem key={index} className="basis-1/4 pt-4">
            <div className="">
              <Card className="w-20 h-16 ">
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className="flex flex-col items-center ">
                    <Image src={tech.src} alt="tech.alt" className="w-10" />
                    <h1 className="text-sm">{tech.name}</h1>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
