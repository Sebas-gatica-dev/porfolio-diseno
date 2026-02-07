import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ 
  children,
  modal, 
}: { 
  children: React.ReactNode;
  modal: React.ReactNode; 
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-black antialiased relative`}>
        {/* Mantenemos la Intro aquí. 
          Al estar al final o tener un z-index alto, tapará el children 
          apenas el navegador empiece a pintar.
        */}
        <IntroOverlay />

        <Navbar />
        <main className="min-h-screen pt-20 px-4 md:px-10">
          {children}
          {modal}
        </main>
        <Footer />
      </body>
    </html>
  );
}