import type { Metadata } from "next";
import CareerDetailClient from "@/components/CareersDetailClient";

// ─── Static Job Data ───────────────────────────────────────────────────────────
const JOBS: Record<string, {
  title: string;
  location: string;
  jobType: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  whatWeOffer: string[];
}> = {
  "driver-partner": {
    title: "Driver Partner",
    location: "Arizona",
    jobType: "Full-Time / Part-Time / Flexible",
    overview:
      "We are looking for responsible and motivated drivers to join the Yuni Rides network. As a Driver Partner, you will provide safe, comfortable, and reliable transportation to passengers while enjoying flexible working hours and competitive earnings.",
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
      "Maintain a courteous, well-groomed, and respectful demeanor at all times.",
    ],
    whatWeOffer: [
      "Drive on your schedule — choose when and how often you want to work.",
      "Earn fairly with clear payout structures and no hidden deductions.",
      "Receive consistent and timely weekly payments directly to your account.",
      "Unlock additional earnings through milestone bonuses and performance-based rewards.",
      "Access dedicated support whenever you need assistance on the road.",
      "Advance within the platform through performance recognition and leadership opportunities.",
    ],
  },
  "senior-software-engineer": {
    title: "Senior Software Engineer",
    location: "Remote",
    jobType: "Full-Time",
    overview:
      "Build scalable systems powering millions of rides. Work on cutting-edge technology with a passionate team committed to transforming urban mobility.",
    responsibilities: [
      "Design, develop, and maintain high-performance backend and frontend systems.",
      "Collaborate with product and design teams to deliver exceptional user experiences.",
      "Lead code reviews and mentor junior engineers.",
      "Identify and resolve performance bottlenecks and architectural issues.",
      "Contribute to technical roadmap and engineering best practices.",
    ],
    requirements: [
      "5+ years of professional software engineering experience.",
      "Strong proficiency in TypeScript, React, and Node.js.",
      "Experience with cloud platforms (AWS, GCP, or Azure).",
      "Solid understanding of distributed systems and microservices.",
      "Excellent communication and collaboration skills.",
    ],
    whatWeOffer: [
      "Competitive salary and equity package.",
      "Fully remote work with flexible hours.",
      "Health, dental, and vision benefits.",
      "Annual learning and development budget.",
      "Work with a passionate, mission-driven team.",
    ],
  },
  "product-manager": {
    title: "Product Manager",
    location: "New York, NY",
    jobType: "Full-Time",
    overview:
      "Shape the future of urban mobility. Lead cross-functional teams to deliver exceptional rider and driver experiences at Yunirides.",
    responsibilities: [
      "Define product vision, strategy, and roadmap aligned with business goals.",
      "Collaborate with engineering, design, and data teams to ship impactful features.",
      "Gather and prioritize requirements from stakeholders and customers.",
      "Analyze metrics and user feedback to drive continuous improvement.",
      "Communicate product decisions clearly across the organization.",
    ],
    requirements: [
      "3+ years of product management experience.",
      "Strong analytical and problem-solving skills.",
      "Experience working with agile development teams.",
      "Excellent written and verbal communication skills.",
      "Passion for transportation and urban mobility.",
    ],
    whatWeOffer: [
      "Competitive compensation and benefits package.",
      "Opportunity to shape a category-defining product.",
      "Collaborative, inclusive work environment.",
      "Career growth and leadership opportunities.",
      "Flexible work arrangements.",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS[slug];

  if (!job) {
    return {
      title: "Position Not Found | Careers – Yunirides",
    };
  }

  return {
    title: `${job.title} – ${job.location} | Careers at Yunirides`,
    description: job.overview,
    keywords: [
      job.title,
      "Yunirides careers",
      "jobs at Yunirides",
      job.location,
      job.jobType,
    ],
    openGraph: {
      title: `${job.title} | Yunirides Careers`,
      description: job.overview,
      url: `https://yunirides.com/careers/${slug}`,
      siteName: "Yunirides",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} | Yunirides Careers`,
      description: job.overview,
    },
    alternates: {
      canonical: `https://yunirides.com/careers/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = JOBS[slug] ?? null;

  return <CareerDetailClient job={job} slug={slug} />;
}