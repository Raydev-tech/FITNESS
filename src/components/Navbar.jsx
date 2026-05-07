'use client'

import { Menu, X, Dumbbell } from 'lucide-react'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'Programs', 'Schedule', 'Trainers', 'Contact']

  return (
    <nav
      data-aos="fade-down"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-xl opacity-40 group-hover:opacity-70 transition duration-500 rounded-full"></div>

              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center border border-white/10 shadow-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl font-extrabold tracking-wide text-white">
                FIT<span className="text-primary">ZONE</span>
              </h1>

              <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
                Elite Fitness Club
              </p>
            </div>
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
              >
                {item}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA BUTTON */}
            <button className="cursor-pointer relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,115,0,0.45)]">
              <span className="relative z-10">Join Now</span>

              <div className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen
              ? 'max-h-[500px] opacity-100 pb-6'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2 rounded-3xl border border-white/10 bg-black/95 backdrop-blur-2xl p-6 shadow-2xl">

            <div className="flex flex-col space-y-5">
              {navLinks.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  className="text-gray-300 hover:text-primary text-lg font-medium transition-all duration-300 hover:translate-x-2"
                >
                  {item}
                </a>
              ))}

              <button className="mt-4 w-full cursor-pointer bg-primary hover:bg-primary/90 text-white py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_25px_rgba(255,115,0,0.4)]">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}