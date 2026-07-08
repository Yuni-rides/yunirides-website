import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareerDetailClient from "@/app/features/careers/components/CareersDetailClient";

type JobData = {
  title: string;
  location: string;
  jobType: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  whatWeOffer: string[];
};

const STATES = ["Washington", "California", "Arizona", "Texas", "Illinois"];

const baseJob = (location: string): JobData => ({
  title: "City Driver – Immediate Openings",
  location,
  jobType: "Full-Time / Part-Time / Flexible",
  overview: `We are looking for responsible and motivated drivers to join the Yuni Rides network in ${location}. As a City Driver, you will provide safe, comfortable, and reliable transportation while enjoying flexible working hours and competitive earnings.`,
  responsibilities: [
    "Deliver a smooth, safe, and comfortable ride experience while representing Yuni Rides with professionalism and care.",
    "Strictly adhere to all traffic laws and local regulations to ensure passenger safety at all times.",
    "Keep your vehicle clean, well-maintained, and in excellent operating condition to meet platform standards.",
    "Create a positive rider experience through respectful communication and professional conduct.",
    "Manage ride requests, navigation, and trip updates seamlessly using the Yuni Rides driver application.",
    "Be dependable and timely to build trust with passengers and maintain high performance ratings.",
  ],
  requirements: [
    "Must possess a legally valid driver's license issued by the relevant authority.",
    "Applicants must be at least 21 years old to qualify for the platform.",
    "A safe driving history with no major violations is required.",
    "Own a properly registered vehicle that meets Yuni Rides safety and quality standards.",
    "Access to a smartphone capable of running the driver app efficiently.",
    "Ability to communicate clearly and professionally with passengers.",
  ],
  whatWeOffer: [
    "Drive on your schedule — choose when and how often you want to work.",
    "Earn fairly with clear payout structures and no hidden deductions.",
    "Receive consistent and timely weekly payments directly to your account.",
    "Unlock additional earnings through milestone bonuses and performance-based rewards.",
    "Access dedicated support whenever you need assistance on the road.",
  ],
});

const JOBS: Record<string, JobData> = Object.fromEntries(
  STATES.map((state) => [
    `${state.toLowerCase().replace(/\s+/g, "-")}`,
    baseJob(state),
  ]),
);

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS[slug];

  if (!job) {
    return { title: "Position Not Found | Careers – Yuni Rides" };
  }

  const canonical = `https://www.yunirides.com/careers/${slug}`;

  return {
    title: `${job.title} – ${job.location} | Careers at Yuni Rides`,
    description: job.overview,
    keywords: [job.title, "Yuni Rides careers", job.location, job.jobType],
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${job.title} | Yuni Rides Careers`,
      description: job.overview,
      url: canonical,
      siteName: "Yuni Rides",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} | Yuni Rides Careers`,
      description: job.overview,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(JOBS).map((slug) => ({ slug }));
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = JOBS[slug] ?? null;

  if (!job) notFound();

  return <CareerDetailClient job={job} slug={slug} />;
}
