'use client'

import {
  CheckCircle,
  Dumbbell,
  Flame,
  Users,
  ArrowRight,
} from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function ShapeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-orange-500/10 rounded-full blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE SIDE ================= */}
          <div
            data-aos="fade-right"
            className="relative"
          >
            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.8)]">

              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
                alt="Fitness Training"
                className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Fitness Training
                    </p>

                    <h3 className="text-white text-2xl font-bold mt-1">
                      Build Your Dream Body
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(255,115,0,0.4)]">
                    <Dumbbell className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-4 bg-primary text-white px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(255,115,0,0.45)] animate-bounce">
              <p className="text-2xl font-black">10+</p>
              <span className="text-sm">Years Experience</span>
            </div>
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div
            data-aos="fade-left"
            className="flex flex-col"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-white/5 backdrop-blur-md mb-6 w-fit">
              <Flame className="text-primary" size={18} />
              <span className="text-primary text-sm uppercase tracking-[3px] font-semibold">
                Shape Your Body
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              GIVE SHAPE
              <span className="block text-primary">
                TO YOUR BODY
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-lg text-gray-400 leading-relaxed">
              At FITZONE, we help you build strength, confidence,
              and lasting results. With expert coaches, premium
              equipment, and proven fitness programs, we guide you
              toward your best shape.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">

              {/* Item */}
              <div className="group flex items-start gap-5 p-5 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,115,0,0.3)]">
                  <CheckCircle className="text-white w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Expert Coaching
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Professional trainers dedicated to helping you
                    achieve your fitness goals faster.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="group flex items-start gap-5 p-5 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,115,0,0.3)]">
                  <Flame className="text-white w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Proven Programs
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Scientifically designed workout plans that deliver
                    real and lasting results.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="group flex items-start gap-5 p-5 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,115,0,0.3)]">
                  <Users className="text-white w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Community Support
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Stay motivated and train alongside a powerful
                    community of fitness enthusiasts.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-10">
              <button className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(255,115,0,0.4)]">
                Get Started Now

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}