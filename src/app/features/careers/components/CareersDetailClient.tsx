"use client";

import Link from "next/link";

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
          <li key={i} className="flex items-start gap-2 text-sm text-yuni-text-mid leading-relaxed">
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
          <Link href="/careers" className="bg-yuni-purple hover:bg-[#6e2474] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200">
            View All Positions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-yuni-cream overflow-x-hidden font-body">

    
      <section className="mx-4 mt-4 bg-yuni-navy rounded-3xl text-center px-6 py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold !text-white mb-3 font-heading">
          {job.title}
        </h1>
        <p className="text-white/70 text-base mb-2">{job.location}</p>
        <p className="text-white/60 text-sm mb-8">
          <span className="font-semibold text-white/80">Job Type:</span>{" "}
          {job.jobType}
        </p>
      <button
  onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
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

          <SectionBlock title="Responsibilities." items={job.responsibilities} />
          <SectionBlock title="Requirements." items={job.requirements} />
          <SectionBlock title="What We Offer." items={job.whatWeOffer} />
        </div>
      </section>


      <section id="apply-form" className="w-full px-6 md:px-16 lg:px-24 pb-16">
        <div className="w-full bg-yuni-lavender rounded-2xl px-6 md:px-10 py-10">

          <h2 className="text-3xl font-bold text-yuni-navy mb-2 text-center font-heading">
            How to Apply
          </h2>
          <p className="text-yuni-text-mid text-sm text-center mb-10">
            Complete the driver registration form.<br />Our onboarding team will contact you shortly.
          </p>

          <form className="space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs text-yuni-text-mid bg-yuni-lavender px-1 z-10">Full Name</label>
                <input type="text" className="w-full border-0 border-b border-yuni-border bg-yuni-lavender px-0 py-3 text-sm text-yuni-text-dark outline-none focus:border-yuni-purple transition-all" />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs text-yuni-text-mid bg-yuni-lavender px-1 z-10">Email</label>
                <input type="email" className="w-full border-0 border-b border-yuni-border bg-yuni-lavender px-0 py-3 text-sm text-yuni-text-dark outline-none focus:border-yuni-purple transition-all" />
              </div>
            </div>

       
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs text-yuni-text-mid bg-yuni-lavender px-1 z-10">Contact Number</label>
                <input type="tel" className="w-full border-0 border-b border-yuni-border bg-yuni-lavender px-0 py-3 text-sm text-yuni-text-dark outline-none focus:border-yuni-purple transition-all" />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs text-yuni-text-mid bg-yuni-lavender px-1 z-10">Enter your city or town name.</label>
                <input type="text" className="w-full border-0 border-b border-yuni-border bg-yuni-lavender px-0 py-3 text-sm text-yuni-text-dark outline-none focus:border-yuni-purple transition-all" />
              </div>
            </div>

       
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs text-yuni-text-mid bg-yuni-lavender px-1 z-10">What type of vehicle do you have?</label>
                <input type="text" className="w-full border-0 border-b border-yuni-border bg-yuni-lavender px-0 py-3 text-sm text-yuni-text-dark outline-none focus:border-yuni-purple transition-all" />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs text-yuni-text-mid bg-yuni-lavender px-1 z-10">How many years of experience do you have?</label>
                <input type="text" className="w-full border-0 border-b border-yuni-border bg-yuni-lavender px-0 py-3 text-sm text-yuni-text-dark outline-none focus:border-yuni-purple transition-all" />
              </div>
            </div>

            <div className="flex flex-wrap gap-10 pt-2">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-yuni-text-mid">Do you have SSN or ITN ?</span>
                <div className="flex gap-3">
                  <div className="w-8 h-8 border border-yuni-border rounded flex items-center justify-center bg-yuni-lavender">
                    <svg className="w-4 h-4 text-yuni-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 border border-yuni-border rounded bg-yuni-lavender" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs text-yuni-text-mid">Do you have a driving licensce?</span>
                <div className="flex gap-3">
                  <div className="w-8 h-8 border border-yuni-border rounded flex items-center justify-center bg-yuni-lavender">
                    <svg className="w-4 h-4 text-yuni-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 border border-yuni-border rounded bg-yuni-lavender" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs text-yuni-text-mid">Have you ever use any recreational drug before?</span>
                <div className="flex gap-3">
                  <div className="w-8 h-8 border border-yuni-border rounded bg-yuni-lavender" />
                  <div className="w-8 h-8 border border-yuni-border rounded flex items-center justify-center bg-yuni-lavender">
                    <svg className="w-4 h-4 text-yuni-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex justify-end pt-2">
              <button type="submit" className="btn-secondary">
               Submit
            </button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}