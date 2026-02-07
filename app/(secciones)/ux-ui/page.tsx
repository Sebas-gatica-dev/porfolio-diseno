//  import styles from "./ux-ui.module.css"; // CSS Puro para layouts complejos

export default function UxUiPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8">Diseño UX/UI</h1>
      
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