'use client'

import {
  Dumbbell,
  Zap,
  Heart,
  Flame,
  ArrowRight,
} from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const programs = [
  {
    id: 1,
    title: 'Personal Training',
    description:
      'One-on-one coaching tailored to your goals and fitness level.',
    icon: Dumbbell,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Strength Training',
    description:
      'Build muscle, increase power, and transform your physique.',
    icon: Zap,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyZW5ndGglMjBUcmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    title: 'HIIT Classes',
    description:
      'High-intensity interval training for maximum results.',
    icon: Heart,
    image:
      'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SElJVCUyMENsYXNzZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    title: 'Fitness Training',
    description:
      'Complete fitness programs designed for your lifestyle.',
    icon: Flame,
    image:
      'https://plus.unsplash.com/premium_photo-1672862925604-9079f0a492e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rml0bmVzcyUyMFRyYWluaW5nfGVufDB8fDB8fHww',
  },
]

export function Programs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="programs"
      className="relative py-24 overflow-hidden bg-black"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-white/5 backdrop-blur-md mb-6">
            <Flame className="text-primary" size={18} />
            <span className="text-primary text-sm uppercase tracking-[3px] font-semibold">
              Our Fitness Programs
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            TRAIN HARD.
            <span className="block text-primary">
              STAY STRONG.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Explore premium fitness programs designed to help you
            build strength, improve endurance, and unlock your
            full potential.
          </p>
        </div>

        {/* ================= PROGRAMS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {programs.map((program, index) => {
            const Icon = program.icon

            return (
              <div
                key={program.id}
                data-aos="zoom-in-up"
                data-aos-delay={index * 120}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primary/40 transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">

                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* ICON */}
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,115,0,0.4)]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* NUMBER */}
                  <div className="absolute top-6 right-6 text-7xl font-black text-white/10">
                    0{program.id}
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">

                    <h3 className="text-3xl font-black text-white mb-3">
                      {program.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* NORMAL BUTTON */}
                    <button className="group/btn flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,115,0,0.35)]">
                      Learn More

                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ================= CTA ================= */}
        <div
          data-aos="fade-up"
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready To Start Your Fitness Journey?
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join our elite fitness community and take your strength,
            endurance, and confidence to the next level.
          </p>

          <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(255,115,0,0.4)]">
            Join FitZone Today
          </button>
        </div>
      </div>
    </section>
  )
}