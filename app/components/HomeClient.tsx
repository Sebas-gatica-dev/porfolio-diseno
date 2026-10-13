"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getProjectHref } from "@/lib/data";
import type { Project } from "@/lib/models";

type HomeClientProps = {
  intro: string;
  projects: Project[];
};

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 15L12 9L18 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function animateScrollToY(targetY: number, duration = 400) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (value: number) =>
    value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

  const frame = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo({ top: startY + distance * eased });

    if (progress < 1) {
      window.requestAnimationFrame(frame);
    }
  };

  window.requestAnimationFrame(frame);
}

export default function HomeClient({ intro, projects }: HomeClientProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    const target = document.getElementById("home-projects");

    if (!target) {
      return;
    }

    animateScrollToY(target.getBoundingClientRect().top + window.scrollY - 110, 400);
  };

  return (
    <>
      <div className="site-width home-page">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">{intro}</h1>
          </div>

          <button
            type="button"
            className="hero__arrow"
            aria-label="Ir a los proyectos"
            onClick={scrollToProjects}
          >
            <ArrowDownIcon />
          </button>
        </section>

        <section
          id="home-projects"
          className="home-projects"
          aria-label="Proyectos destacados"
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              href={getProjectHref(project)}
              className="project-card"
              aria-label={project.homeHoverTitle ?? project.title}
            >
              <Image
                src={project.cover ?? ""}
                alt={project.homeHoverTitle ?? project.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="project-card__image"
              />

              <span className="project-card__title">
                {project.homeHoverTitle ?? project.title}
              </span>
            </Link>
          ))}
        </section>
      </div>

      {showScrollTop ? (
        <button
          type="button"
          className="scroll-top-button"
          aria-label="Volver arriba"
          onClick={() => animateScrollToY(0, 500)}
        >
          <ArrowUpIcon />
        </button>
      ) : null}
    </>
  );
}
