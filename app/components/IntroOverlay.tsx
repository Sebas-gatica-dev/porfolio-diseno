"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import introAnimation from "../../public/intro.json";

export default function IntroOverlay() {
  // Tres estados: 'loading' (chequeando), 'show' (mostrando intro), 'hide' (ya pasó)
  const [status, setStatus] = useState<"loading" | "show" | "hide">("loading");

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedPortfolio");
    if (!hasVisited) {
      setStatus("show");
    } else {
      setStatus("hide");
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("hasVisitedPortfolio", "true");
    setStatus("hide");
  };

  // Si todavía estamos chequeando el storage, mostramos un fondo blanco sólido
  // para bloquear la vista del Home que viene del servidor
  if (status === "loading") {
    return <div className="fixed inset-0 z-[110] bg-white" />;
  }

  return (
    <AnimatePresence>
      {status === "show" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-full max-w-md p-10">
            <Lottie 
              animationData={introAnimation} 
              loop={false} 
              onComplete={handleComplete} 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}