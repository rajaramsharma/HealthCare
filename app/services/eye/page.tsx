'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function EyeCarePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/services-image/eyecare1.jpg"
    alt="Eye Care Services"
    fill
    className="object-cover"
    priority
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4 md:px-8">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
      Professional Eye Care Services
    </h1>
    <p className="text-md md:text-xl mb-6 text-balance">
      Comprehensive vision care from experienced optometrists and ophthalmologists
    </p>
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
      Book Your Eye Exam
    </Button>
  </div>
</section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Eye Care Services</h2>
            <p className="text-gray-600 text-lg">
              We offer a full range of comprehensive eye care services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comprehensive Eye Exams */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/eyecare2.jpg"
                alt="Comprehensive Eye Exams"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Comprehensive Eye Exams</h3>
              <p className="text-gray-600">
                Complete vision assessment including eye pressure, retinal examination, and visual field testing
              </p>
            </div>

            {/* Prescription Glasses & Contacts */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/eyecare3.jpg"
                alt="Glasses & Contacts"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Prescription Glasses & Contacts</h3>
              <p className="text-gray-600">
                Wide selection of eyewear styles and contact lens fittings tailored to your needs
              </p>
            </div>

            {/* Cataract Surgery */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/eyecare4.jpg"
                alt="Cataract Surgery"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Cataract Surgery</h3>
              <p className="text-gray-600">
                Advanced surgical procedures to restore clear vision caused by cataracts
              </p>
            </div>

            {/* Corneal & Refractive Surgery */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/eyecare5.jpg"
                alt="Refractive Surgery"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Corneal & Refractive Surgery</h3>
              <p className="text-gray-600">
                LASIK and other advanced procedures to reduce dependence on glasses and contacts
              </p>
            </div>

            {/* Glaucoma Treatment */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/eyecare6.jpg"
                alt="Glaucoma Treatment"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Glaucoma Treatment</h3>
              <p className="text-gray-600">
                Specialized care and management to prevent vision loss from glaucoma
              </p>
            </div>

            {/* Diabetic Eye Care */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/eyecare7.jpg"
                alt="Diabetic Eye Care"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Diabetic Eye Care</h3>
              <p className="text-gray-600">
                Preventive screening and treatment for diabetes-related eye complications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Visit Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When to Schedule an Eye Exam</h2>
            <p className="text-gray-600 text-lg">
              Regular eye care is important for maintaining healthy vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Vision Changes',
                description: 'If you notice blurry vision, difficulty focusing, or sudden vision loss'
              },
              {
                title: 'Eye Strain & Discomfort',
                description: 'Persistent eye pain, redness, watering, or sensitivity to light'
              },
              {
                title: 'Headaches',
                description: 'Frequent headaches that may be related to vision problems'
              },
              {
                title: 'Family History',
                description: 'Family members with glaucoma, cataracts, or other eye conditions'
              },
              {
                title: 'Diabetes or High Blood Pressure',
                description: 'Regular monitoring if you have systemic conditions affecting eyes'
              },
              {
                title: 'Routine Check-ups',
                description: 'Annual or biennial exams for healthy vision maintenance'
              }
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Professional Eye Care</h2>
            <p className="text-gray-600 text-lg">
              Why you should trust our experienced eye care professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Early Detection',
                description: 'Detect eye diseases early when treatment is most effective'
              },
              {
                title: 'Precise Prescriptions',
                description: 'Get accurate prescriptions for optimal vision clarity and comfort'
              },
              {
                title: 'Advanced Technology',
                description: 'Access to cutting-edge diagnostic and surgical equipment'
              },
              {
                title: 'Personalized Treatment',
                description: 'Customized care plans based on your individual eye health needs'
              },
              {
                title: 'Disease Prevention',
                description: 'Learn preventive measures to protect your vision long-term'
              },
              {
                title: 'Expert Specialists',
                description: 'Board-certified ophthalmologists and optometrists with extensive experience'
              },
              {
                title: 'Lifestyle Guidance',
                description: 'Advice on nutrition, protection, and digital eye strain management'
              },
              {
                title: 'Comprehensive Care',
                description: 'All your eye care needs met in one trusted location'
              }
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                    <span>✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Eye Exam Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Take the first step towards better vision and eye health
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Book Appointment
          </Button>
        </div>
      </section>
    </main>
  );
}