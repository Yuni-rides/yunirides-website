'use client'

import Image from 'next/image'
import { useState } from 'react'

const stateData: Record<string, { cities: string[] }> = {
  Washington: {
    cities: ['Everett', 'Seattle', 'Lynwood', 'Renton', 'Edmonds', 'Tukwila', 'Shoreline', 'Kent', 'Redmond', 'Federal Way', 'Bellevue', 'Tacoma'],
  },
  California: {
    cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose', 'Fresno', 'Long Beach', 'Oakland'],
  },
  Texas: {
    cities: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso', 'Arlington', 'Plano'],
  },
  Florida: {
    cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale', 'Tallahassee', 'St. Petersburg'],
  },
  Illinois: {
    cities: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Elgin'],
  },
}

/*
 * Ellipse hit areas — viewBox 726×437 (matches map image dimensions)
 * cx/cy = center of each state on the map
 * rx/ry = radius of clickable area
 */
const stateHitAreas: Record<string, { cx: number; cy: number; rx: number; ry: number }> = {
  Washington: { cx: 95,  cy: 55,  rx: 55, ry: 32 },
  California: { cx: 72,  cy: 228, rx: 42, ry: 88 },
  Arizona:    { cx: 120, cy: 295, rx: 52, ry: 45 },
  Texas:      { cx: 278, cy: 368, rx: 78, ry: 55 },
  Illinois:   { cx: 468, cy: 192, rx: 18, ry: 42 },
}

export default function MapSection() {
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [activeState, setActiveState] = useState('Washington')

  const displayState = hoveredState || activeState
  const current = stateData[displayState] || stateData['Washington']
  const cityPairs = Array.from(
    { length: Math.ceil(current.cities.length / 2) },
    (_, i) => [current.cities[i * 2], current.cities[i * 2 + 1]].filter(Boolean)
  )

  /* Shared interactive map SVG — used in both mobile and desktop */
  const MapOverlay = () => (
    <svg viewBox="0 0 726 437" className="absolute inset-0 w-full h-full z-10">
      {Object.entries(stateHitAreas).map(([state, area]) => {
        const isHovered = hoveredState === state
        const isActive  = activeState === state
        return (
          <ellipse
            key={state}
            cx={area.cx}
            cy={area.cy}
            rx={area.rx}
            ry={area.ry}
            fill={isHovered ? 'rgba(130,44,137,0.35)' : isActive ? 'rgba(130,44,137,0.18)' : 'transparent'}
            stroke={isHovered || isActive ? '#822C89' : 'transparent'}
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredState(state)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => { setActiveState(state); setHoveredState(null) }}
          />
        )
      })}
    </svg>
  )

  return (
    <section className="bg-yuni-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yuni-card text-yuni-text-mid py-[7px] px-[28px] rounded-full text-[14px] font-medium mb-4 font-body">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-yuni-navy mb-4">
            Areas we Serve in
          </h2>
          <p className="text-yuni-text-mid text-[15px] max-w-2xl mx-auto leading-[1.7] font-body">
            From fleet maintenance and routing logistics to onboard bus technologies that keep everyone safe.
          </p>
        </div>

        {/* ── MOBILE ─────────────────────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-4">

          {/* Info card */}
          <div className="bg-yuni-lavender rounded-[28px] px-6 py-7 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <h3 className="font-heading font-bold text-[20px] text-yuni-navy">
                {displayState}
              </h3>
              <div className="w-[60px] h-[44px] relative">
                <Image
                  src="/images/washington-state.png"
                  alt={displayState}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {cityPairs.map((pair, i) => (
                <div key={i} className="contents">
                  {pair.map((city) => (
                    <p key={city} className="text-[13px] text-yuni-text-mid m-0 font-body">
                      • {city}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* State selector pills */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(stateData).map((state) => (
                <button
                  key={state}
                  onClick={() => setActiveState(state)}
                  className={`text-[12px] font-body px-3 py-1 rounded-full border transition-all duration-200 ${
                    activeState === state
                      ? 'bg-yuni-purple text-white border-yuni-purple'
                      : 'bg-white text-yuni-text-mid border-yuni-border'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            <button className="btn-outline w-fit">See More</button>
          </div>

          {/* Interactive map on mobile */}
          <div className="relative w-full h-[240px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/us-map.png"
              alt="US Map"
              fill
              className="object-cover object-center"
              priority
            />
            <MapOverlay />
          </div>

        </div>

        {/* ── DESKTOP ────────────────────────────────────────────── */}
        {/*
         * pt-[88px] creates space for map floating 88px above container
         * Map: absolute top-0 right-0, w-[55%] responsive, h-[437px]
         * Container: h-[393px] rounded-[40px]
         */}
        <div className="hidden md:block relative pt-[88px]">

          {/* Lavender info container */}
          <div className="relative bg-yuni-lavender rounded-[40px] h-[393px]">
            <div className="w-full max-w-[460px] h-full px-[40px] py-[36px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="font-heading font-bold text-[22px] text-yuni-navy transition-all duration-300">
                    {displayState}
                  </h3>
                  <div className="w-[70px] h-[52px] relative">
                    <Image
                      src="/images/washington-state.png"
                      alt={displayState}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-[5px] mb-7">
                  {cityPairs.map((pair, i) => (
                    <div key={i} className="contents">
                      {pair.map((city) => (
                        <p key={city} className="text-[13px] text-yuni-text-mid m-0 font-body">
                          • {city}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn-outline w-fit">See More</button>
            </div>
          </div>

          {/* Map — floats above container, right aligned, responsive width */}
          <div className="absolute top-0 right-0 w-[55%] xl:w-[726px] h-[437px] rounded-[24px] overflow-hidden z-10">
            <Image
              src="/images/us-map.png"
              alt="US Map"
              fill
              className="object-cover object-top-left"
              priority
            />
            <MapOverlay />
          </div>

        </div>

      </div>
    </section>
  )
}