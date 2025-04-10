"use client";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Image from "next/image";
import { useState } from "react";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "FPSBlogs",
      link: "https://blog-app-psi-jade.vercel.app/",
      image: "/socialapp.png",
    },
    null,

    null,
    {
      title: "Amazon",
      link: "https://amazon-clone-sigma-ashen.vercel.app/",
      image: "/amazon-clone.png",
    },

    null,
    {
      title: "NextAI",
      link: "http://ec2-35-176-122-105.eu-west-2.compute.amazonaws.com/",
      image: "/chat-app.png",
    },
    {
      title: "Coming Soon",
      link: "/",
      image: "/placeholder.jpg",
    },
    null,
    {
      title: "Coming Soon",
      link: "/",
      image: "/placeholder.jpg",
    },
    null,
    null,
    {
      title: "Coming Soon",
      link: "/",
      image: "/placeholder.jpg",
    },
    null,
    {
      title: "Coming Soon",
      link: "/",
      image: "/placeholder.jpg",
    },
    {
      title: "Coming Soon",
      link: "/",
      image: "/placeholder.jpg",
    },
    null,
  ];

  return (
    <div className="min-h-screen bg-black text-white ">
      <section className="min-h-screen flex items-center px-4 sm:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div className="space-y-8">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none"
            >
              HAMZA KHAN
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="text-3xl sm:text-4xl md:text-5xl "
            >
              FULL STACK DEVELOPER
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="flex gap-6 items-center"
            >
              <motion.a
                href="https://github.com/DevKhan786"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="text-neutral-400 hover:text-white"
              >
                <SiGithub className="text-5xl sm:text-6xl" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/hamzakhan786"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="text-neutral-400 hover:text-white"
              >
                <SiLinkedin className="text-5xl sm:text-6xl" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-black w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative w-full overflow-hidden bg-black "
              style={{ aspectRatio: "16/9" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "0px", amount: 0.2 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {project ? (
                <motion.a
                  href={project.link}
                  target={project.title === "Coming Soon" ? "_self" : "_blank"}
                  className="block h-full w-full relative"
                  whileHover={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    style={{
                      filter:
                        project.title === "Coming Soon" &&
                        hoveredIndex === index
                          ? "grayscale(1) sepia(1) hue-rotate(0deg) saturate(4)"
                          : hoveredIndex === index
                          ? "grayscale(0) saturate(2)"
                          : "grayscale(0.7)",
                      transition: "filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />

                  <motion.div
                    className="absolute bottom-2 left-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-sm font-medium text-white/90 bg-black/40 px-2 py-1 rounded">
                      {project.title}
                    </h3>
                  </motion.div>
                </motion.a>
              ) : (
                <div
                  className="h-full w-full bg-black"
                  style={{ aspectRatio: "16/9" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
