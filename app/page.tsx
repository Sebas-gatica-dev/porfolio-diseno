import Link from "next/link";
import Image from 'next/image'

const sections = [
  { title: "", slug: "ux-ui", img: "/img/ux-ui.png" },
  { title: "", slug: "editorial", img: "/img/editorial.png" },
  { title: "Afiches", slug: "afiches", img: "/img/generic.png" },
  { title: "Arquigrafía", slug: "arquigrafia", img: "/img/generic.png" },
  { title: "Branding", slug: "branding", img: "/img/generic.png" },
];

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      {sections.map((s) => (
        <Link key={s.slug} href={`/${s.slug}`} className="group relative overflow-hidden bg-gray-200 aspect-video">
          <Image src={s.img} alt={s.title} width={600} height={400} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">

          { s.title ?
                        <h1 className="text-white text-6xl font-light uppercase  tracking-widest ">{s.title}</h1>
                        :
                        null
                  
           }
            {/* <h2 className="text-white text-3xl font-light uppercase tracking-widest">{s.title}</h2> */}
          </div>
        </Link>
      ))}
    </div>
  );
}