'use client'

import { Dumbbell, Play, ArrowRight, Star } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Programs } from './Programs'
import { ShapeSection } from './ShapeSection'
import { Schedule } from './Schedule'
import { Trainers } from './Trainers'
import { Testimonials } from './Testimonials'
import { Pricing } from './Pricing'

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black pt-24"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>

        {/* Glow Effects */}
        <div className="absolute top-20 right-0 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-[140px]"></div>

        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-orange-500/10 rounded-full blur-[120px]"></div>

        <div className="absolute top-1/2 left-1/2 w-[20rem] h-[20rem] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* ================= LEFT SIDE ================= */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6 w-fit backdrop-blur-md">
              <Dumbbell className="text-primary w-4 h-4" />
              <span className="text-sm tracking-wider uppercase text-gray-300 font-medium">
                Elite Fitness Training
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] text-white">
              BUILD YOUR
              <span className="block text-primary drop-shadow-[0_0_30px_rgba(255,115,0,0.6)]">
                DREAM BODY
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
              Push beyond your limits with world-class trainers, premium
              equipment, and a powerful fitness community designed to help you
              become stronger every single day.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-black text-white">15K+</h3>
                <p className="text-gray-500 text-sm mt-1">Active Members</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">50+</h3>
                <p className="text-gray-500 text-sm mt-1">Expert Trainers</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">24/7</h3>
                <p className="text-gray-500 text-sm mt-1">Fitness Access</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="group cursor-pointer bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,115,0,0.45)]">
                Start Training
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="cursor-pointer group border border-white/10 hover:border-primary bg-white/5 hover:bg-primary/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300">
                <Play className="w-5 h-5 text-primary fill-primary" />
                Watch Video
              </button>

            </div>

            {/* Reviews */}
            <div className="flex items-center gap-4 mt-12">
              <div className="flex -space-x-4">
                {[
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="member"
                    className="w-12 h-12 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-gray-400 text-sm mt-1">
                  Trusted by thousands of athletes
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            data-aos="zoom-in"
            className="relative flex items-center justify-center"
          >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-xl">

              {/* Floating Card */}
              <div className="absolute -top-8 -left-8 z-20 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl animate-bounce">
                <p className="text-gray-400 text-sm">Calories Burned</p>
                <h3 className="text-3xl font-black text-white">980</h3>
              </div>

              {/* Image */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">

                <img
                  src="fit.jpg"
                  alt="Fitness"
                  className="w-full h-[700px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
                    <p className="text-primary text-sm uppercase tracking-widest font-semibold">
                      Personal Training
                    </p>

                    <h3 className="text-white text-2xl font-black mt-2">
                      Train Hard. Stay Strong.
                    </h3>

                    <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                      Experience the next level of fitness with personalized
                      workout programs and expert coaching.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Small Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-2xl flex items-center justify-center animate-pulse">
                <Dumbbell className="w-14 h-14 text-primary" />
              </div>

            </div>
          </div>

        </div>
      </div>
      <Programs />
      <ShapeSection />
      <Schedule />
      <Trainers />
      <Testimonials />
      <Pricing />
    </section>
  )
}