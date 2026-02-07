export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-200 mt-auto bg-white">
      <div className="text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Nombre de tu Novia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}