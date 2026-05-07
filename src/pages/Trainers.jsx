'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  FaInstagram,
  FaDumbbell,
  FaTrophy,
  FaHeartbeat,
  FaUserShield,
  FaCrown,
  FaStar,
  FaArrowRight,
  FaFire,
} from 'react-icons/fa'

const trainers = [
  {
    id: 1,
    name: 'Alex Turner',
    specialty: 'Strength & Conditioning',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    reviews: 127,
    icon: FaTrophy,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    specialty: 'HIIT & Cardio',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    reviews: 94,
    icon: FaHeartbeat,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    name: 'Marcus Williams',
    specialty: 'Personal Training',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1200&auto=format&fit=crop',
    rating: 5.0,
    reviews: 156,
    icon: FaUserShield,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    name: 'Emma Davis',
    specialty: 'Yoga & Flexibility',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    reviews: 83,
    icon: FaCrown,
    color: 'from-purple-500 to-pink-500',
  },
]

export function Trainers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section id='trainers' className="relative py-24 bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 mb-6">
            <FaFire />
            Professional Trainers
          </div>

          <h2 className="text-5xl font-black text-white">
            TRAIN WITH OUR
            <span className="block text-orange-400">EXPERT COACHES</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Meet certified trainers who help you transform your body and mindset.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {trainers.map((trainer, i) => {
            const Icon = trainer.icon

            return (
              <div
                key={trainer.id}
                data-aos="zoom-in-up"
                data-aos-delay={i * 120}
                className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition"
              >

                {/* IMAGE */}
                <div className="h-[420px] relative">
                  <img
                    src={trainer.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    alt={trainer.name}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* ICON BADGE */}
                  <div className={`absolute top-5 left-5 w-12 h-12 rounded-xl bg-gradient-to-br ${trainer.color} flex items-center justify-center`}>
                    <Icon className="text-white" />
                  </div>

                  {/* SOCIAL */}
                  <div className="absolute top-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center">
                      <FaInstagram className="text-white" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 p-6 w-full">

                    <div className="text-orange-400 text-sm mb-2">
                      {trainer.specialty}
                    </div>

                    <h3 className="text-white text-xl font-bold mb-3">
                      {trainer.name}
                    </h3>

                    {/* RATING */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, idx) => (
                          <FaStar key={idx} className={idx < Math.floor(trainer.rating) ? 'text-yellow-400' : 'text-gray-600'} />
                        ))}
                      </div>

                      <span className="text-gray-400 text-sm">
                        {trainer.rating} ({trainer.reviews})
                      </span>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition">
                      View Profile
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}