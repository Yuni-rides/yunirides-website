import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StateServicePage from "../features/state/components/StateServicePage";
import { getStateBySlug, statesData } from "../features/data/statesData";

export async function generateStaticParams() {
  return statesData.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const data = getStateBySlug(state);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://www.yunirides.com/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.yunirides.com/${data.slug}`,
      images: [{ url: data.heroImage, width: 1200, height: 630, alt: data.heroTitle }],
      type: "website",
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = getStateBySlug(state);

  if (!data) notFound();

  return <StateServicePage data={data} />;
}