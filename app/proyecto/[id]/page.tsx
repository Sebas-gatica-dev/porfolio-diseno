"use client";
import { useRouter } from 'next/navigation';

export default function ProyectoPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      {/* BOTÓN: VOLVER A LA SECCIÓN */}
      <button 
        onClick={() => router.back()}
        className="mb-10 flex items-center gap-2 group text-sm uppercase font-bold tracking-widest"
      >
        <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
        Volver a la galería
      </button>

      <header className="mb-16">
        <h1 className="text-7xl font-black uppercase italic tracking-tighter mb-4">
          Proyecto {params.id}
        </h1>
        <div className="flex gap-10 text-sm uppercase text-gray-500 border-t border-b py-4">
          <span>Categoría: Editorial</span>
          <span>Año: 2024</span>
          <span>Cliente: Nombre Cliente</span>
        </div>
      </header>

      {/* Aquí el contenido es mucho más extenso que en el modal */}
      <section className="space-y-20">
        <div className="bg-gray-100 w-full h-[70vh]" />
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-gray-100 aspect-square" />
          <div className="bg-gray-100 aspect-square" />
        </div>
        <p className="text-2xl leading-relaxed font-light text-gray-800 max-w-3xl">
          Aquí es donde se explica todo el concepto de diseño, la tipografía elegida,
          la paleta de colores y el desafío técnico resuelto.
        </p>
      </section>
    </div>
  );
}