"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PrototypeViewProps = {
  title: string;
  src: string;
};

export default function PrototypeView({ title, src }: PrototypeViewProps) {
  const [headerHeight, setHeaderHeight] = useState(103);

  useEffect(() => {
    const measure = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="prototype-view" style={{ height: `calc(100dvh - ${headerHeight}px)` }}>
      <div className="site-width prototype-view__bar">
        <Link href="/#home-projects" className="prototype-view__back">
          ← volver a proyectos
        </Link>

        <span className="prototype-view__title">{title}</span>

        <a
          href={src}
          className="prototype-view__link"
          target="_blank"
          rel="noreferrer"
        >
          abrir en pestaña nueva ↗
        </a>
      </div>

      <iframe
        key={src}
        src={src}
        title={`Prototipo de ${title}`}
        className="prototype-view__frame"
        allowFullScreen
      />
    </div>
  );
}
