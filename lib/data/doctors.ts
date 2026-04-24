export interface Doctor {
  id: number
  name: string
  specialization: string
  image: string
  bio: string
  qualifications: string[]
  experience: number
  email: string
  phone: string
  availability: string
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "General Practitioner",
    image: "/images/doctor1.jpg",
    bio: "Compassionate healthcare provider with 15+ years of experience in comprehensive patient care and preventive medicine.",
    qualifications: [
      "MD - Harvard Medical School",
      "Board Certified in Family Medicine",
      "Advanced Cardiac Life Support"
    ],
    experience: 15,
    email: "sarah.johnson@clinic.com",
    phone: "+1 (555) 123-4567",
    availability: "Mon-Fri: 9AM - 5PM"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Dental Surgeon",
    image: "/images/doctor2.jpeg",
    bio: "Expert in advanced dental procedures with a focus on cosmetic and restorative dentistry.",
    qualifications: [
      "DDS - Stanford University",
      "Specialist in Implantology",
      "Cosmetic Dentistry Certification"
    ],
    experience: 12,
    email: "michael.chen@clinic.com",
    phone: "+1 (555) 234-5678",
    availability: "Tue-Sat: 10AM - 6PM"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Ophthalmologist",
    image: "/images/doctor3.jpg",
    bio: "Specialized in comprehensive eye care and vision correction.",
    qualifications: [
      "MD - Yale School of Medicine",
      "Fellowship in Ophthalmology",
      "Certified LASIK Surgeon"
    ],
    experience: 18,
    email: "emily.rodriguez@clinic.com",
    phone: "+1 (555) 345-6789",
    availability: "Mon, Wed, Fri: 8AM - 4PM"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Mental Health Specialist",
    image: "/images/doctor4.jpg",
    bio: "Specializing in anxiety, depression, and cognitive behavioral therapy.",
    qualifications: [
      "PhD in Clinical Psychology",
      "Licensed Therapist",
      "Certified in CBT"
    ],
    experience: 14,
    email: "james.wilson@clinic.com",
    phone: "+1 (555) 456-7890",
    availability: "Mon-Thu: 2PM - 8PM"
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    specialization: "Cardiologist",
    image: "/images/doctor5.webp",
    bio: "Heart health expert with extensive experience in cardiovascular disease management.",
    qualifications: [
      "MD - Johns Hopkins University",
      "Board Certified Cardiologist",
      "Echocardiography Certification"
    ],
    experience: 16,
    email: "lisa.anderson@clinic.com",
    phone: "+1 (555) 567-8901",
    availability: "Tue, Thu: 9AM - 5PM"
  },
  {
    id: 6,
    name: "Dr. Robert Martinez",
    specialization: "Physical Therapist",
    image: "/images/doctor6.png",
    bio: "Dedicated to helping patients recover and improve mobility.",
    qualifications: [
      "DPT - University of California",
      "Certified Strength Specialist",
      "Sports Medicine Certification"
    ],
    experience: 10,
    email: "robert.martinez@clinic.com",
    phone: "+1 (555) 678-9012",
    availability: "Mon-Fri: 7AM - 7PM"
  }
]