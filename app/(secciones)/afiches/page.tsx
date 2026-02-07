import Link from 'next/link';
import styles from './section.module.css';

// Simulamos datos de proyectos
const proyectos = [
  { id: '1', title: 'Poster Series A', size: 'medium' },
  { id: '2', title: 'Branding Expo', size: 'medium' },
  { id: '3', title: 'Typo Motion', size: 'medium' },
  { id: '4', title: 'Visual Identity', size: 'medium' },
];

export default function SectionPage() {
  return (
    <div className="py-10">
      <header className="mb-12">
        <h1 className="text-6xl font-black uppercase tracking-tighter italic">Afiches</h1>
        <p className="text-gray-500 mt-2 max-w-md">Exploración visual y experimentación tipográfica.</p>
      </header>
      
      {/* Grid Híbrido */}
      <div className={styles.bentoGrid}>
        {proyectos.map((p) => (
          <Link 
            key={p.id} 
            href={`/proyecto/${p.id}`} // Esta ruta será interceptada por el modal
            className={`${styles.item} group relative overflow-hidden bg-gray-100`}
            data-size={p.size}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
               <p className="text-white font-bold uppercase tracking-widest">Ver Proyecto</p>
            </div>
            
            {/* Placeholder de imagen */}
            <div className="w-full h-full min-h-[300px] flex items-center justify-center text-gray-400">
               [IMG {p.id}]
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}