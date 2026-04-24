import HeroCarousel from "@/components/hero-carousel"
import StatCard from "@/components/stat-card"
import ServiceCard from "@/components/services/ServiceCard" // 👈 full card style use
import ScrollRevealElement from "@/components/scroll-reveal"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
  Heart,
  Users,
  Clock,
  Shield,
  ArrowRight
} from "lucide-react"

import { services } from "@/lib/data/services"

export default function Home() {
  return (
    <main className="relative">
      
      <HeroCarousel />

      {/* Stats */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <StatCard label="25+" value="Years Experience" Icon={Shield} />
          <StatCard label="50K+" value="Happy Patients" Icon={Users} />
          <StatCard label="24/7" value="Available Care" Icon={Clock} />
          <StatCard label="99%" value="Satisfaction Rate" Icon={Heart} />
        </div>
      </section>

      {/* Services (PREVIEW LIKE SERVICES PAGE) */}
      <section className="py-16 sm:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">

          <ScrollRevealElement className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-primary">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Explore our most important healthcare services
            </p>
          </ScrollRevealElement>

          {/* 👇 SAME STYLE AS SERVICES PAGE (FULL CARD) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <ScrollRevealElement className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollRevealElement>

        </div>
      </section>

    </main>
  )
}