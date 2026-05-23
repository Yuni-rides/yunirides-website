"use client";

import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Job {
  title: string;
  location: string;
  jobType: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  whatWeOffer: string[];
}

interface Props {
  job: Job | null;
  slug: string;
}

// ─── Section Block ─────────────────────────────────────────────────────────────
function SectionBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-10">
      <h2
        className="text-lg font-bold text-[#822C89] mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function CareerDetailClient({ job, slug }: Props) {

  // 404 state
  if (!job) {
    return (
      <main className="min-h-screen bg-[#FAF8F0] flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-[#2C3979] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Position Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            This job listing doesn't exist or may have been removed.
          </p>
          <Link
            href="/careers"
            className="bg-[#822C89] hover:bg-[#6e2474] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
          >
            View All Positions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F0]" style={{ fontFamily: "var(--font-body)" }}>

      {/* ── HERO SECTION ───────────────────────────────────────────────── */}
      <section className="mx-4 mt-4 rounded-3xl bg-[#2C3979] px-6 py-16 lg:py-20 text-center">
        <h1
          className="text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {job.title}
        </h1>
        <p className="text-white/70 text-base mb-3">{job.location}</p>
        <p className="text-white/60 text-sm mb-8">
          <span className="font-semibold text-white/80">Job Type:</span>{" "}
          {job.jobType}
        </p>
        <button
          onClick={() =>
            document
              .getElementById("apply-form")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="bg-[#822C89] hover:bg-[#6e2474] text-white font-semibold text-sm px-10 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#822C89]/30 hover:-translate-y-0.5"
        >
          Apply
        </button>
      </section>

      {/* ── JOB DETAILS CARD ───────────────────────────────────────────── */}
      <section className="mx-4 mt-6 mb-6">
        <div className="bg-white rounded-2xl border border-[#EFF2FF] px-8 py-10 lg:px-12 max-w-3xl mx-auto">

          {/* Position Overview */}
          <div className="mb-10">
            <h2
              className="text-lg font-bold text-[#822C89] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Position Overview.
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              {job.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <SectionBlock
            title="Responsibilities."
            items={job.responsibilities}
          />

          {/* Requirements */}
          <SectionBlock
            title="Requirements."
            items={job.requirements}
          />

          {/* What We Offer */}
          <SectionBlock
            title="What We Offer."
            items={job.whatWeOffer}
          />
        </div>
      </section>

      {/* ── APPLY FORM SECTION ─────────────────────────────────────────── */}
      <section id="apply-form" className="mx-4 mb-16 max-w-3xl mx-auto">
        {/* 
          Driver form component jo pehle banaya tha woh yahan use karein.
          Example:
          <DriverApplicationForm jobTitle={job.title} />
        */}
        <div className="bg-white rounded-2xl border border-[#EFF2FF] px-8 py-10 lg:px-12 text-center">
          <p className="text-gray-500 text-sm">
            Application form goes here — plug in your existing driver form component.
          </p>
        </div>
      </section>

    </main>
  );
}