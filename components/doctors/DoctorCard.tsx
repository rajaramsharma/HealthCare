import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Calendar, Eye } from "lucide-react"

export default function DoctorCard({ doctor, onClick }: any) {
  // Handle phone call
  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.location.href = `tel:${doctor.phone}`
  }

  // Handle message
  const handleMessage = (e: React.MouseEvent) => {
    e.stopPropagation()
    // WhatsApp link
    window.open(`https://wa.me/${doctor.phone.replace(/\D/g, '')}?text=Hello%20Dr.%20${doctor.name.split(" ")[0]}`, '_blank')
  }

  // Handle appointment booking
  const handleBook = (e: React.MouseEvent) => {
    e.stopPropagation()
    // You can replace this with your booking logic
    console.log('Opening booking for', doctor.name)
    alert(`Booking appointment with ${doctor.name}. Redirect to booking page.`)
  }

  return (
    <Card
      className="cursor-pointer group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 flex flex-col h-full bg-white"
      onClick={onClick}
    >
      {/* Top Section - White Background */}
      <div className="px-6 pt-8 pb-6 flex flex-col items-center relative">
        {/* Circular Image with 3D Effect */}
        <div className="relative w-40 h-40 mb-2" style={{ perspective: '1000px' }}>
          {/* 3D Shadow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100 blur-2xl opacity-80 -z-10 scale-110" />
          
          {/* Deep Shadow Layer */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black/15 rounded-full blur-2xl" />
          
          {/* Main Image Container - Raised Effect */}
          <div 
            className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
            style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 8px rgba(147, 51, 234, 0.1), inset -2px -2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>

          {/* Specular Highlight for 3D Effect */}
          <div className="absolute top-2 left-2 w-8 h-8 bg-white/40 rounded-full blur-md pointer-events-none" />
        </div>

        {/* Doctor Name */}
        <h3 className="text-2xl font-bold text-purple-700 text-center mb-1 mt-6">
          {doctor.name}
        </h3>

        {/* Qualifications */}
        <p className="text-sm text-gray-600 text-center mb-4 font-medium">
          {doctor.qualifications?.[0]?.split(" - ")[0] || "Medical Professional"}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4" />

        {/* Specialties Section */}
        <div className="text-center w-full">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
            Specialties
          </p>
          <p className="text-sm text-gray-700 font-semibold">
            {doctor.specialization}
          </p>
        </div>
      </div>

      {/* Action Buttons Row - Enhanced UI */}
      <div className="grid grid-cols-2 gap-3 px-4 py-4 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        {/* Call Button */}
        <Button
          onClick={handleCall}
          className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group/btn"
        >
          <Phone size={18} className="transition-transform duration-300 group-hover/btn:scale-110" />
          <span>Call</span>
        </Button>

        {/* Message Button */}
        <Button
          onClick={handleMessage}
          className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group/btn"
        >
          <MessageSquare size={18} className="transition-transform duration-300 group-hover/btn:scale-110" />
          <span>Message</span>
        </Button>
      </div>

      {/* Bottom Action Buttons Row */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-4 bg-gradient-to-b from-gray-50 to-white">
        {/* Book Appointment Button */}
        <Button
          onClick={handleBook}
          className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group/btn"
        >
          <Calendar size={18} className="transition-transform duration-300 group-hover/btn:scale-110" />
          <span>Book</span>
        </Button>

        {/* View Profile Button */}
        <Button
          onClick={onClick}
          className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group/btn"
        >
          <Eye size={18} className="transition-transform duration-300 group-hover/btn:scale-110" />
          <span>Profile</span>
        </Button>
      </div>
    </Card>
  )
}