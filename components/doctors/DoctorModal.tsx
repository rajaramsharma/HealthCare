'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { X, Phone, Mail, Clock, Award, Star, Briefcase, MapPin, CheckCircle2, MessageSquare, Calendar } from "lucide-react"

export default function DoctorModal({ doctor, onClose }: any) {
  // Handle phone call
  const handleCall = () => {
    window.location.href = `tel:${doctor.phone}`
  }

  // Handle message
  const handleMessage = () => {
    window.open(`https://wa.me/${doctor.phone.replace(/\D/g, '')}?text=Hello%20Dr.%20${doctor.name.split(" ")[0]}`, '_blank')
  }

  // Handle booking
  const handleBook = () => {
    console.log('Opening booking for', doctor.name)
    alert(`Booking appointment with ${doctor.name}. Redirect to booking page.`)
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <Card
        className="max-w-4xl w-full shadow-2xl border-0 my-8 overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full transition z-20 bg-white/80 backdrop-blur"
        >
          <X size={24} className="text-gray-900" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Left Section - Image & Quick Info */}
          <div className="lg:col-span-1 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-6 text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-800/20 rounded-full blur-3xl" />

            {/* Profile Image */}
            <div className="relative z-10 mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-4">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quick Info */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-2">{doctor.name}</h2>
              <Badge className="mb-4 bg-white/20 text-white border border-white/40 font-semibold">
                {doctor.specialization}
              </Badge>

              {/* Experience Badge */}
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-4">
                <Briefcase size={16} />
                <span className="font-semibold">{doctor.experience} Years Exp.</span>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>
              <p className="text-sm text-white/80">(287 verified reviews)</p>

              {/* Quick Stats */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CheckCircle2 size={16} />
                  <span>Board Certified</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock size={16} />
                  <span>{doctor.availability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Details */}
          <div className="lg:col-span-2 p-8 max-h-[600px] overflow-y-auto">
            {/* About Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full" />
                About
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {doctor.bio}
              </p>
            </div>

            {/* Qualifications Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award size={20} className="text-purple-600" />
                Qualifications & Certifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {doctor.qualifications?.map((qual: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
                  >
                    <CheckCircle2 size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{qual}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone size={20} className="text-purple-600" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone Card */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone size={18} className="text-blue-600" />
                    <span className="font-semibold text-gray-700">Phone</span>
                  </div>
                  <a
                    href={`tel:${doctor.phone}`}
                    className="text-blue-700 font-bold text-lg hover:text-blue-800 transition"
                  >
                    {doctor.phone}
                  </a>
                </div>

                {/* Email Card */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={18} className="text-green-600" />
                    <span className="font-semibold text-gray-700">Email</span>
                  </div>
                  <a
                    href={`mailto:${doctor.email}`}
                    className="text-green-700 font-bold text-sm hover:text-green-800 transition truncate"
                  >
                    {doctor.email}
                  </a>
                </div>

                {/* Location Card */}
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={18} className="text-orange-600" />
                    <span className="font-semibold text-gray-700">Availability</span>
                  </div>
                  <p className="text-orange-700 font-bold">
                    {doctor.availability}
                  </p>
                </div>

                {/* Experience Card */}
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={18} className="text-purple-600" />
                    <span className="font-semibold text-gray-700">Experience</span>
                  </div>
                  <p className="text-purple-700 font-bold text-lg">
                    {doctor.experience}+ years
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6 border-t border-gray-200">
              {/* Call Button */}
              <Button
                onClick={handleCall}
                className="flex items-center justify-center gap-2 flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Phone size={18} />
                Call Now
              </Button>

              {/* Message Button */}
              <Button
                onClick={handleMessage}
                className="flex items-center justify-center gap-2 flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MessageSquare size={18} />
                Message
              </Button>

              {/* Book Button */}
              <Button
                onClick={handleBook}
                className="flex items-center justify-center gap-2 flex-1 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Calendar size={18} />
                Book
              </Button>

              {/* Close Button */}
              <Button
                variant="outline"
                onClick={onClose}
                className="flex items-center justify-center gap-2 flex-1 py-3 font-bold rounded-lg border-2 hover:bg-gray-100 transition-all duration-300"
              >
                <X size={18} />
                Close
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}