'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const tabs = ['All', 'Press Release', 'Events', 'Technology', 'Marketing']

export default function BlogFilters() {
  const [active, setActive] = useState('All')

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          onClick={() => setActive(tab)}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2 rounded-full border-none cursor-pointer text-[13px] font-body transition-all duration-200 ${
            active === tab
              ? 'bg-[#E5EAFF] text-[#2C3979] font-semibold'
              : 'bg-transparent text-[#6A6A8A] font-normal hover:text-[#2C3979] hover:bg-[#E5EAFF]/50'
          }`}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  )
}