"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const sectionLan = useTranslations("SectionName");

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>

      <p className="mb-3">
        I love bringing dreams to life, both personally and professionally!
        <br />
        This passion has driven my career primarily in startups. I enjoy solving
        challenges and technical difficulties. As a man, I find fun and
        excitement in overcoming them. <br />
        &quot;Believe and face it&quot; I always say, diving into challenges
        bravely. 💪
      </p>

      <p className="mb-3">
        As a Senior Software Engineer with 10+ years of experience in web
        development, specialized in building web apps and websites using modern
        technologies like{" "}
        <span className="font-medium italic">
          React, Node, TypeScript, Next, and Remix
        </span>
        .
      </p>

      <p className="mb-3">
        In my spare time, I enjoy reading books and articles, especially about
        trending technologies.
        <br />
        On weekends, I enjoy playing sports, including table tennis, tennis, and
        badminton. I also enjoy playing video games. 😉
      </p>
    </motion.section>
  );
}
