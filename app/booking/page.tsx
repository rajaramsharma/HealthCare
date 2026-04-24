'use client'

import { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Clock, Users, CheckCircle } from 'lucide-react'

// Services with durations
const services = [
  {
    id: 'dental',
    title: 'Dental',
    description: 'Complete dental care and treatment',
    duration: 30,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'lab',
    title: 'Lab Services',
    description: 'Comprehensive laboratory testing',
    duration: 30,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    description: 'Heart specialist consultation',
    duration: 45,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'checkup',
    title: 'General Checkup',
    description: 'Routine health checkups',
    duration: 30,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'eye',
    title: 'Eye Care',
    description: 'Vision and eye health services',
    duration: 30,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 'mental',
    title: 'Mental Health',
    description: 'Counseling and mental wellness',
    duration: 45,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'physical',
    title: 'Physical Therapy',
    description: 'Rehabilitation and mobility enhancement',
    duration: 60,
    color: 'from-orange-500 to-orange-600',
  },
]

// Doctors by service
const doctorsByService: Record<string, Array<{ id: string; name: string; specialization: string; experience: string; rating: number; initials: string; bgColor: string; image: string }>> = {
  dental: [
    { id: 'dr1', name: 'Dr. Ramesh Sharma', specialization: 'Dental Surgeon', experience: '12 years', rating: 4.8, initials: 'RS', bgColor: 'bg-blue-500', image: '/images/doctors/ramesh-sharma.jpg' },
    { id: 'dr2', name: 'Dr. Priya Patel', specialization: 'Orthodontist', experience: '8 years', rating: 4.7, initials: 'PP', bgColor: 'bg-pink-500', image: '/images/doctors/priya-patel.jpg' },
    { id: 'dr3', name: 'Dr. Arjun Singh', specialization: 'Dental Hygienist', experience: '10 years', rating: 4.9, initials: 'AS', bgColor: 'bg-indigo-500', image: '/images/doctors/ramesh-sharma.jpg' },
  ],
  lab: [
    { id: 'dr4', name: 'Dr. Neha Gupta', specialization: 'Lab Pathologist', experience: '15 years', rating: 4.9, initials: 'NG', bgColor: 'bg-purple-500', image: '/images/doctors/neha-gupta.jpg' },
    { id: 'dr5', name: 'Dr. Vikram Kumar', specialization: 'Clinical Analyst', experience: '11 years', rating: 4.8, initials: 'VK', bgColor: 'bg-violet-500', image: '/images/doctors/vikram-kumar.jpg' },
  ],
  cardiology: [
    { id: 'dr6', name: 'Dr. Rajesh Verma', specialization: 'Cardiologist', experience: '20 years', rating: 4.9, initials: 'RV', bgColor: 'bg-red-500', image: '/images/doctors/ramesh-sharma.jpg' },
    { id: 'dr7', name: 'Dr. Meera Singh', specialization: 'Cardiac Specialist', experience: '16 years', rating: 4.8, initials: 'MS', bgColor: 'bg-rose-500', image: '/images/doctors/priya-patel.jpg' },
    { id: 'dr8', name: 'Dr. Amit Malhotra', specialization: 'Heart Specialist', experience: '14 years', rating: 4.7, initials: 'AM', bgColor: 'bg-orange-500', image: '/images/doctors/vikram-kumar.jpg' },
  ],
  checkup: [
    { id: 'dr9', name: 'Dr. Anjali Sharma', specialization: 'General Practitioner', experience: '9 years', rating: 4.8, initials: 'AS', bgColor: 'bg-green-500', image: '/images/doctors/priya-patel.jpg' },
    { id: 'dr10', name: 'Dr. Sanjay Patel', specialization: 'GP/Internist', experience: '13 years', rating: 4.7, initials: 'SP', bgColor: 'bg-emerald-500', image: '/images/doctors/vikram-kumar.jpg' },
    { id: 'dr11', name: 'Dr. Pooja Reddy', specialization: 'General Physician', experience: '11 years', rating: 4.9, initials: 'PR', bgColor: 'bg-teal-500', image: '/images/doctors/pooja-reddy.jpg' },
  ],
  eye: [
    { id: 'dr12', name: 'Dr. Arun Nair', specialization: 'Ophthalmologist', experience: '17 years', rating: 4.9, initials: 'AN', bgColor: 'bg-cyan-500', image: '/images/doctors/arun-nair.jpg' },
    { id: 'dr13', name: 'Dr. Sneha Desai', specialization: 'Eye Specialist', experience: '10 years', rating: 4.8, initials: 'SD', bgColor: 'bg-sky-500', image: '/images/doctors/sneha-desai.jpg' },
  ],
  mental: [
    { id: 'dr14', name: 'Dr. Kavya Menon', specialization: 'Psychologist', experience: '12 years', rating: 4.9, initials: 'KM', bgColor: 'bg-indigo-600', image: '/images/doctors/kavya-menon.jpg' },
    { id: 'dr15', name: 'Dr. Rohit Joshi', specialization: 'Psychiatrist', experience: '14 years', rating: 4.8, initials: 'RJ', bgColor: 'bg-purple-600', image: '/images/doctors/rohit-joshi.jpg' },
    { id: 'dr16', name: 'Dr. Divya Singh', specialization: 'Counselor', experience: '9 years', rating: 4.7, initials: 'DS', bgColor: 'bg-fuchsia-500', image: '/images/doctors/divya-singh.jpg' },
  ],
  physical: [
    { id: 'dr17', name: 'Dr. Vikrant Kumar', specialization: 'Physiotherapist', experience: '11 years', rating: 4.9, initials: 'VK', bgColor: 'bg-amber-500', image: '/images/doctors/ramesh-sharma.jpg' },
    { id: 'dr18', name: 'Dr. Seema Pandey', specialization: 'Physical Therapist', experience: '13 years', rating: 4.8, initials: 'SP', bgColor: 'bg-yellow-500', image: '/images/doctors/priya-patel.jpg' },
  ],
}

