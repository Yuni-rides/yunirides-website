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

// ─── Job Row — exact Figma: bottom border only, no card ───────────────────────
function JobRow({ job, isFirst }: { job: Job; isFirst: boolean }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className={`flex items-center justify-between w-full px-4 py-3 group transition-all duration-150 ${
        isFirst
          ? "bg-[#2C3979] rounded-xl mb-1"
          : "bg-white border-b border-gray-100 hover:bg-gray-50"
      }`}
    >
      <div className="flex-1 min-w-0 pr-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-0.5">
          <span
            className={`font-semibold text-sm ${isFirst ? "text-white" : "text-[#2C3979]"}`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {job.title}
          </span>
          <span className={`text-xs ${isFirst ? "text-white/30" : "text-gray-300"}`}>|</span>
          <span className={`text-xs ${isFirst ? "text-white/70" : "text-gray-500"}`}>
            <span className={`font-medium ${isFirst ? "text-white/90" : "text-gray-700"}`}>Job Type:</span>{" "}
            {job.type}
          </span>
        </div>
        <p className={`text-xs line-clamp-1 ${isFirst ? "text-white/50" : "text-gray-400"}`}>
          {job.description}
        </p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className={`text-xs font-medium whitespace-nowrap ${isFirst ? "text-white" : "text-gray-600"}`}>
          {job.location}
        </span>
        <svg
          className={`w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform ${isFirst ? "text-white/70" : "text-gray-400"}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

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
      <section className="relative w-full bg-[#2C3979] overflow-hidden">
          <div className="hidden md:flex items-center">
          
          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-12 w-[55%] relative z-10">
            <h1
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Drive Your <br />Future Forward.
            </h1>
            <p className="text-white/75 text-sm lg:text-base leading-relaxed mb-6 max-w-sm">
              Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.
            </p>
            <button
              onClick={scrollToJobs}
              className="w-fit bg-[#822C89] hover:bg-[#6e2474] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-[#822C89]/30"
            >
              See Open Position
            </button>
          </div>
         
          <div className="max-w-5xl mx-auto">
            <Image
              src="/images/careers-hero.png"
              alt="Drive Your Future Forward"
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#2C3979] to-transparent" />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col">
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
          <div className="px-5 pt-4 pb-8">
            <h1
              className="text-2xl font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Drive Your <br />Future Forward.
            </h1>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Turn every mile into opportunity. Join a driver-first platform designed to give you freedom, fair earnings, and the respect you deserve.
            </p>
            <button
              onClick={scrollToJobs}
              className="bg-[#822C89] hover:bg-[#6e2474] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
            >
              See Open Position
            </button>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR — full width white strip below hero ───────────────── */}
      <section className="w-full bg-white shadow-sm">
        {/* Desktop: single inline row */}
        <div className="hidden md:flex items-center gap-3 px-8 lg:px-16 xl:px-24 py-4">
          <span
            className="text-[#2C3979] font-semibold text-sm whitespace-nowrap shrink-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore Open Positions
          </span>
          <input
            type="text"
            placeholder="Search job"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#822C89] focus:ring-1 focus:ring-[#822C89]/20 transition-all"
          />
          <div className="relative w-40 shrink-0">
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
          <button className="bg-[#2C3979] hover:bg-[#232e63] text-white font-semibold text-sm px-7 py-2 rounded-lg transition-all whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Mobile: stacked */}
        <div className="flex md:hidden flex-col gap-2 px-4 py-4">
          <span className="text-[#2C3979] font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
            Explore Open Positions
          </span>
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
          <button className="w-full bg-[#2C3979] hover:bg-[#232e63] text-white font-semibold text-sm py-2.5 rounded-lg transition-all">
            Search
          </button>
        </div>
      </section>

      {/* ── JOB LISTINGS — full width, flat list ─────────────────────────── */}
      <section id="job-listings" className="w-full bg-[#FAF8F0] pt-6 pb-10">

        {/* Header: count + sort */}
        <div className="flex items-center justify-between gap-2 mb-3 px-4 md:px-8 lg:px-16 xl:px-24 flex-wrap">
          <p
            className="text-xs font-bold text-[#2C3979] uppercase tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Showing 1–{filteredJobs.length} out total {ALL_JOBS.length} Jobs Open.
          </p>
          <div className="relative shrink-0">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 bg-white hover:border-[#822C89]/30 transition-all whitespace-nowrap"
            >
              Sort by ({sortBy})
              <svg className={`w-3 h-3 text-gray-400 transition-transform ${sortOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-100 rounded-xl shadow-lg z-30 overflow-hidden">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSortBy(opt); setSortOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors ${sortBy === opt ? "text-[#822C89] bg-[#822C89]/5 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Job rows — white bg container, flat list */}
        {filteredJobs.length > 0 ? (
          <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-24 py-2">
            {filteredJobs.map((job, index) => (
              <JobRow key={job.id} job={job} isFirst={index === 0} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mx-4 md:mx-8 bg-white rounded-2xl border border-gray-100">
            <p className="text-sm text-gray-400 mb-2">No positions found</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedState("All States"); }}
              className="text-xs text-[#822C89] underline underline-offset-2"
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