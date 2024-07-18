"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden  transition dark:text-white dark:bg-white/10 ">
        <div className="group pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col items-start gap-3 h-full">
          <div className="flex flex-col gap-3 items-start ">
            <h3 className="text-2xl font-semibold group-hover:text-pink dark:group-hover:text-yellow hover:underline">
              {title}
            </h3>

            {projectUrl ? (
              <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-300">
                <Link
                  href={projectUrl}
                  target="_blank"
                  className="w-full flex items-center gap-1  hover:underline underline-offset-2"
                >
                  <span className="break-keep">Code</span>

                  <FaGithubSquare className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              <></>
            )}

            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
            />
          </div>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-auto gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
