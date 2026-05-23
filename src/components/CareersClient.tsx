"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DriverCoreValues from "@/components/DriverCoreValues";
import DriverForm from "@/components/DriverForm";

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  state: string;
  description: string;
  slug: string;
}

const ALL_JOBS: Job[] = [
  { id: 1, title: "Driver Partner – Flexible Schedule", type: "Full-Time / Part-Time / Flexible", location: "Arizona", state: "Arizona", description: "Flexible working hours (You choose when to drive). Competitive and transparent earnings. Weekly payout system.", slug: "driver-partner" },
  { id: 2, title: "Full-Time Driver Partner", type: "Full-Time / Part-Time / Flexible", location: "California", state: "California", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 3, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Texas", state: "Texas", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 4, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Illinois", state: "Illinois", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 5, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Texas", state: "Texas", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 6, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Illinois", state: "Illinois", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 7, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Illinois", state: "Illinois", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 8, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Texas", state: "Texas", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 9, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Illinois", state: "Illinois", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
  { id: 10, title: "City Driver – Immediate Openings", type: "Full-Time / Part-Time / Flexible", location: "Illinois", state: "Illinois", description: "Flexible working hours (You choose when to drive).", slug: "driver-partner" },
];

const US_STATES = ["All States", "Arizona", "California", "Texas", "Illinois", "New York", "Remote"];
const SORT_OPTIONS = ["A–Z", "Z–A", "Newest", "Oldest"];

// ─── Job Row ──────────────────────────────────────────────────────────────────
function JobRow({ job, isFirst }: { job: Job; isFirst: boolean }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className={`block w-full px-4 py-4 rounded-xl mb-2 group transition-all duration-200 ${
        isFirst
          ? "bg-[#2C3979]"
          : "bg-white border border-gray-100 hover:border-[#822C89]/20 hover:shadow-sm"
      }`}
    >
      {/* Title + job type row */}
      <div className="flex items-start justify-between gap-2 mb-1 min-w-0">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span
              className={`font-semibold text-sm leading-snug ${isFirst ? "text-white" : "text-[#2C3979]"}`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {job.title}
            </span>
            <span className={`text-xs ${isFirst ? "text-white/30" : "text-gray-300"}`}>|</span>
            <span className={`text-xs ${isFirst ? "text-white/60" : "text-gray-400"}`}>
              <span className={`font-semibold ${isFirst ? "text-white/80" : "text-gray-500"}`}>Job Type:</span>{" "}
              <span className="break-words">{job.type}</span>
            </span>
          </div>
          {/* Description */}
          <p className={`text-xs leading-relaxed mt-1 line-clamp-1 ${isFirst ? "text-white/50" : "text-gray-400"}`}>
            {job.description}
          </p>
        </div>
        {/* Location + arrow */}
        <div className="flex items-center gap-1 shrink-0 ml-2">
          <span className={`text-xs font-medium whitespace-nowrap ${isFirst ? "text-white" : "text-gray-600"}`}>
            {job.location}
          </span>
          <svg
            className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${isFirst ? "text-white/70" : "text-gray-400"}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function CareersClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const [sortBy, setSortBy] = useState("A–Z");
  const [sortOpen, setSortOpen] = useState(false);

  const filteredJobs = ALL_JOBS.filter((job) => {
    const matchesSearch = searchQuery === "" || job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState === "All States" || job.state === selectedState;
    return matchesSearch && matchesState;
  }).sort((a, b) => {
    if (sortBy === "A–Z") return a.title.localeCompare(b.title);
    if (sortBy === "Z–A") return b.title.localeCompare(a.title);
    return 0;
  });

  const scrollToJobs = () => {
    document.getElementById("job-listings")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF8F0] overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="w-full px-3 pt-3">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#2C3979]">

          {/* MOBILE layout */}
          <div className="flex flex-col md:hidden">
            <div className="relative w-full h-48">
              <Image
                src="/images/careers-hero.png"
                alt="Drive Your Future Forward"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#2C3979] to-transparent" />
            </div>
            <div className="px-5 pt-3 pb-8">
              <h1 className="text-2xl font-bold text-white leading-tight mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Drive Your Future Forward.
              </h1>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.
              </p>
              <button
                onClick={scrollToJobs}
                className="bg-[#822C89] hover:bg-[#6e2474] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                See Open Position
              </button>
            </div>
          </div>

          {/* DESKTOP layout */}
          <div className="hidden md:flex items-stretch min-h-[460px] lg:min-h-[500px]">
            <div className="flex flex-col justify-center px-10 lg:px-16 py-16 w-1/2 relative z-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Drive Your <br />Future Forward.
              </h1>
              <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-8 max-w-sm">
                Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.
              </p>
              <button
                onClick={scrollToJobs}
                className="w-fit bg-[#822C89] hover:bg-[#6e2474] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#822C89]/30 hover:-translate-y-0.5"
              >
                See Open Position
              </button>
            </div>
            <div className="relative w-1/2">
              <Image
                src="/images/careers-hero.png"
                alt="Drive Your Future Forward"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2C3979] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR ───────────────────────────────────────────────────── */}
      <section className="w-full px-3 mt-3">
        <div className="w-full bg-white rounded-2xl shadow-md px-4 py-4">
          <p className="text-[#2C3979] font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Explore Open Positions
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <input
              type="text"
              placeholder="Search job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#822C89] focus:ring-2 focus:ring-[#822C89]/10 transition-all"
            />
            <div className="relative w-full sm:w-40">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#822C89] bg-white cursor-pointer"
              >
                {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="w-full sm:w-auto bg-[#2C3979] hover:bg-[#232e63] text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-200">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── JOB LISTINGS ─────────────────────────────────────────────────── */}
      <section id="job-listings" className="w-full px-3 pt-8 pb-6">

        {/* Header: count + sort */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <p className="text-xs font-bold text-[#2C3979] uppercase tracking-wide leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Showing 1–{filteredJobs.length} out<br className="sm:hidden" /> total {ALL_JOBS.length} Jobs Open.
          </p>

          <div className="relative shrink-0">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600 bg-white hover:border-[#822C89]/30 transition-all whitespace-nowrap"
            >
              Sort by ({sortBy})
              <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-100 rounded-xl shadow-lg z-30 overflow-hidden">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSortBy(opt); setSortOpen(false); }}
                    className={`w-full text-left px-3 py-2.5 text-xs transition-colors ${
                      sortBy === opt ? "text-[#822C89] bg-[#822C89]/5 font-semibold" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Job rows — full width */}
        {filteredJobs.length > 0 ? (
          <div className="w-full">
            {filteredJobs.map((job, index) => (
              <JobRow key={job.id} job={job} isFirst={index === 0} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 w-full">
            <div className="w-12 h-12 rounded-full bg-[#EFF2FF] flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[#822C89]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[#2C3979] mb-1" style={{ fontFamily: "var(--font-heading)" }}>No positions found</h3>
            <p className="text-gray-400 text-xs">Try adjusting your search or state.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedState("All States"); }}
              className="mt-3 text-xs text-[#822C89] underline underline-offset-2 hover:text-[#6e2474] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* ── DRIVER CORE VALUES ────────────────────────────────────────────── */}
      <DriverCoreValues />

      {/* ── DRIVER FORM ───────────────────────────────────────────────────── */}
      <DriverForm />

    </main>
  );
}