// Generate time slots (every 30 minutes from 9 AM to 5 PM)
const generateTimeSlots = () => {
  const slots = []
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      slots.push(time)
    }
  }
  return slots
}

// Initialize booking data (simulating stored bookings)
const initializeBookings = () => {
  const bookings: Record<string, Record<string, number>> = {}
  const today = new Date()
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() + i)
    const dateStr = date.toISOString().split('T')[0]
    bookings[dateStr] = {}
    
    generateTimeSlots().forEach(slot => {
      // Randomly populate some bookings for demo purposes
      bookings[dateStr][slot] = Math.floor(Math.random() * 10)
    })
  }
  
  return bookings
}

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState(services[0].id)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookings, setBookings] = useState(initializeBookings())
  const [submitted, setSubmitted] = useState(false)
  const [userDetails, setUserDetails] = useState({ name: '', email: '', phone: '' })

  const currentService = services.find(s => s.id === selectedService)
  const timeSlots = generateTimeSlots()

  // Calendar generation
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }, [currentDate])

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDateSelect = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (date < today) return
    
    const dateStr = date.toISOString().split('T')[0]
    setSelectedDate(dateStr)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time: string) => {
    if (selectedDate) {
      const currentBookings = bookings[selectedDate][time] || 0
      if (currentBookings < 10) {
        setSelectedTime(time)
      }
    }
  }

  const handleBooking = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime || !userDetails.name || !userDetails.email || !userDetails.phone) {
      alert('Please select a doctor and fill in all details')
      return
    }

    // Update booking count
    const newBookings = { ...bookings }
    newBookings[selectedDate][selectedTime] = (newBookings[selectedDate][selectedTime] || 0) + 1
    setBookings(newBookings)
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setSelectedDoctor(null)
      setSelectedDate(null)
      setSelectedTime(null)
      setUserDetails({ name: '', email: '', phone: '' })
    }, 3000)
  }

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isTimeSlotAvailable = (time: string) => {
    if (!selectedDate) return false
    const dateBookings = bookings[selectedDate]
    if (!dateBookings) return true
    const currentBookings = dateBookings[time] || 0
    return currentBookings < 10
  }

  const getAvailableSlots = () => {
    if (!selectedDate) return 0
    return timeSlots.filter(time => isTimeSlotAvailable(time)).length
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Book Your Appointment
          </h1>
          <p className="text-lg text-slate-600">
            Schedule a consultation with our healthcare professionals
          </p>
        </div>

        {submitted && (
          <div className="max-w-md mx-auto mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl flex items-start gap-4 animate-pulse">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-green-900">Booking Confirmed!</h3>
              <p className="text-sm text-green-700">
                Your appointment has been successfully booked. Check your email for details.
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Services & Calendar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Service</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map(service => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id)
                      setSelectedDoctor(null)
                      setSelectedTime(null)
                    }}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      selectedService === service.id
                        ? `bg-gradient-to-br ${service.color} text-white shadow-lg shadow-${service.color}/30 scale-105`
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-left">{service.title}</div>
                    <div className={`text-sm text-left mt-1 ${
                      selectedService === service.id ? 'text-white/90' : 'text-slate-600'
                    }`}>
                      {service.duration} mins
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Doctor Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Doctor</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(doctorsByService[selectedService] || []).map(doctor => (
                  <button
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor.id)}
                    className={`p-5 rounded-xl transition-all duration-300 text-left border-2 ${
                      selectedDoctor === doctor.id
                        ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg scale-105'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 flex-shrink-0 relative">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement
                            img.style.display = 'none'
                            const fallback = img.nextElementSibling as HTMLElement
                            if (fallback) fallback.style.display = 'flex'
                          }}
                        />
                        <div className={`w-14 h-14 ${doctor.bgColor} rounded-full flex items-center justify-center shadow-md absolute inset-0 hidden`}>
                          <span className="text-white font-bold text-lg">{doctor.initials}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-sm leading-tight">{doctor.name}</h3>
                        <p className="text-xs text-slate-600 mt-1">{doctor.specialization}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2.5 py-1.5 rounded-lg flex-shrink-0">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-xs font-bold text-yellow-700">{doctor.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 ml-18">{doctor.experience}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Date</h2>
              
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-600" />
                </button>
                <h3 className="text-xl font-semibold text-slate-900">
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-slate-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((date, idx) => {
                  if (!date) {
                    return <div key={`empty-${idx}`} />
                  }

                  const dateStr = date.toISOString().split('T')[0]
                  const isSelected = selectedDate === dateStr
                  const isDisabled = isDateDisabled(date)

                  return (
                    <button
                      key={dateStr}
                      onClick={() => handleDateSelect(date)}
                      disabled={isDisabled}
                      className={`p-3 rounded-lg font-semibold transition-all duration-300 ${
                        isDisabled
                          ? 'text-slate-300 cursor-not-allowed'
                          : isSelected
                          ? 'bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Time Slots & Booking */}
          <div className="space-y-8">
            {/* Selected Service Summary */}
            {currentService && (
              <div className={`bg-gradient-to-br ${currentService.color} text-white rounded-2xl p-8 shadow-lg`}>
                <h3 className="text-2xl font-bold mb-2">{currentService.title}</h3>
                <p className="text-white/90 mb-4">{currentService.description}</p>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>{currentService.duration} minutes</span>
                </div>
              </div>
            )}

            {/* Time Slots */}
            {selectedDate && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Available Times</h3>
                <div className="text-sm text-slate-600 mb-4 p-3 bg-blue-50 rounded-lg">
                  {getAvailableSlots()} slots available
                </div>
                
                <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                  {timeSlots.map(time => {
                    const isAvailable = isTimeSlotAvailable(time)
                    const bookedCount = bookings[selectedDate]?.[time] || 0
                    const isSelected = selectedTime === time

                    return (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        disabled={!isAvailable}
                        className={`p-3 rounded-lg font-semibold transition-all duration-300 ${
                          !isAvailable
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
                            : isSelected
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                        }`}
                      >
                        <div className="text-sm">{time}</div>
                        <div className="text-xs mt-1 flex items-center justify-center gap-1">
                          <Users className="w-3 h-3" />
                          {bookedCount}/10
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Patient Details */}
            {selectedDate && selectedTime && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Your Details</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={userDetails.phone}
                    onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Booking Summary */}
                <div className="mt-6 p-4 bg-slate-50 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Service:</span>
                    <span className="font-semibold text-slate-900">{currentService?.title}</span>
                  </div>
                  {selectedDoctor && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Doctor:</span>
                      <span className="font-semibold text-slate-900">
                        {doctorsByService[selectedService]?.find(d => d.id === selectedDoctor)?.name}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Date:</span>
                    <span className="font-semibold text-slate-900">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Time:</span>
                    <span className="font-semibold text-slate-900">{selectedTime}</span>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
