"use client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { features } from "./constant";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Features() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
            Powerful Features for Cardano Developers
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Transform your smart contracts into production-ready APIs in seconds
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              dragFree: true,
            }}
          >
            <CarouselContent className="">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-0 basis-1/4">
                  <div className="h-full border border-border-color p-6 flex flex-col items-center text-center">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={100}
                      height={100}
                    />

                    <h3 className="text-lg font-semibold mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          {/* Read more link */}
          <div className="flex justify-center mt-8">
            <Button
              variant="default"
              className=" px-8 py-3 uppercase tracking-wider"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
