"use client";

import { useState } from "react";
import { howWorkConstant } from "./constant";

export function HowItWorksSection() {
  const [activeFeature, setActiveFeature] = useState(howWorkConstant[2]);

  return (
    <div className="py-32">
      <div className="text-center mb-12">
        <div className="flex items-center space-x-4 justify-center mb-4">
          <div className="w-4 h-4 border border-logo-color transform rotate-45"></div>
          <span className="uppercase tracking-wider text-logo">
            TxBuild CORE
          </span>
        </div>

        <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
          Your Data, Secured and Streamlined
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="p-6 h-full">
            <div className="min-h-[300px]">
              <img
                src={activeFeature.img}
                alt={activeFeature.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {howWorkConstant.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`w-full text-left p-3 border transition-all duration-200 ${
                activeFeature.id === feature.id
                  ? "border-primary "
                  : "border-border-color hover:border-primary"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold text-sm ${
                    activeFeature.id === feature.id
                      ? "bg-foreground text-background"
                      : "text-primary"
                  }`}
                >
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-1 ${
                      activeFeature.id === feature.id
                        ? "text-foreground"
                        : "text-primary"
                    }`}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`text-sm ${
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
