import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import ShellClient from "@/components/ShellClient";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var storedTheme = window.localStorage.getItem("portfolio-theme");
                var theme = storedTheme === "dark" ? "dark" : "light";
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          <ShellClient>
            <Navbar />
            <main className="site-main">
              {children}
            </main>
            <Footer />
          </ShellClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
