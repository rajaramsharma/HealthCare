'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Activity,
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
} from 'lucide-react';

export default function GeneralCheckup() {
  const services = [
    {
      title: 'Complete Health Checkup',
      description: 'Comprehensive full-body examination and health assessment with detailed medical history review.',
      benefits: [
        'Thorough physical examination',
        'Health risk assessment',
        'Personalized health recommendations',
      ],
      icon: Heart,
      image: '/images/services-image/general-checkup2.jpg',
    },
    {
      title: 'Vital Signs Monitoring',
      description: 'Accurate measurement and monitoring of blood pressure, heart rate, temperature, and respiratory rate.',
      benefits: [
        'Precise vital sign measurement',
        'Continuous health tracking',
        'Early warning detection',
      ],
      icon: Activity,
      image: '/images/services-image/general-checkup3.jpg',
    },
    {
      title: 'Laboratory Tests',
      description: 'Complete blood work and laboratory analysis including CBC, lipid profile, and metabolic panel.',
      benefits: [
        'Comprehensive blood analysis',
        'Disease screening',
        'Accurate diagnostics',
      ],
      icon: Zap,
      image: '/images/services-image/general-checkup4.jpg',
    },
    {
      title: 'Health Counseling',
      description: 'Expert guidance on nutrition, exercise, lifestyle modification, and preventive health measures.',
      benefits: [
        'Personalized health plans',
        'Lifestyle coaching',
        'Dietary recommendations',
      ],
      icon: Users,
      image: '/images/services-image/general-checkup5.jpg',
    },
    {
      title: 'Age-Specific Screening',
      description: 'Tailored screening packages based on age, gender, and medical history for optimal preventive care.',
      benefits: [
        'Age-appropriate tests',
        'Risk factor screening',
        'Early disease detection',
      ],
      icon: Shield,
      image: '/images/services-image/general-checkup6.jpg',
    },
    {
      title: 'Follow-up & Wellness',
      description: 'Ongoing support with regular follow-up appointments and personalized wellness programs.',
      benefits: [
        'Continuous monitoring',
        'Progress tracking',
        'Long-term health management',
      ],
      icon: Clock,
      image: '/images/services-image/general-checkup7.jpg',
    },
  ];

  const symptoms = [
    {
      title: 'General Fatigue',
      description: 'Persistent tiredness and lack of energy throughout the day despite adequate rest.',
      icon: AlertCircle,
    },
    {
      title: 'Frequent Infections',
      description: 'Recurrent colds, flu, or infections indicating weakened immune system function.',
      icon: Shield,
    },
    {
      title: 'Weight Changes',
      description: 'Unexplained weight gain or loss without dietary or lifestyle changes.',
      icon: Activity,
    },
    {
      title: 'Digestive Issues',
      description: 'Chronic constipation, diarrhea, or abdominal discomfort affecting daily life.',
      icon: Zap,
    },
    {
      title: 'Sleep Problems',
      description: 'Insomnia, poor sleep quality, or excessive daytime sleepiness affecting health.',
      icon: Clock,
    },
    {
      title: 'Headaches & Dizziness',
      description: 'Frequent headaches or dizziness episodes that impact normal functioning.',
      icon: AlertCircle,
    },
  ];

  const benefits = [
    {
      title: 'Expert Physicians',
      description: 'Highly qualified and experienced general practitioners dedicated to your health.',
      icon: Users,
    },
    {
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art diagnostic equipment for accurate health assessment.',
      icon: Zap,
    },
    {
      title: 'Preventive Focus',
      description: 'Emphasis on disease prevention and early detection for better outcomes.',
      icon: Shield,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Convenient appointment slots and extended hours for your busy lifestyle.',
      icon: Clock,
    },
    {
      title: 'Comprehensive Records',
      description: 'Detailed health records and documentation for continuity of care.',
      icon: CheckCircle,
    },
    {
      title: 'Affordable Care',
      description: 'Transparent pricing with various payment options for accessibility.',
      icon: Heart,
    },
    {
      title: 'Patient Education',
      description: 'Empowering patients with health information and wellness knowledge.',
      icon: Activity,
    },
    {
      title: 'Holistic Approach',
      description: 'Comprehensive care addressing physical, mental, and emotional wellness.',
      icon: Shield,
    },
  ];

  return (
    <main className="w-full bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="/images/services-image/general-checkup1.jpg"
          alt="General Checkup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-balance text-center">
            General Health Checkup
          </h1>
          <p className="text-xl text-gray-100 text-balance text-center max-w-2xl">
            Comprehensive wellness screening for early detection and preventive health management
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Complete range of general checkup services designed for your optimal health
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
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              When to Schedule a Checkup
            </h2>
            <p className="text-lg text-muted-foreground">
              Common symptoms and conditions that warrant a general health examination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => {
              const IconComponent = symptom.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-secondary/50 bg-white dark:bg-slate-950"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {symptom.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{symptom.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our Clinic
            </h2>
            <p className="text-lg text-muted-foreground">
              Exceptional advantages for your comprehensive health management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 border-none shadow-sm">
                  <IconComponent className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Take Control of Your Health</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Schedule your comprehensive general checkup today and invest in your wellness
          </p>
          <Button
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
          >
            Book Your Checkup
          </Button>
        </div>
      </section>
    </main>
  );
}