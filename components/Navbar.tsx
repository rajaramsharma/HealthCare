'use client'

import Link from 'next/link'
import Image from 'next/image' // ✅ FIX 1
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react' // ❌ removed Heart

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/contact', label: 'Contact' },
  ]

  // ✅ FIX 2 (useEffect for scroll)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-16 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50' 
        : 'bg-gradient-to-b from-white to-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 relative">
              <Image
                src="/HealthCare.png"
                alt="HealthCare Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base text-slate-900">HealthCare</span>
              <span className="text-xs text-teal-600 font-semibold">Clinic</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors relative group">
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link href="/booking"
              className="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 text-sm">
              Book Appointment
            </Link>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen 
                ? <X className="w-6 h-6 text-slate-900" /> 
                : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-all">
                {link.label}
              </Link>
            ))}
            <Link href="/booking"
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 inline-block px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm text-center">
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}