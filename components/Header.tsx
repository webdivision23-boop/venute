"use client";

import Link from "next/link";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center text-white">

          {/* LOGO */}
          <Link href="/" className="tracking-[0.4em] text-sm font-light">
            VENUTE
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex space-x-10 text-sm tracking-widest font-light">
            <Link href="/vestidos/casamento" className="hover:text-[#C6A75E] transition">
              CASAMENTO
            </Link>
            <Link href="/vestidos/debutantes" className="hover:text-[#C6A75E] transition">
              DEBUTANTES
            </Link>
            <Link href="/vestidos/madrinhas" className="hover:text-[#C6A75E] transition">
              MADRINHAS
            </Link>
            <Link href="/vestidos/festa" className="hover:text-[#C6A75E] transition">
              FESTA
            </Link>
            <Link href="/vestidos/daminhas" className="hover:text-[#C6A75E] transition">
              DAMINHAS
            </Link>
          </nav>

          {/* SOCIAL + MOBILE BUTTON */}
          <div className="flex items-center space-x-6">

            {/* WhatsApp (desktop) */}
            <a
              href="https://wa.me/5562993347287?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20da%20Venute%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block hover:text-[#25D366] transition"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>

            {/* Instagram (desktop) */}
            <a
              href="https://www.instagram.com/venute_locacoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block hover:text-[#C6A75E] transition"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>

            {/* BOTÃO HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE FLUTUANTE */}
      {open && (
        <div className="fixed top-24 right-6 z-[9999] md:hidden">

          <div className="relative w-64 bg-black/40 backdrop-blur-2xl text-white rounded-2xl shadow-2xl border border-white/10 p-8">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col space-y-6 text-sm tracking-[0.25em] font-light mt-6">

              <Link href="/vestidos/casamento" onClick={() => setOpen(false)}>
                CASAMENTO
              </Link>

              <Link href="/vestidos/debutantes" onClick={() => setOpen(false)}>
                DEBUTANTES
              </Link>

              <Link href="/vestidos/madrinhas" onClick={() => setOpen(false)}>
                MADRINHAS
              </Link>

              <Link href="/vestidos/festa" onClick={() => setOpen(false)}>
                FESTA
              </Link>

              <Link href="/vestidos/daminhas" onClick={() => setOpen(false)}>
                DAMINHAS
              </Link>

              <div className="w-full h-px bg-white/10 my-4"></div>

              <div className="flex space-x-6">
                <a
                  href="https://wa.me/5562993347287?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20da%20Venute%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle size={20} strokeWidth={1.5} />
                </a>

                <a
                  href="https://www.instagram.com/venute_locacoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}