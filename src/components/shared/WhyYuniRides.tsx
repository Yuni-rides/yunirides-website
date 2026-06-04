"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

export default function WhyYuniRides() {
  return (
    <section className="overflow-hidden bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-[#EFF2FF] rounded-[50px] px-8 py-[10px] mb-6">
            <span className="text-[15px] font-medium text-[#3D1566] font-body">
              Why <strong>Yuni Rides</strong>
            </span>
          </div>
          <p className="text-[15px] text-[#000000] leading-[1.75] md:max-w-3xl md:mx-auto text-center px-4 font-body">
            Choosing Yuni Rides means choosing a service that is built on the
            value of safety, trust, and care. We understand the importance of
            reliable transportation for children and take our role seriously.
            Every driver is carefully vetted, trained, and committed to
            delivering the highest standard of service. With Yuni Rides, you can
            have peace of mind knowing that your child is in good hands.
          </p>
        </motion.div>

        {/* Purple card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-center overflow-visible rounded-[40px] max-w-7xl mx-auto min-h-[360px]"
          style={{
            background: "linear-gradient(135deg, #B3359F 0%, #822C89 100%)",
          }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full md:w-[400px] lg:w-[500px] shrink-0 self-end md:-mb-[4px] max-h-[280px] md:max-h-none"
          >
            <Image
              src="/images/service4.png"
              alt="Yuni Rides team helping family"
              width={1280}
              height={1000}
              className="block object-contain object-bottom w-full"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-1 flex-col justify-center px-6 md:pl-8 md:pr-[52px] py-8 md:py-12"
          >
            <h2 className="font-heading text-[24px] md:text-[34px] font-bold text-white leading-[1.25] mb-6">
              We taking pride to be helping hand with the love and care
            </h2>
            <p className="font-body text-[13.5px] text-white/[0.88] leading-[1.8] mb-8 text-justify">
              At Yuni Rides, we take great pride in being a helping hand to our
              communities, offering transportation services with the love and
              care that every child deserves. Our mission goes beyond just
              getting children from one place to another — we are committed to
              making each journey a safe comfortable and compassionate.
            </p>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-fit"
            >
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
