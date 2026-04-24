'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Award, Users, Target, Stethoscope, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Scroll Reveal Component
const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Stats Counter Component
const StatCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const increment = target / 30
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 30)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      bio: "20+ years of experience in internal medicine and patient care",
      specialty: "Internal Medicine"
    },
    {
      name: "Dr. Michael Chen",
      role: "Lead Physician",
      bio: "Specialist in preventive medicine and chronic disease management",
      specialty: "Preventive Medicine"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "General Practitioner",
      bio: "Dedicated to family medicine and comprehensive patient care",
      specialty: "Family Medicine"
    },
    {
      name: "Nurse Karen Williams",
      role: "Head Nurse",
      bio: "Expert in patient care coordination and healthcare management",
      specialty: "Care Coordination"
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in medical care and patient service"
    },
    {
      icon: Users,
      title: "Compassion",
      description: "Treating every patient with empathy, respect, and understanding"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with honesty and maintaining the highest ethical standards"
    },
    {
      icon: Target,
      title: "Dedication",
      description: "Committed to continuous improvement and patient well-being"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
            <div className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
                About HealthCare Clinic
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Dedicated to providing quality healthcare services since 2000. Trusted by thousands, committed to excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-secondary/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <ScrollReveal>
                <div className="text-center">
                  <StatCounter target={25} suffix="+" />
                  <p className="text-foreground/70 mt-4">Years of Service</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="text-center">
                  <StatCounter target={50000} suffix="+" />
                  <p className="text-foreground/70 mt-4">Patients Served</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="text-center">
                  <StatCounter target={15} suffix="+" />
                  <p className="text-foreground/70 mt-4">Expert Doctors</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="text-center">
                  <StatCounter target={98} suffix="%" />
                  <p className="text-foreground/70 mt-4">Patient Satisfaction</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-xl p-8 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                    </div>
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      To provide accessible, compassionate, and high-quality healthcare services that promote the health and well-being of our patients and community. We are committed to treating every patient with respect and delivering personalized care that exceeds expectations.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-xl p-8 backdrop-blur-sm hover:border-accent/40 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Heart className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold text-accent">Our Vision</h2>
                    </div>
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      To be the most trusted and preferred healthcare provider in our region, known for clinical excellence, patient satisfaction, and innovative medical practices. We envision a healthier community where everyone has access to quality care.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Core Values</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card
                      className="relative border-0 overflow-hidden group cursor-pointer h-full"
                      onMouseEnter={() => setHoveredValue(index)}
                      onMouseLeave={() => setHoveredValue(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                        transform: hoveredValue === index ? 'scale(1)' : 'scale(0.95)',
                        transition: 'transform 0.3s ease-out'
                      }} />
                      <CardHeader className="relative z-10">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-center text-xl group-hover:text-primary transition-colors">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-sm text-foreground/70 text-center group-hover:text-foreground/80 transition-colors">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-primary mb-8">Our Story</h2>
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="relative pl-8 border-l-2 border-primary/30 pb-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Founded in 2000</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    HealthCare Clinic began with a simple vision: to provide quality medical care to our local community. What started as a small practice with three doctors has grown into a comprehensive healthcare facility serving thousands of patients annually.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative pl-8 border-l-2 border-accent/30 pb-6">
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1" />
                  <h3 className="text-xl font-semibold text-accent mb-2">Growth & Innovation</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Over the past two decades, we have invested in modern medical equipment, expanded our team of healthcare professionals, and developed comprehensive services to meet the evolving healthcare needs of our patients.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Today & Beyond</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We take pride in our reputation for excellence, patient satisfaction, and community service. We continue to uphold our founding principles while embracing innovation and technological advancement in healthcare.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-center text-primary mb-16">Meet Our Expert Team</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="relative overflow-hidden border-0 group hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{member.name}</CardTitle>
                          <div className="text-sm text-primary font-semibold mt-2">{member.role}</div>
                        </div>
                        <Stethoscope className="w-8 h-8 text-accent/40 group-hover:text-accent/100 transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-3">
                      <p className="text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
                      <div className="pt-3 border-t border-border">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {member.specialty}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-20 -right-20" />
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-20 -left-20" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Quality Healthcare</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
                Visit our clinic and discover why thousands of patients trust us with their health and well-being
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Your Visit Today
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  )
}