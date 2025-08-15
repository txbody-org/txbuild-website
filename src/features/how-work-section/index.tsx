"use client";

import { useState } from "react";
import { howWorkConstant } from "./constant";

export function HowItWorksSection() {
  const [activeFeature, setActiveFeature] = useState(howWorkConstant[2]);

  return (
    <div className="py-8 sm:py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center space-x-3 sm:space-x-4 justify-center mb-3 sm:mb-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border border-logo-color transform rotate-45"></div>
          <span className="uppercase tracking-wider text-logo text-xs sm:text-sm">
            TxBuild CORE
          </span>
        </div>

        <h1 className="text-3xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold leading-tight">
          Your Data, Secured and Streamlined
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2">
          <div className="p-4 sm:p-6 h-full">
            <div className="min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
              <img
                src={activeFeature.img}
                alt={activeFeature.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          {howWorkConstant.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`w-full text-left p-3 sm:p-4 border transition-all duration-200 ${
                activeFeature.id === feature.id
                  ? "border-primary"
                  : "border-border-color hover:border-primary"
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm ${
                    activeFeature.id === feature.id
                      ? "bg-foreground text-background"
                      : "text-primary"
                  }`}
                >
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-1 text-sm sm:text-base ${
                      activeFeature.id === feature.id
                        ? "text-foreground"
                        : "text-primary"
                    }`}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm ${
                      activeFeature.id === feature.id
                        ? "text-gray-500"
                        : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
