"use client";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProyectoModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => router.back()}
        className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
      />

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden z-10 relative rounded-lg flex flex-col"
      >
        {/* Header del Modal con botones */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xs uppercase tracking-widest font-bold text-gray-400">
            Vista Rápida / Proyecto {params.id}
          </span>
          <div className="flex gap-4">
            {/* BOTÓN: IR A PÁGINA COMPLETA */}
            <button 
              onClick={() => window.location.href = `/proyecto/${params.id}`}
              className="text-xs uppercase font-bold hover:underline"
            >
              Ver página completa ↗
            </button>
            {/* BOTÓN: CERRAR */}
            <button 
              onClick={() => router.back()}
              className="bg-black text-white px-3 py-1 text-xs uppercase hover:bg-gray-800 transition-colors"
            >
              Cerrar ✕
            </button>
          </div>
        </div>

        {/* Contenido Scrollable */}
        <div className="overflow-y-auto p-8">
          <div className="bg-gray-100 aspect-video mb-6 flex items-center justify-center">
            <span className="text-gray-400">Imagen Principal del Proyecto {params.id}</span>
          </div>
          <h2 className="text-3xl font-black uppercase mb-4">Título del Trabajo</h2>
          <p className="text-gray-600 max-w-2xl">
            Descripción breve para captar la atención en el modal...
          </p>
        </div>
      </motion.div>
    </div>
  );
}