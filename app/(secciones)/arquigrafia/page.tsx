//  import styles from "./arquigrafia.module.css"; // CSS Puro para layouts complejos

export default function ArquigrafiaPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8">Diseño Arquigráfico</h1>
      
      {/* Usamos una clase de CSS Module para un grid experimental */}
      <div 
    //   className={styles.customGrid}
      >
        <div className="bg-gray-100 p-10">Proyecto 1</div>
        <div className="bg-gray-100 p-10">Proyecto 2</div>
        {/* ... más contenido ... */}
      </div>
    </div>
  );
}