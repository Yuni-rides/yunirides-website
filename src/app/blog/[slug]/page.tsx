import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Play } from "lucide-react";
import { blogPostsData } from "@/app/features/blog/data/blogsMockData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPostsData[resolvedParams.slug];

  return {
    title: post ? `${post.title} — Yunirides Blog` : "Blog — Yunirides",
    description: post ? post.excerpt : "Read the latest from Yunirides.",
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: [
        { url: post?.heroImage || "/og-image.png", width: 1200, height: 630 },
      ],
      type: "article",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPostsData[resolvedParams.slug];

  if (!post) {
    return (
      <div className="py-16 px-6 text-center font-body">
        <h2 className="text-[#2C3979] text-xl font-bold">Post Not Found</h2>
        <Link
          href="/blog"
          className="text-[#822C89] underline mt-4 inline-block text-sm"
        >
          Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F0] min-h-screen">
      {/* Banner Area */}
      <div className="relative w-full h-[320px] sm:h-[320px] md:h-[450px] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-top from-[#2C3979]/85 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 z-10">
          <h1 className="font-heading font-extrabold text-[clamp(1.2rem,2.5vw,1.8rem)] text-white m-0 Regal leading-snug max-w-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Container - Mobile pe Single Column, Desktop pe Sidebar Grid */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-start">
        {/* Left Sidebar - Mobile pe top aur flex-row settings */}
        <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-stretch gap-4 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#2C3979] no-underline text-[13px] font-semibold font-body bg-[#E5EAFF] px-4 py-2 rounded-full w-fit hover:opacity-90 transition-all shrink-0"
          >
            <ChevronLeft size={16} /> Blogs
          </Link>

          <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-row md:flex-col items-center gap-3 md:gap-4 shadow-[0_2px_12px_rgba(44,57,121,0.06)] border border-[#E5EAFF]/40 md:w-full">
            <div className="relative w-12 h-12 md:w-20 md:h-20 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Yunirides"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[12px] md:text-[13px] color-[#4A4A6A] font-body m-0 font-medium text-left md:text-center leading-tight">
              <span className="text-[#8888AA] block md:inline">Posted by:</span>{" "}
              By Yunirides
            </p>
          </div>
        </div>

        {/* Right Dynamic Content Area */}
        <div className="w-full">
          <p className="text-[12px] text-[#8888AA] font-body mb-4 md:mb-6 text-left md:text-right">
            {post.date}
          </p>

          <div className="prose-custom">
            {post.contentBlocks.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-[13px] text-[#4A4A6A] style-normal leading-[1.85] font-body mb-5 text-justify"
                    >
                      {block.text}
                    </p>
                  );

                case "heading":
                  return (
                    <h2
                      key={index}
                      className="font-heading font-bold text-[clamp(1.1rem,2vw,1.35rem)] text-[#822C89] mb-4 mt-7 leading-snug"
                    >
                      {block.text}
                    </h2>
                  );

                case "bullet-list":
                  return (
                    <ul
                      key={index}
                      className="pl-5 mb-5 text-[#4A4A6A] font-body text-[13px] list-disc space-y-2 leading-[1.85]"
                    >
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );

                case "image":
                  return (
                    <div
                      key={index}
                      className="relative w-full h-[180px] sm:h-[240px] rounded-2xl overflow-hidden my-6 shadow-sm"
                    >
                      <Image
                        src={block.src || ""}
                        alt={block.caption || "Blog asset"}
                        fill
                        className="object-cover"
                      />
                      {block.caption && (
                        <div className="absolute bottom-4 left-4 flex items-center gap-2.5 z-10">
                          <div className="w-8 h-8 rounded-full bg-[#822C89] flex items-center justify-center shadow">
                            <Play size={12} fill="white" color="white" />
                          </div>
                          <span className="text-white text-[13px] font-semibold font-body drop-shadow-sm">
                            {block.caption}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-top from-black/50 via-transparent to-transparent" />
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>

          {/* Marketing Conversion End Box */}
          <div className="mt-10 p-6 md:p-8 bg-[#822C89] rounded-2xl color-white text-center shadow-[0_4px_20px_rgba(130,44,137,0.12)] text-white">
            <h3 className="font-heading font-bold text-lg md:text-xl mb-2">
              Apply to Drive With Yuni Rides
            </h3>
            <p className="font-body text-[13px] max-w-[600px] mx-auto mb-6 opacity-90 leading-relaxed">
              Looking for a driving opportunity with predictable weekday
              schedules and consistent route assignments? Join Yuni Rides today
              and help make a difference in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/become-a-driver"
                className="w-full md:w-auto"
                style={{
                  backgroundColor: "#FAF8F0",
                  color: "#822C89",
                  padding: "12px 28px",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                }}
              >
                Apply Here
              </Link>
              <a
                href="tel:4155352155"
                className="w-full sm:w-auto border-2 border-[#FAF8F0] text-[#FAF8F0] px-6 py-2.5 rounded-full font-semibold text-[13px] text-center font-body hover:bg-[#FAF8F0]/10 transition-all"
              >
                Call Us: 415-535-2155
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
