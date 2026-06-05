"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../shared/Button";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#E5EAFF] rounded-t-2xl px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[22px] text-[#353637] font-body font-medium">
          Sign up today and start earning additional income.
        </p>

        <Link href={"/contact-us"}>
          <Button
            label="Join Us"
            bgColor="bg-yuni-purple"
            textColor="text-white"
            borderColor="border-yuni-purple"
            hoverBgValue="white"
            hoverTextValue="yuni-purple"
          />
        </Link>
      </div>

      <div className="bg-yuni-purple px-6 sm:px-16 pt-14 pb-9">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-yuni-darkPurple rounded-2xl px-6 sm:px-8 py-5 mb-14 gap-4">
          <span className="text-white text-[17px] font-semibold font-body whitespace-nowrap">
            Subscribe to our newsletter
          </span>
          <div className="flex gap-3 w-full sm:flex-1 sm:max-w-[520px]">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-5 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white text-[14px] outline-none placeholder:text-white/50 focus:border-white/60 transition-colors font-body"
            />

            <Button
              label="Submit"
              bgColor="bg-[#F5F0E8]"
              textColor="text-[#3D1566]"
              borderColor="border-transparent"
              hoverBgValue="yuni-purple"
              hoverTextValue="white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 items-start">
          <div className="flex flex-col">
            <Image
              src="/images/logowhite.png"
              alt="Yuni Rides"
              width={160}
              height={60}
              className="object-contain object-left"
            />
            <p className="font-heading font-black text-[28px] sm:text-[36px] text-white leading-[1.2] mt-10 m-0 uppercase tracking-wide">
              SAFE AND
              <br />
              RELIABLE SCHOOL
              <br />
              TRANSPORTATION
            </p>
          </div>

          <div className="flex gap-0 border-l border-r border-white/20 px-6 sm:px-8">
            <div className="flex flex-col gap-5 flex-1">
              {[
                { label: "Home", href: "/", active: true },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[14px] no-underline transition-colors duration-200 font-body !text-white ${
                    item.active
                      ? "font-semibold"
                      : "font-normal hover:!text-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-5 flex-1 border-l border-white/20 pl-5">
              {[{ label: "Become A Driver", href: "/become-a-driver" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="!text-white/60 text-[14px] no-underline font-normal font-body hover:!text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-5 flex-1 border-l border-white/20 pl-5">
              <Link
                href="/contact-us"
                className="!text-white/60 text-[14px] no-underline font-normal font-body hover:!text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:pl-2">
            <p className="text-white text-[17px] font-semibold m-0 mb-5 font-body">
              Contact Us:
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href="https://wa.me/14155352155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 !text-white no-underline text-[14px] font-body hover:!text-white/75 transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.843.002-2.63-1.023-5.101-2.886-6.968C16.582 1.928 14.102.905 11.493.905c-5.441 0-9.866 4.412-9.87 9.846-.002 1.638.43 3.237 1.25 4.646l-.993 3.626 3.767-.989zM17.61 14.39c-.33-.166-1.95-.964-2.252-1.074-.303-.11-.523-.166-.743.166-.22.33-.853 1.074-1.046 1.3-.192.225-.385.25-.715.084-.33-.166-1.393-.513-2.654-1.638-.98-.874-1.642-1.954-1.834-2.284-.192-.33-.02-.508.145-.672.148-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.166-.743-1.79-.1019-2.426-.269-.65-.523-.55-.743-.56-.192-.01-.413-.01-.633-.01-.22 0-.578.083-.88.413-.303.33-1.155 1.13-1.155 2.753 0 1.623 1.182 3.193 1.346 3.413.165.22 2.328 3.555 5.64 4.987.788.34 1.405.544 1.884.697.792.25 1.513.215 2.083.13.635-.094 1.95-.798 2.225-1.568.275-.77.275-1.43.193-1.568-.083-.138-.303-.22-.633-.386z" />
                  </svg>
                </span>
                415-535-2155
              </a>
              <a
                href="mailto:info@yunirides.com"
                className="flex items-center gap-3 !text-white no-underline text-[14px] font-body hover:!text-white/75 transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                info@yunirides.com
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61581311652198"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors duration-200 active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yuniridesofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors duration-200 active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="white"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/109515190/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors duration-200 active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com/Yuni_rides"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors duration-200 active:scale-95"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/50 text-[12px] m-0 font-body">
            Yunirides® is a registered trademark | © 2026 Yunirides | All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
