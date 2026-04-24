'use client'
import { useState } from "react"
import DoctorCard from "@/components/doctors/DoctorCard"
import DoctorModal from "@/components/doctors/DoctorModal"

export default function DoctorsClient({ doctors }: any) {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)

  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-primary">
          Our Doctors
        </h1>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {doctors.map((doctor: any) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onClick={() => setSelectedDoctor(doctor)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <DoctorModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}

    </div>
  )
}