'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  CalendarDays,
  Clock,
  Flame,
  Dumbbell,
  HeartPulse,
  Activity,
  Zap,
  StretchHorizontal,
  Shield,
  Sword,
  Users,
} from 'lucide-react'

const scheduleData = [
  {
    day: 'Monday',
    classes: [
      { name: '6:00am - 7:00am', type: 'Cardio', icon: HeartPulse },
      { name: '8:00am - 9:00am', type: 'Strength', icon: Dumbbell },
      { name: '5:00pm - 6:00pm', type: 'HIIT', icon: Zap },
      { name: '7:00pm - 8:00pm', type: 'Yoga', icon: StretchHorizontal },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { name: '6:30am - 7:30am', type: 'Strength', icon: Dumbbell },
      { name: '9:00am - 10:00am', type: 'Cardio', icon: HeartPulse },
      { name: '5:30pm - 6:30pm', type: 'Boxing', icon: Sword },
      { name: '7:30pm - 8:30pm', type: 'Core', icon: Shield },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { name: '6:00am - 7:00am', type: 'HIIT', icon: Zap },
      { name: '8:30am - 9:30am', type: 'Strength', icon: Dumbbell },
      { name: '5:00pm - 6:00pm', type: 'Cardio', icon: HeartPulse },
      { name: '7:00pm - 8:00pm', type: 'Pilates', icon: Activity },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { name: '6:00am - 7:00am', type: 'Boxing', icon: Sword },
      { name: '8:00am - 9:00am', type: 'Cardio', icon: HeartPulse },
      { name: '5:30pm - 6:30pm', type: 'Strength', icon: Dumbbell },
      { name: '7:30pm - 8:30pm', type: 'Yoga', icon: StretchHorizontal },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { name: '6:00am - 7:00am', type: 'Strength', icon: Dumbbell },
      { name: '8:00am - 9:00am', type: 'HIIT', icon: Zap },
      { name: '5:00pm - 6:00pm', type: 'Cardio', icon: HeartPulse },
      { name: '7:00pm - 8:00pm', type: 'Stretch', icon: StretchHorizontal },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { name: '8:00am - 9:00am', type: 'Cardio', icon: HeartPulse },
      { name: '10:00am - 11:00am', type: 'Strength', icon: Dumbbell },
      { name: '5:00pm - 6:00pm', type: 'HIIT', icon: Zap },
      { name: '7:00pm - 8:00pm', type: 'Group Fit', icon: Users },
    ],
  },
]

const sessions = ['Morning', 'Mid-Morning', 'Evening', 'Night']

export function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section id='schedule' className="relative py-24 bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 mb-5">
            <CalendarDays size={18} />
            Weekly Schedule
          </div>

          <h2 className="text-5xl font-black text-white">
            TRAINING <span className="text-orange-400">SCHEDULE</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Pick your session and stay consistent
          </p>
        </div>

        {/* DAYS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scheduleData.map((day) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`px-6 py-2 cursor-pointer rounded-full border transition ${
                selectedDay === day.day
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-orange-400'
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {/* CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h3 className="text-2xl text-white font-bold">{selectedDay}</h3>
            <Dumbbell className="text-orange-400" />
          </div>

          <div className="p-6 space-y-4">

            {scheduleData
              .find((d) => d.day === selectedDay)
              ?.classes.map((item, i) => {
                const Icon = item.icon

                return (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="flex items-center cursor-pointer justify-between p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-orange-500/40 transition"
                  >

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                        <Icon className="text-orange-400" />
                      </div>

                      <div>
                        <h4 className="text-white font-semibold">
                          {item.type}
                        </h4>
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                          <Clock size={14} /> {sessions[i]}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">
                      {item.name}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <h3 className="text-3xl font-bold text-white mb-3">
            Ready to train?
          </h3>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition">
            Book Session
          </button>
        </div>
      </div>
    </section>
  )
}