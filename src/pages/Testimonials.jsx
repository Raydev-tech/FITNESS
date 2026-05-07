'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { FaStar, FaQuoteLeft, FaDumbbell } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'John Carter',
    role: 'Fitness Member',
    image:
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1200&auto=format&fit=crop',
    text: 'FITZONE completely changed my life. I gained strength, confidence, and discipline. The trainers are top-tier!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Smith',
    role: 'Athlete',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop',
    text: 'The training programs are intense but effective. I’ve never felt this fit in my entire life.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Yoga Member',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    text: 'The yoga sessions are amazing. It helped me reduce stress and improve flexibility greatly.',
    rating: 4,
  },
]

export function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section id='' className="relative py-24 bg-black overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 mb-5">
            <FaDumbbell />
            Testimonials
          </div>

          <h2 className="text-5xl font-black text-white">
            WHAT OUR <span className="text-orange-400">MEMBERS SAY</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real transformations from real people who trusted FITZONE with their fitness journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-aos="zoom-in-up"
              data-aos-delay={i * 120}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40 transition-all duration-500"
            >

              {/* QUOTE ICON */}
              <FaQuoteLeft className="text-orange-500 text-3xl mb-6 opacity-60" />

              {/* TEXT */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.text}
              </p>

              {/* STAR RATING */}
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={idx < t.rating ? 'text-orange-400' : 'text-gray-600'}
                  />
                ))}
              </div>

              {/* USER */}
              <div className="flex items-center gap-4">

                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />

                <div>
                  <h4 className="text-white font-semibold">
                    {t.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none" />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}