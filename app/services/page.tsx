import ServiceCard from '@/components/services/ServiceCard'
import { services } from '@/lib/data/services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p>Explore our healthcare services</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </div>
  )
}