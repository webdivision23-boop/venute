import Link from "next/link";
import { dresses } from "@/data/dresses";
import ProductCard from "@/components/ProductCard";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>


     {/* HERO SECTION COM VIDEO */}
      <section className="relative w-full h-screen overflow-hidden bg-black">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover scale-110"
        >
          <source src="/videos/casamento.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/75" />

        <h1 className="absolute inset-0 flex items-center justify-center text-[18vw] font-extralight tracking-[0.3em] text-white/10 select-none pointer-events-none">
          VENUTE
        </h1>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <p className="uppercase tracking-[0.4em] text-sm mb-6 text-white/70">
            Coleção 2026
          </p>

          <h2 className="text-3xl md:text-5xl font-light max-w-3xl leading-relaxed">
            A arte de vestir momentos eternos
          </h2>

          <a
            href="#colecao"
            className="mt-12 border border-white px-12 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-500"
          >
            Explorar coleção
          </a>
        </div>
      </section>


        {/* SEÇÃO EDITORIAL FINAL */}
<section className="w-full grid grid-cols-1 md:grid-cols-3">

  {[
      {
    image: dresses[0]?.image,
    title: "CASAMENTO",
    text: "O vestido que marca o início da sua nova história.",
    link: "/vestidos/casamento",
  },
  {
    image: dresses[5]?.image,
    title: "MADRINHAS",
    text: "Aceita viver esse momento inesquecível ao meu lado?",
    link: "/vestidos/madrinhas",
  },
  {
    image: dresses[9]?.image,
    title: "FESTA",
    text: "Porque existem noites que merecem ser eternas.",
    link: "/vestidos/festa",
  },
  ].map((item, index) => (
    <div
      key={index}
      className="relative h-[520px] overflow-hidden group cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-700"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
        <h3 className="text-3xl md:text-4xl font-light tracking-[0.3em] mb-6">
          {item.title}
        </h3>

        <p className="text-lg italic max-w-sm leading-relaxed mb-8 opacity-90">
          {item.text}
        </p>

<Link
  href={item.link}
  className="border border-white px-10 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-500"
>
  Descobrir
</Link>
      </div>
    </div>
  ))}
      
</section>

     

      {/* COMPONENTE VISUAL PADRÃO */}
      {[
        {
          titleSmall: "Exclusividade",
          title: "Os Mais Alugados",
          bg: "bg-[#f5f1eb]",
          slice: [0, 4],
          id: "colecao",
        },
        {
          titleSmall: "Seleção Especial",
          title: "Recomendados",
          bg: "bg-white",
          slice: [4, 8],
        },
        {
          titleSmall: "Coleção 2026",
          title: "Novidades",
          bg: "bg-[#f5f1eb]",
          slice: [8, 12],
        },
      ].map((section, index) => (
        <section
          key={index}
          id={section.id}
          className={`px-8 py-28 ${section.bg}`}
        >
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-xs text-[#b89b5e] mb-4">
              {section.titleSmall}
            </p>

            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#2c2c2c]">
              {section.title}
            </h2>

            <div className="w-20 h-[1px] bg-[#b89b5e] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {dresses
              .slice(section.slice[0], section.slice[1])
              .map((dress) => (
                <div
                  key={dress.id}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-full h-[520px] overflow-hidden">
                    <ProductCard dress={dress} />
                  </div>

                  {/* DESCRIÇÃO */}
                  <p className="mt-6 text-sm text-[#2c2c2c]/80 leading-relaxed max-w-xs min-h-[72px]">
                    {dress.description}
                  </p>

                  {/* ORNAMENTO COM MICRO BRILHO */}
                  <div className="mt-8 flex justify-center relative">
                    <div className="relative">

                      {/* brilho */}
                      <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-60 transition duration-700 bg-gradient-to-r from-transparent via-[#d6b86c] to-transparent animate-pulse"></div>

                      <svg
                        width="110"
                        height="30"
                        viewBox="0 0 200 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#b89b5e] relative z-10"
                      >
                        <path
                          d="M10 20 Q40 5 70 20 Q100 35 130 20 Q160 5 190 20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <circle cx="100" cy="20" r="4" fill="currentColor" />
                      </svg>

                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
      <ContactCTA />

    </main>
  );
}