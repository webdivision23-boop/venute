"use client";

import { useState } from "react";

export default function ProductCard({ dress }: any) {
  const [open, setOpen] = useState(false);

  const sideImages = [dress.image, dress.image];

  return (
    <>
      <div className="group relative cursor-pointer w-full">

        <div
          className="relative transition-all duration-700 group-hover:-translate-y-1"
          onClick={() => setOpen(true)}
        >
          {/* IMAGEM PRINCIPAL */}
          <div className="overflow-hidden transition-all duration-700 group-hover:shadow-2xl">
            <img
              src={dress.image}
              alt={dress.name}
              className="w-full h-[520px] object-contain transition duration-1000 ease-out group-hover:scale-[1.04]"
            />

            {/* Micro brilho dourado */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40 transition duration-700 bg-gradient-to-r from-transparent via-[#d6b86c]/30 to-transparent blur-xl"></div>
          </div>

          {/* MINIATURAS SOBREPOSTAS */}
          <div className="absolute left-4 top-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition duration-500">
            {sideImages.map((img, index) => (
              <div
                key={index}
                className="w-16 h-24 overflow-hidden shadow-xl transition duration-500 hover:scale-105"
              >
                <img
                  src={img}
                  alt="miniatura"
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* NOME */}
        <h3 className="mt-6 text-sm tracking-[0.35em] uppercase text-[#2c2c2c] text-center transition duration-500 group-hover:text-[#b89b5e]">
          {dress.name}
        </h3>

        {/* Linha dourada animada */}
        <div className="mt-4 h-[1px] w-10 mx-auto bg-[#b89b5e] opacity-60 group-hover:w-16 transition-all duration-500"></div>

      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-10 transition-opacity duration-500"
          onClick={() => setOpen(false)}
        >
          <img
            src={dress.image}
            alt={dress.name}
            className="max-h-[90vh] object-contain animate-[fadeIn_0.4s_ease]"
          />
        </div>
      )}
    </>
  );
}