"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { basePath } from "@/lib/base-path";
import { BehanceIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function Footer() {
  const pathname = usePathname();
  const pathnameWithoutBase =
    basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const isAboutPage = pathnameWithoutBase === "/sobre-mi";
  const isPrototypePage = pathnameWithoutBase.startsWith("/prototipo/");

  // La vista de prototipo es full window: solo se muestra el navbar.
  if (isPrototypePage) {
    return null;
  }

  return (
    <footer className={`site-footer${isAboutPage ? " site-footer--about" : ""}`}>
      <div className="site-width">
        {isAboutPage ? null : <div className="site-footer__line" />}

        <div className="site-footer__content">
          {isAboutPage ? null : <p>©2026 Sg.dev. Todos los derecho reservados</p>}

          <div className="site-footer__socials" aria-label="Redes sociales">
            <Link href="https://www.behance.net/" target="_blank" rel="noreferrer">
              <BehanceIcon />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
