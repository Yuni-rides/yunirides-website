'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import CareerBanner from '@/app/features/careers/components/Careerbanner'
import DriverCoreValues from '@/app/features/driver/components/DriverCoreValues'
import DriverForm from '@/components/shared/DriverForm'

interface Job {
  id: number
  title: string
  type: string
  location: string
  state: string
  description: string
  slug: string
}

const ALL_JOBS: Job[] = [
  { id: 1, title: 'Driver Partner – Flexible Schedule', type: 'Full-Time / Part-Time / Flexible', location: 'Arizona', state: 'Arizona', description: 'Flexible working hours (You choose when to drive). Competitive and transparent earnings. Weekly payout system.', slug: 'driver-partner' },
  { id: 2, title: 'Full-Time Driver Partner', type: 'Full-Time / Part-Time / Flexible', location: 'California', state: 'California', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 3, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Texas', state: 'Texas', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 4, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Illinois', state: 'Illinois', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 5, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Texas', state: 'Texas', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 6, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Illinois', state: 'Illinois', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 7, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Illinois', state: 'Illinois', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 8, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Texas', state: 'Texas', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 9, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Illinois', state: 'Illinois', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
  { id: 10, title: 'City Driver – Immediate Openings', type: 'Full-Time / Part-Time / Flexible', location: 'Illinois', state: 'Illinois', description: 'Flexible working hours (You choose when to drive).', slug: 'driver-partner' },
]

const US_STATES = ['All States', 'Arizona', 'California', 'Texas', 'Illinois', 'New York', 'Remote']
const SORT_OPTIONS = ['A–Z', 'Z–A', 'Newest', 'Oldest']

function JobRow({ job, isFirst, index }: { job: Job; isFirst: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileTap={{ scale: 0.99 }}
    >
      <Link
        href={`/careers/${job.slug}`}
        className={`flex items-center justify-between w-full px-6 py-[10px] group transition-all duration-150 ${
          isFirst ? 'bg-[#2C3979] rounded-[20px] mb-0' : 'bg-white border-b border-gray-100 hover:bg-gray-50'
        }`}
      >
        <div className="flex-1 min-w-0 pr-3">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-0.5">
            <span className={`font-heading font-semibold text-sm ${isFirst ? 'text-white' : 'text-[#2C3979]'}`}>
              {job.title}
            </span>
            <span className={`text-xs ${isFirst ? 'text-white/30' : 'text-gray-300'}`}>|</span>
            <span className={`text-xs ${isFirst ? 'text-white/70' : 'text-gray-500'}`}>
              <span className={`font-medium ${isFirst ? 'text-white/90' : 'text-gray-700'}`}>Job Type:</span>{' '}
              {job.type}
            </span>
          </div>
          <p className={`text-xs line-clamp-1 ${isFirst ? 'text-white/50' : 'text-gray-400'}`}>
            {job.description}
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className={`text-xs font-medium whitespace-nowrap ${isFirst ? 'text-white' : 'text-gray-600'}`}>
            {job.location}
          </span>
          <svg className={`w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform ${isFirst ? 'text-white/70' : 'text-gray-400'}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CareersClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('All States')
  const [sortBy, setSortBy] = useState('A–Z')
  const [sortOpen, setSortOpen] = useState(false)

  const filteredJobs = ALL_JOBS.filter((job) => {
    const matchesSearch = searchQuery === '' || job.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesState = selectedState === 'All States' || job.state === selectedState
    return matchesSearch && matchesState
  }).sort((a, b) => {
    if (sortBy === 'A–Z') return a.title.localeCompare(b.title)
    if (sortBy === 'Z–A') return b.title.localeCompare(a.title)
    return 0
  })

  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body">

      {/* ── BANNER ── */}
      <CareerBanner />

      {/* ── SEARCH BOX ── */}
      <div className="bg-yuni-cream py-4 px-4 md:px-[79px]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-[16px] overflow-hidden"
        >
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4 px-8 py-4">
            <span className="font-heading text-[#2C3979] font-semibold text-sm whitespace-nowrap shrink-0">
              Explore Open Positions
            </span>
            <div className="w-px h-6 bg-gray-200 shrink-0" />
            <input
              type="text"
              placeholder="Search job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#822C89] focus:ring-1 focus:ring-[#822C89]/20 transition-all"
            />
            <div className="relative w-44 shrink-0">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#822C89] bg-white cursor-pointer"
              >
                {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="btn-secondary shrink-0">Search</button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden flex-col gap-3 px-4 py-4">
            <span className="font-heading text-[#2C3979] font-semibold text-sm">Explore Open Positions</span>
            <input
              type="text"
              placeholder="Search job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#822C89] transition-all"
            />
            <div className="relative w-full">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none bg-white cursor-pointer"
              >
                {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="btn-secondary w-full">Search</button>
          </div>
        </motion.div>
      </div>

      {/* ── JOB LISTINGS ── */}
      <section id="job-listings" className="w-full bg-yuni-cream pt-4 pb-10">

        {/* Header */}
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 mb-3 px-4 md:px-[79px] flex-wrap">
          <p className="font-heading font-bold text-[30px] leading-[53px] text-[#2C3979]">
            SHOWING 1–{filteredJobs.length} OUT TOTAL {ALL_JOBS.length} JOBS OPEN.
          </p>
          <div className="relative shrink-0">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 bg-white hover:border-[#822C89]/30 transition-all whitespace-nowrap"
            >
              Sort by ({sortBy})
              <svg className={`w-3 h-3 text-gray-400 transition-transform ${sortOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {sortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-100 rounded-xl shadow-lg z-30 overflow-hidden"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <button key={opt} onClick={() => { setSortBy(opt); setSortOpen(false) }}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors ${sortBy === opt ? 'text-[#822C89] bg-[#822C89]/5 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Jobs */}
        {filteredJobs.length > 0 ? (
          <div className="max-w-7xl mx-auto bg-white px-4 md:px-[79px] py-2">
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <JobRow key={job.id} job={job} isFirst={index === 0} index={index} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 mx-4 md:mx-[79px] bg-white rounded-2xl border border-gray-100"
          >
            <p className="text-sm text-gray-400 mb-2">No positions found</p>
            <button onClick={() => { setSearchQuery(''); setSelectedState('All States') }}
              className="text-xs text-[#822C89] underline underline-offset-2">
              Clear filters
            </button>
          </motion.div>
        )}
      </section>

    
      <DriverCoreValues />
      <DriverForm />
    </main>
  )
}