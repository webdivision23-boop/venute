"use client";

import { useState } from "react";

export default function ContactCTA() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    cidade: "",
    telefone: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `
Olá, vim através do site da Venute e gostaria de solicitar um atendimento personalizado.

Nome: ${form.nome}
Cidade: ${form.cidade}
Telefone: ${form.telefone}
E-mail: ${form.email}
    `;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/5562993347287?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* BLOCO FINAL LUXO */}
      <section className="relative bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white px-8 py-32 text-center overflow-hidden">

        {/* Ornamento dourado */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d6b86c] to-transparent"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-10">
          Não encontrou exatamente o que procura?
        </h2>

        <p className="max-w-3xl mx-auto text-white/70 leading-relaxed mb-8 text-lg">
          Nossa coleção vai muito além do que está exibido aqui.
          Trabalhamos com modelos exclusivos, novidades constantes e
          opções sob medida para tornar seu momento absolutamente inesquecível.
        </p>

        <p className="text-white/50 mb-14 italic">
          Atendimento personalizado • Experiência exclusiva • Elegância atemporal
        </p>

        <button
          onClick={() => setOpen(true)}
          className="relative px-14 py-4 tracking-[0.3em] text-sm border border-[#d6b86c] text-[#d6b86c] hover:bg-[#d6b86c] hover:text-black transition-all duration-500"
        >
          SOLICITAR ATENDIMENTO
        </button>

        {/* Ornamento inferior */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d6b86c] to-transparent"></div>
        </div>

      </section>

      {/* MODAL FORM LUXO */}
      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div className="bg-[#111] border border-[#d6b86c]/40 w-full max-w-md p-10 relative shadow-2xl">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#d6b86c] hover:opacity-70"
            >
              ✕
            </button>

            <h3 className="text-2xl font-light mb-10 text-center text-[#d6b86c] tracking-wide">
              Atendimento Personalizado
            </h3>

            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                onChange={handleChange}
                className="bg-transparent border-b border-[#d6b86c]/40 py-3 outline-none text-white placeholder:text-white/40 focus:border-[#d6b86c]"
              />

              <input
                type="text"
                name="cidade"
                placeholder="Sua cidade"
                onChange={handleChange}
                className="bg-transparent border-b border-[#d6b86c]/40 py-3 outline-none text-white placeholder:text-white/40 focus:border-[#d6b86c]"
              />

              <input
                type="text"
                name="telefone"
                placeholder="Seu telefone"
                onChange={handleChange}
                className="bg-transparent border-b border-[#d6b86c]/40 py-3 outline-none text-white placeholder:text-white/40 focus:border-[#d6b86c]"
              />

              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                onChange={handleChange}
                className="bg-transparent border-b border-[#d6b86c]/40 py-3 outline-none text-white placeholder:text-white/40 focus:border-[#d6b86c]"
              />

              <button
                onClick={handleSubmit}
                className="mt-6 bg-[#d6b86c] text-black py-3 tracking-[0.3em] text-sm hover:opacity-90 transition duration-300"
              >
                ENVIAR VIA WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}