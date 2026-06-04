"use client";

import Button from "@/components/shared/Button";
import Image from "next/image";
import { useState } from "react";

const stateData: Record<string, { cities: string[] }> = {
  Washington: {
    cities: [
      "Everett",
      "Seattle",
      "Lynwood",
      "Renton",
      "Edmonds",
      "Tukwila",
      "Shoreline",
      "Kent",
      "Redmond",
      "Federal Way",
      "Bellevue",
      "Tacoma",
    ],
  },
  California: {
    cities: [
      "Los Angeles",
      "San Francisco",
      "San Diego",
      "Sacramento",
      "San Jose",
      "Fresno",
      "Long Beach",
      "Oakland",
    ],
  },
  Arizona: {
    cities: [
      "Phoenix",
      "Tucson",
      "Mesa",
      "Chandler",
      "Scottsdale",
      "Glendale",
      "Gilbert",
      "Tempe",
    ],
  },
  Texas: {
    cities: [
      "Houston",
      "Dallas",
      "Austin",
      "San Antonio",
      "Fort Worth",
      "El Paso",
      "Arlington",
      "Plano",
    ],
  },
  Illinois: {
    cities: [
      "Chicago",
      "Aurora",
      "Naperville",
      "Joliet",
      "Rockford",
      "Springfield",
      "Elgin",
    ],
  },
};

const stateHitAreas: Record<
  string,
  { cx: number; cy: number; rx: number; ry: number }
> = {
  Washington: { cx: 95, cy: 55, rx: 55, ry: 32 },
  California: { cx: 72, cy: 228, rx: 42, ry: 88 },
  Arizona: { cx: 165, cy: 320, rx: 45, ry: 48 }, 
  Texas: { cx: 278, cy: 368, rx: 78, ry: 55 },
  Illinois: { cx: 468, cy: 192, rx: 18, ry: 42 },
};

export default function MapSection() {
  const [activeState, setActiveState] = useState("Washington");
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const displayState = hoveredState || activeState;
  const current = stateData[displayState] || stateData["Washington"];

  const midPoint = Math.ceil(current.cities.length / 2);
  const leftColumnCities = current.cities.slice(0, midPoint);
  const rightColumnCities = current.cities.slice(midPoint);

  const MapOverlay = () => (
    <svg
      viewBox="0 0 726 437"
      className="absolute inset-0 w-full h-full z-20 pointer-events-auto select-none"
    >
      {Object.entries(stateHitAreas).map(([state, area]) => {
        return (
          <ellipse
            key={state}
            cx={area.cx}
            cy={area.cy}
            rx={area.rx}
            ry={area.ry}
            fill="transparent"
            stroke="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredState(state)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => {
              setActiveState(state);
            }}
          />
        );
      })}
    </svg>
  );

  return (
    <section className="bg-[#FAF8F0] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-24">
          <span className="inline-block bg-[#EFF2FF] text-[#4A4A6A] py-[8px] px-8 rounded-full text-[14px] font-medium mb-4 font-body shadow-sm">
            Our Services
          </span>
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[40px] text-[#2C3979] mb-4 tracking-tight">
            Areas we Serve in
          </h2>
          <p className="text-[#4A4A6A] text-[14px] max-w-2xl mx-auto leading-[1.7] font-body opacity-90">
            From fleet maintenance and routing logistics to onboard bus
            technologies that keep everyone safe, we deliver care with every
            practice, setting each student up for a brighter future.
          </p>
        </div>

        {/* Desktop Container View */}
        <div className="hidden md:block relative mt-12 pt-[60px]">
          {/* Unified Solid Color Card Box */}
          <div className="bg-[#EBF0FF] rounded-[40px] h-[360px] w-full shadow-[0_10px_40px_rgba(44,57,121,0.04)]">
            <div className="w-full max-w-[480px] h-full pl-[50px] pr-[20px] py-[40px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-heading font-bold text-[24px] text-[#2C3979] transition-all duration-150">
                    {displayState}
                  </h3>
                  <div className="w-[55px] h-[40px] relative drop-shadow-sm">
                    {/* fallback image dynamically loaded based on the map state name */}
                    <Image
                      src="/images/washington-state.png"
                      alt={displayState}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Symmetrical Twin Columns List Layout */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {/* Left Column */}
                  <div className="flex flex-col gap-2">
                    {leftColumnCities.map((city) => (
                      <div
                        key={city}
                        className="flex items-start gap-2 text-[#4A4A6A] text-[14px] font-body"
                      >
                        <span className="text-[#822C89] font-black leading-none mt-[2px]">
                          •
                        </span>
                        <span className="font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                  {/* Right Column */}
                  <div className="flex flex-col gap-2">
                    {rightColumnCities.map((city) => (
                      <div
                        key={city}
                        className="flex items-start gap-2 text-[#4A4A6A] text-[14px] font-body"
                      >
                        <span className="text-[#822C89] font-black leading-none mt-[2px]">
                          •
                        </span>
                        <span className="font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

       

              <Button
              label="See More"
              bgColor="white"
              textColor="text-[#3D1566]"
              borderColor="border-transparent"
              hoverBgValue="yuni-purple"
              hoverTextValue="white"
              className=""
            />
            </div>
          </div>

          {/* Floating Map Structure */}
          <div className="absolute -top-16 right-0 w-[53%] lg:w-[680px] xl:w-[726px] h-[437px] z-30 select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="relative w-full h-full">
              <Image
                src="/images/us-map.png"
                alt="US Service Map"
                fill
                className="object-contain"
                priority
              />
              <MapOverlay />
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="bg-[#EBF0FF] rounded-[28px] p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h3 className="font-heading font-bold text-[22px] text-[#2C3979]">
                {displayState}
              </h3>
              <div className="w-[45px] h-[32px] relative">
                <Image
                  src="/images/washington-state.png"
                  alt={displayState}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {current.cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-1.5 text-[13px] text-[#4A4A6A] font-body"
                >
                  <span className="text-[#822C89] font-bold">•</span>
                  <span>{city}</span>
                </div>
              ))}
            </div>

          

            <Button
              label="See More"
              bgColor="white"
              textColor="text-[#3D1566]"
              borderColor="border-transparent"
              hoverBgValue="yuni-purple"
              hoverTextValue="white"
            />
          </div>

          <div className="relative w-full h-[260px] sm:h-[320px]">
            <Image
              src="/images/us-map.png"
              alt="US Map"
              fill
              className="object-contain"
              priority
            />
            <MapOverlay />
          </div>
        </div>
      </div>
    </section>
  );
}
