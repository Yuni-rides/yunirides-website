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


const statePaths: Record<string, string> = {
  Washington: "M 18,18 L 80,15 L 85,22 L 82,28 L 85,45 L 68,52 L 45,55 L 20,57 L 12,50 L 15,35 Z",
  California:  "M 5,125 L 52,118 L 58,135 L 55,180 L 45,210 L 28,228 L 8,232 L 0,218 L 2,175 L 0,140 Z",
  Arizona:     "M 42,195 L 102,190 L 108,255 L 42,258 Z",
  Texas:       "M 120,220 L 200,215 L 215,225 L 222,240 L 218,255 L 225,268 L 205,295 L 185,310 L 160,308 L 140,295 L 128,275 L 122,255 Z",
  Illinois:    "M 224,108 L 250,106 L 253,145 L 248,168 L 238,178 L 226,175 L 222,155 L 222,130 Z",
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

  return (
    <section className="bg-yuni-cream py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

      
        <div className="text-center mb-12">
          <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-[28px] rounded-full text-[14px] font-medium mb-4 font-body">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-[#2C3979] mb-4">
            Areas we Serve in
          </h2>
          <p className="text-[#4A4A6A] text-[15px] max-w-7xl mx-auto leading-[1.7] font-body">
            From fleet maintenance and routing logistics to onboard bus technologies that keep everyone safe.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] bg-yuni-lavender rounded-[24px] overflow-hidden min-h-[380px]">


          <div className="p-[32px_28px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <h3 className="font-heading font-bold text-[22px] text-[#2C3979] transition-all duration-300">
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

              <div className="grid grid-cols-2 gap-x-3 gap-y-[5px] mb-7">
                {cityPairs.map((pair, i) => (
                  <div key={i} className="contents">
                    {pair.map((city) => (
                      <p key={city} className="text-[13px] text-[#4A4A6A] m-0 font-body">
                        • {city}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

         <button className="btn-outline">See More</button>
          </div>

          
          <div className="relative min-h-[380px]">
            <Image
              src="/images/us-map.png"
              alt="US Map"
              fill
              className="object-cover object-left-center"
            />
            <svg
              viewBox="0 0 415 380"
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 10 }}
            >
              {Object.entries(statePaths).map(([state, path]) => {
                const isHovered = hoveredState === state
                const isActive  = activeState === state
                return (
                  <path
                    key={state}
                    d={path}
                    fill={
                      isHovered
                        ? 'rgba(130,44,137,0.45)'
                        : isActive
                        ? 'rgba(130,44,137,0.20)'
                        : 'transparent'
                    }
                    stroke={isHovered || isActive ? '#822C89' : 'transparent'}
                    strokeWidth="1.5"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredState(state)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => {
                      setActiveState(state)
                      setHoveredState(null)
                    }}
                  />
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}