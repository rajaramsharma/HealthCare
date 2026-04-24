'use client'

import Link from 'next/link'
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-lg font-bold text-white">HealthCare Clinic</h2>
            </div>

            <p className="text-sm text-slate-300 mb-4">
              Providing modern and compassionate healthcare services to our community.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
                title="Follow on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              <a 
                href="https://wa.me/9779819647784" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-green-600 hover:to-green-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-pink-600 hover:to-pink-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/30"
                title="Follow on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> Doctors
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3 group">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+9779819647784" className="hover:text-teal-400 transition-colors">+977-9819647784</a>
                </div>
              </li>
              <li className="flex gap-3 group">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@clinic.com" className="hover:text-teal-400 transition-colors">info@clinic.com</a>
                </div>
              </li>
              <li className="flex gap-3 group">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 w-full max-w-sm rounded-xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
          <iframe
            src="https://www.google.com/maps?q=27.6866,85.3473&output=embed"
            className="w-full h-40"
            style={{ border: 0 }}
            loading="lazy"
            title="HealthCare Clinic Location"
          />
        </div>

        {/* Get Direction Button */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=27.6866,85.3473"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-teal-400 font-semibold hover:text-teal-300 transition-colors hover:underline"
        >
          📍 Get Directions on Google Maps
        </a>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-slate-700" />

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} HealthCare Clinic. All rights reserved.</p>
          <p className="mt-2 text-xs text-slate-500">Built with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>
  )
}
