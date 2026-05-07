'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  FaDumbbell,
  FaFire,
  FaCrown,
  FaCheck,
} from 'react-icons/fa'

const plans = [
  {
    id: 1,
    name: 'Starter',
    price: '$19',
    period: '/month',
    desc: 'Perfect for beginners starting their fitness journey.',
    icon: FaDumbbell,
    features: [
      'Access to gym equipment',
      '2 group classes weekly',
      'Basic workout plan',
      'Community access',
    ],
    highlight: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$39',
    period: '/month',
    desc: 'Best for consistent training and faster results.',
    icon: FaFire,
    features: [
      'Unlimited gym access',
      'Daily group classes',
      'Personalized workout plan',
      'Nutrition guidance',
      'Progress tracking',
    ],
    highlight: true,
  },
  {
    id: 3,
    name: 'Elite',
    price: '$69',
    period: '/month',
    desc: 'Full transformation package with premium coaching.',
    icon: FaCrown,
    features: [
      '1-on-1 personal trainer',
      'Unlimited premium classes',
      'Advanced meal planning',
      'Body transformation tracking',
      'Priority support',
    ],
    highlight: false,
  },
]

export function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section className="relative py-24 bg-black overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">

          <h2 className="text-5xl font-black text-white">
            SIMPLE <span className="text-orange-400">PRICING</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, i) => {
            const Icon = plan.icon

            return (
              <div
                key={plan.id}
                data-aos="zoom-in-up"
                data-aos-delay={i * 120}
                className={`relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.highlight
                    ? 'bg-orange-500/10 border-orange-500/40 shadow-[0_0_40px_rgba(255,115,0,0.25)]'
                    : 'bg-white/5 border-white/10 hover:border-orange-500/30'
                }`}
              >

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                  <Icon className="text-orange-400 text-xl" />
                </div>

                {/* NAME */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {plan.desc}
                </p>

                {/* PRICE */}
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                {/* FEATURES */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <FaCheck className="text-orange-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button
                  className={`w-full py-3 rounded-full font-semibold transition ${
                    plan.highlight
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_30px_rgba(255,115,0,0.3)]'
                      : 'bg-white/5 border border-white/10 text-white hover:border-orange-500'
                  }`}
                >
                  Get Started
                </button>

                {/* GLOW BADGE */}
                {plan.highlight && (
                  <div className="absolute -top-3 right-5 px-3 py-1 text-xs bg-orange-500 text-white rounded-full">
                    Most Popular
                  </div>
                )}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}