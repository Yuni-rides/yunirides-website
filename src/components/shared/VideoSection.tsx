"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const videos = [
  {
    id: "nmRxyZdwbcQ",
    label: "Because Every Journey Matters.",
    image: "/images/video-thumb.png",
  },
  {
    id: "exKP6yaxu-c",
    label: "Real Families. Real Care.",
    image: "/images/video2.png",
  },
  {
    id: "uaCN81KJ9HA",
    label: "Safe Rides, Real Impact.",
    image: "/images/video3.png",
  },
  {
    id: "QT91AHiOdLo",
    label: "Stories That Build Trust",
    image: "/images/video4.png",
  },
];

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function VideoSection({
  label = "Serving others with Safety",
}: {
  label?: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const playerRef = useRef<any>(null);
  const activeIdxRef = useRef(0);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    if (!document.getElementById("yt-api-script")) {
      const script = document.createElement("script");
      script.id = "yt-api-script";
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }

    function initPlayer() {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: videos[0].id,
        playerVars: {
          autoplay: 1,
          mute: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          controls: 1,
        },
        events: {
          onStateChange: (event: any) => {
            if (
              event.data === 0 ||
              event.data === window.YT?.PlayerState?.ENDED
            ) {
              const curr = activeIdxRef.current;
              const nextIdx = (curr + 1) % videos.length;

              setPrevIdx(curr);
              activeIdxRef.current = nextIdx;
              setActiveIdx(nextIdx);
              playerRef.current?.loadVideoById(videos[nextIdx].id);
            }
          },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, []);

  function handleSideClick(idx: number) {
    setPrevIdx(activeIdx);
    setActiveIdx(idx);
    activeIdxRef.current = idx;
    playerRef.current?.loadVideoById(videos[idx].id);
  }

  const sideVideos = videos.slice(1);

  return (
    <>
      <style>{`
        @keyframes pulse-border {
          0%   { box-shadow: inset 0 0 0 2px #822C89, inset 0 0 0 4px rgba(130,44,137,0.3); }
          50%  { box-shadow: inset 0 0 0 3px #822C89, inset 0 0 0 8px rgba(130,44,137,0.15); }
          100% { box-shadow: inset 0 0 0 2px #822C89, inset 0 0 0 4px rgba(130,44,137,0.3); }
        }
        @keyframes shimmer-in {
          0%   { opacity: 0; transform: scaleX(0); }
          100% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes label-glow {
          0%,100% { text-shadow: 0 0 0px rgba(255,255,255,0); }
          50%      { text-shadow: 0 0 8px rgba(255,255,255,0.8); }
        }
        .side-active {
          animation: pulse-border 2s ease-in-out infinite;
        }
        .side-active .active-bar {
          animation: shimmer-in 0.4s ease forwards;
        }
        .side-active .active-label {
          animation: label-glow 2s ease-in-out infinite;
        }
        .side-active img {
          opacity: 1 !important;
          transform: scale(1.04);
        }
        .side-active .side-overlay {
          background: rgba(130,44,137,0.18) !important;
        }
      `}</style>

      <section className="bg-[#FAF8F0] px-4 md:px-[40px] lg:px-[79px] md:pt-16  md:pb-20 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[#E5EAFF] text-[#4A4A6A] py-[7px] px-7 rounded-full text-[14px] font-medium font-body mb-6">
              {label}
            </span>
            <h2 className="font-heading font-bold text-[clamp(1.5rem,3vw,2rem)] text-[#2C3979] m-0">
              Your Safety Is Our Driving Force
            </h2>
          </div>

          <div className="w-full rounded-[20px] overflow-hidden border-[6px] border-[#822C89] box-border flex flex-col md:grid md:grid-cols-[1fr_415px] md:h-[645px]">
            <div className="relative bg-black h-[300px] md:h-full overflow-hidden">
              <div id="yt-player" className="absolute inset-0 w-full h-full" />
            </div>

            <div className="grid grid-rows-3 border-t-[2px] md:border-t-0 border-[#822C89]">
              {sideVideos.map((v, i) => {
                const idx = i + 1;
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={v.label}
                    onClick={() => handleSideClick(idx)}
                    className={`relative overflow-hidden cursor-pointer group md:border-l-[2px] border-[#822C89] transition-all duration-500
                      ${i < 2 ? "border-b border-[#822C89]/30" : ""}
                      ${isActive ? "side-active" : ""}
                    `}
                  >
                    <Image
                      src={v.image}
                      alt={v.label}
                      fill
                      className="object-cover transition-all duration-500"
                      style={{ opacity: isActive ? 1 : 0.75 }}
                    />

                    <div
                      className="side-overlay absolute inset-0 transition-all duration-500"
                      style={{
                        background: isActive
                          ? "rgba(130,44,137,0.18)"
                          : "rgba(0,0,0,0.30)",
                      }}
                    />

                    {isActive && (
                      <div className="active-bar absolute top-0 left-0 right-0 h-[3px] bg-[#822C89] origin-left" />
                    )}

                    <div className="absolute bottom-[14px] left-[14px] flex items-center gap-2 z-[2]">
                      <div
                        className="w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                          background: "#822C89",
                          transform: isActive ? "scale(1.15)" : "scale(1)",
                          boxShadow: isActive
                            ? "0 0 0 3px rgba(130,44,137,0.35)"
                            : "none",
                        }}
                      >
                        <Play size={10} fill="white" color="white" />
                      </div>
                      <p
                        className={`text-white font-body font-semibold text-[13px] m-0 transition-all duration-300 active-label ${isActive ? "opacity-100" : "opacity-80"}`}
                      >
                        {v.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
