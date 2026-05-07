'use client'

import {
  FaDumbbell,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
} from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden pt-20 pb-10 border-t border-white/10">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaDumbbell className="text-orange-500 text-xl" />
              <h1 className="text-2xl font-black text-white">
                FIT<span className="text-orange-500">ZONE</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your body, sharpen your mind, and join a community
              built for strength and discipline.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-5">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 transition cursor-pointer">
                <FaInstagram className="text-white" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 transition cursor-pointer">
                <FaFacebook className="text-white" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 transition cursor-pointer">
                <FaTwitter className="text-white" />
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">Programs</li>
              <li className="hover:text-orange-400 cursor-pointer">Schedule</li>
              <li className="hover:text-orange-400 cursor-pointer">Trainers</li>
              <li className="hover:text-orange-400 cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Help Center</li>
              <li className="hover:text-orange-400 cursor-pointer">Membership</li>
              <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-400 cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Join Newsletter
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Get fitness tips, updates & offers.
            </p>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-transparent text-white outline-none text-sm"
              />

              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-3 transition">
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FITZONE. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with ❤️ for fitness transformation
          </p>
        </div>
      </div>
    </footer>
  )
}