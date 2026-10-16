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

  // La vista de prototipo es full window: solo se muestra el navbar.
  if (pathnameWithoutBase.startsWith("/prototipo/")) {
    return null;
  }

  // El Figma (home, sobre mí y contacto) muestra solo los íconos sociales
  // alineados a la derecha: sin línea divisoria ni texto de copyright.
  return (
    <footer className="site-footer">
      <div className="site-width">
        <div className="site-footer__socials" aria-label="Redes sociales">
          <Link href="https://www.behance.net/" target="_blank" rel="noreferrer">
            <BehanceIcon />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
