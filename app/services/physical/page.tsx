'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import {
  Activity,
  Zap,
  Shield,
  Users,
  Zap as Strength,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function PhysicalTherapy() {
  const services = [
    {
      title: 'Injury Rehabilitation',
      description: 'Comprehensive rehabilitation programs for sports injuries, fractures, and post-surgical recovery with personalized treatment plans.',
      benefits: [
        'Personalized recovery protocols',
        'Pain management strategies',
        'Progressive strengthening exercises',
      ],
      icon: Activity,
      image: "/images/services-image/physical-therapy2.jpg"
    },
    {
      title: 'Sports Physical Therapy',
      description: 'Specialized treatment for athletes to improve performance, prevent injuries, and accelerate return to sport.',
      benefits: [
        'Athletic performance optimization',
        'Injury prevention strategies',
        'Sport-specific training',
      ],
      icon: Zap,
      image: "/images/services-image/physical-therapy3.jpg"
    },
    {
      title: 'Orthopedic Therapy',
      description: 'Expert care for musculoskeletal conditions including joint pain, arthritis, and structural disorders.',
      benefits: [
        'Joint mobility enhancement',
        'Arthritis management',
        'Structural alignment correction',
      ],
      icon: Activity,
      image: "/images/services-image/physical-therapy4.jpg"
    },
    {
      title: 'Neurological Rehabilitation',
      description: 'Specialized treatment for stroke, spinal cord injuries, and neurological conditions to restore function and independence.',
      benefits: [
        'Motor function recovery',
        'Balance and coordination training',
        'Functional mobility restoration',
      ],
      icon: Strength,
      image: "/images/services-image/physical-therapy5.jpg"
    },
    {
      title: 'Manual Therapy',
      description: 'Hands-on techniques including joint mobilization, soft tissue massage, and therapeutic manipulation for pain relief.',
      benefits: [
        'Joint mobilization',
        'Soft tissue release',
        'Pain reduction techniques',
      ],
      icon: Activity,
      image: "/images/services-image/physical-therapy6.jpg"
    },
    {
      title: 'Post-Surgical Physical Therapy',
      description: 'Guided rehabilitation following surgery to restore strength, mobility, and return to normal activities safely.',
      benefits: [
        'Surgical recovery optimization',
        'Scar tissue management',
        'Gradual activity progression',
      ],
      icon: Shield,
      image: "/images/services-image/physical-therapy7.jpg"
    },
  ];

  const symptoms = [
    {
      title: 'Acute Pain & Injury',
      description:
        'Sharp or sudden pain from sports injuries, falls, or accidents requires immediate assessment and treatment to prevent chronic issues.',
    },
    {
      title: 'Limited Range of Motion',
      description:
        'Difficulty moving a joint through its full range indicates muscle tightness, joint dysfunction, or structural problems.',
    },
    {
      title: 'Chronic Pain',
      description:
        'Persistent pain lasting more than 3 months, often from arthritis, fibromyalgia, or muscular imbalances requiring specialized therapy.',
    },
    {
      title: 'Balance & Coordination Issues',
      description:
        'Difficulty with balance, coordination, or proprioception may indicate neurological issues or require vestibular rehabilitation.',
    },
    {
      title: 'Weakness & Muscle Loss',
      description:
        'Unexplained weakness or muscle atrophy may result from disuse, surgery, or neurological conditions needing rehabilitation.',
    },
    {
      title: 'Post-Surgical Stiffness',
      description:
        'Stiffness and limited mobility following surgery requires supervised therapy to regain function and prevent complications.',
    },
  ];

  const benefits = [
    {
      title: 'Licensed Therapists',
      description: 'Certified and experienced physical therapists specializing in various treatment areas and patient needs.',
    },
    {
      title: 'Personalized Plans',
      description: 'Custom rehabilitation programs tailored to your specific condition, goals, and recovery timeline.',
    },
    {
      title: 'Modern Equipment',
      description: 'State-of-the-art therapeutic equipment and facilities for optimal treatment outcomes.',
    },
    {
      title: 'Convenient Scheduling',
      description: 'Flexible appointment times and multiple session options to fit your lifestyle and recovery needs.',
    },
    {
      title: 'Evidence-Based Care',
      description: 'Treatment based on latest research and clinical best practices for proven results and outcomes.',
    },
    {
      title: 'Home Exercise Programs',
      description: 'Customized exercises for home that complement clinic sessions and accelerate your recovery.',
    },
    {
      title: 'Progress Tracking',
      description: 'Regular assessments and progress monitoring to adjust treatment and celebrate your achievements.',
    },
    {
      title: 'Insurance Accepted',
      description: 'We work with most insurance plans for accessible and affordable physical therapy services.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <Image
          src="/images/services-image/physical-therapy1.jpg"
          alt="Physical Therapy Care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 text-pretty">Physical Therapy Services</h1>
            <p className="text-xl text-balance">
              Recover stronger with expert physical therapy and rehabilitation
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Services Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3 text-pretty">
              Our Physical Therapy Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive rehabilitation and recovery programs for all conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <IconComponent className="w-6 h-6 text-white" />
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3 text-pretty">
              When to Seek Physical Therapy
            </h2>
            <p className="text-lg text-muted-foreground">
              Common conditions that benefit from physical therapy treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {symptoms.map((symptom, index) => (
              <Card key={index} className="p-6 border-accent/20 hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-foreground">{symptom.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {symptom.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3 text-pretty">
              Why Choose Our Physical Therapy Center
            </h2>
            <p className="text-lg text-muted-foreground">
              Excellence in rehabilitation and patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border-none shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  {index % 4 === 0 && <Activity className="w-8 h-8 text-primary" />}
                  {index % 4 === 1 && <Zap className="w-8 h-8 text-primary" />}
                  {index % 4 === 2 && <Users className="w-8 h-8 text-primary" />}
                  {index % 4 === 3 && <Shield className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
