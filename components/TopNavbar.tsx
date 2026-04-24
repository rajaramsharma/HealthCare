'use client'

import { Facebook, MessageCircle, Instagram, Phone, Mail, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TopNavbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: MessageCircle, label: 'WhatsApp', url: 'https://wa.me/9779819647784' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' }
  ]

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Decorative gradient top line */}
      <div className="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-400 via-blue-500 to-teal-500" />
      
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-3xl shadow-2xl shadow-teal-950/50">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-400/8 to-blue-500/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="h-12 flex items-center justify-between gap-4">
            
            {/* Left side - Contact info */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3">
                {/* Phone */}
                <div className="flex items-center gap-2 group cursor-pointer">
                  <div className="p-1.5 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-lg group-hover:from-teal-500/50 group-hover:to-cyan-500/50 transition-all duration-300 shadow-md shadow-teal-500/20">
                    <Phone size={14} className="text-teal-300 group-hover:text-teal-100 transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-teal-300 transition-colors">+977-9819647784</span>
                </div>

                {/* Ornamental divider */}
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
                  <div className="w-px h-3 bg-gradient-to-b from-slate-500/40 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500" />
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 group cursor-pointer">
                  <div className="p-1.5 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-lg group-hover:from-cyan-500/50 group-hover:to-teal-500/50 transition-all duration-300 shadow-md shadow-cyan-500/20">
                    <Mail size={14} className="text-cyan-300 group-hover:text-cyan-100 transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors">info@clinic.com</span>
                </div>

                {/* Ornamental divider */}
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <div className="w-px h-3 bg-gradient-to-b from-slate-500/40 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 group cursor-pointer">
                  <div className="p-1.5 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg group-hover:from-blue-500/50 group-hover:to-cyan-500/50 transition-all duration-300 shadow-md shadow-blue-500/20">
                    <Clock size={14} className="text-blue-300 group-hover:text-blue-100 transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-blue-300 transition-colors">24/7 Emergency</span>
                </div>
              </div>
            </div>

            {/* Right side - Social links */}
            <div className="flex items-center gap-2.5 ml-auto">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a 
                    key={social.label} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative p-2 rounded-lg bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:from-slate-700/80 hover:to-slate-800/80 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 hover:scale-110"
                  >
                    <Icon size={16} className="text-slate-400 group-hover:text-teal-300 transition-colors duration-300 relative z-10" />
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
                  </a>
                )
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Shimmer bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/80 via-cyan-400/80 to-transparent blur-sm" />
    </div>
  )
}