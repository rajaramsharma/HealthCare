import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: any
    image: string
    link: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Link href={service.link}>
      <div className="p-6 bg-card border border-primary/10 rounded-xl hover:border-accent/50 hover:shadow-xl transition-all duration-300 group">

        {/* Image */}
        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Icon */}
        <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
          <Icon className="w-6 h-6 text-accent" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-primary mb-2">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-foreground/70">
          {service.description}
        </p>

        {/* Learn */}
        <div className="mt-4 text-sm text-accent font-semibold">
          Learn More →
        </div>

      </div>
    </Link>
  )
}