"use client";

import Link from "next/link";
import CareerForm from "./CareerForm";

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

function SectionBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-bold text-yuni-navy mb-3 font-heading">
        {title}
      </h2>
      <ul className="list-none space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-yuni-text-mid leading-relaxed"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yuni-text-mid shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareerDetailClient({ job, slug }: Props) {
  if (!job) {
    return (
      <main className="min-h-screen bg-yuni-cream flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yuni-navy mb-4 font-heading">
            Position Not Found
          </h1>
          <p className="text-yuni-text-mid mb-8">
            This job listing doesn't exist or may have been removed.
          </p>
          <Link
            href="/careers"
            className="bg-yuni-purple hover:bg-[#6e2474] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
          >
            View All Positions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body">
      <section className="mx-4 mt-4 bg-yuni-navy rounded-3xl text-center px-6 py-16 lg:py-20 mt-26">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold !text-white mb-3 font-heading">
          {job.title}
        </h1>
        <p className="text-white/70 text-base mb-2">{job.location}</p>
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
          className="btn-primary"
        >
          Apply
        </button>
      </section>

      <section className="w-full px-6 md:px-16 lg:px-24 py-6">
        <div className="w-full bg-yuni-lavender rounded-2xl px-6 md:px-10 py-8">
          <div className="mb-8">
            <h2 className="text-base font-bold text-yuni-navy mb-3 font-heading">
              Position Overview.
            </h2>
            <p className="text-sm text-yuni-text-mid leading-relaxed">
              {job.overview}
            </p>
          </div>

          <SectionBlock
            title="Responsibilities."
            items={job.responsibilities}
          />
          <SectionBlock title="Requirements." items={job.requirements} />
          <SectionBlock title="What We Offer." items={job.whatWeOffer} />
        </div>
      </section>

      <div id="apply-form">
        <CareerForm source={`Career Page - ${job.location}`} />
      </div>
    </main>
  );
}
