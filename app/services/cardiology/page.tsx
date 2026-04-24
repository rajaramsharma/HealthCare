'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import {
  Heart,
  Activity,
  Zap,
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function Cardiology() {
  const services = [
    {
      title: 'Cardiac Consultation',
      description: 'Comprehensive heart health evaluation and personalized treatment planning with our experienced cardiologists.',
      benefits: [
        'Thorough cardiovascular assessment',
        'Customized health recommendations',
        'Prevention strategies',
      ],
      icon: Heart,
      image: "/images/services-image/cardiology2.jpg"
    },
    {
      title: 'ECG & Stress Testing',
      description: 'Advanced diagnostic testing to monitor heart rhythm and detect potential cardiac issues.',
      benefits: [
        'Real-time heart rhythm monitoring',
        'Stress test evaluation',
        'Early detection capabilities',
      ],
      icon: Activity,
      image: "/images/services-image/cardiology3.jpg"
    },
    {
      title: 'Echocardiography',
      description: 'Non-invasive ultrasound imaging to assess heart structure and function.',
      benefits: [
        'Detailed heart imaging',
        'Accurate diagnosis',
        'No radiation exposure',
      ],
      icon: Zap,
      image: "/images/services-image/cardiology4.jpg"
    },
    {
      title: 'Blood Pressure Management',
      description: 'Personalized hypertension management and monitoring programs.',
      benefits: [
        'Continuous monitoring',
        'Medication optimization',
        'Lifestyle guidance',
      ],
      icon: Activity,
      image: "/images/services-image/cardiology5.jpg"
    },
    {
      title: 'Holter Monitoring',
      description: '24-48 hour ambulatory cardiac monitoring for irregular heartbeat detection.',
      benefits: [
        'Extended monitoring period',
        'Arrhythmia detection',
        'Detailed analysis',
      ],
      icon: Heart,
      image: "/images/services-image/cardiology6.jpg"
    },
    {
      title: 'Preventive Cardiology',
      description: 'Comprehensive prevention programs to reduce cardiovascular risk factors.',
      benefits: [
        'Risk assessment',
        'Lifestyle modification',
        'Long-term health planning',
      ],
      icon: Shield,
      image: "/images/services-image/cardiology7.jpg"
    },
  ];

  const symptoms = [
    {
      title: 'Chest Pain',
      description:
        'Persistent chest discomfort, pressure, or pain in the chest area requires immediate cardiac evaluation to rule out serious conditions.',
    },
    {
      title: 'Shortness of Breath',
      description:
        'Difficulty breathing, especially during physical activity or at rest, may indicate heart or lung complications.',
    },
    {
      title: 'Heart Palpitations',
      description:
        'Fluttering or irregular heartbeat sensations. May be caused by arrhythmia, anxiety, or other cardiac conditions.',
    },
    {
      title: 'Dizziness & Fainting',
      description:
        'Unexplained dizziness, lightheadedness, or fainting episodes could signal blood pressure or cardiac rhythm problems.',
    },
    {
      title: 'Swelling in Legs & Feet',
      description:
        'Edema or fluid retention in lower extremities may indicate heart failure or circulation issues requiring evaluation.',
    },
    {
      title: 'Fatigue & Weakness',
      description:
        'Persistent unexplained tiredness may be related to heart disease or reduced cardiac output capacity.',
    },
  ];

  const benefits = [
    {
      title: 'Expert Cardiologists',
      description: 'Board-certified cardiac specialists with years of experience in heart care and treatment.',
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art cardiac imaging and monitoring equipment for accurate diagnostics.',
    },
    {
      title: 'Preventive Care',
      description: 'Comprehensive prevention programs to reduce cardiovascular risk and improve heart health.',
    },
    {
      title: 'Convenient Hours',
      description: 'Flexible appointment scheduling and emergency cardiac care available 24/7.',
    },
    {
      title: 'Patient Education',
      description: 'Detailed guidance on heart health, medications, lifestyle changes, and wellness strategies.',
    },
    {
      title: 'Affordable Treatment',
      description: 'Transparent pricing and insurance acceptance for accessible cardiac care.',
    },
    {
      title: 'Multidisciplinary Team',
      description: 'Collaboration with nurses, nutritionists, and rehabilitation specialists for complete care.',
    },
    {
      title: 'Follow-up Support',
      description: 'Ongoing monitoring and support to ensure optimal heart health outcomes.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
  <section className="relative h-96 w-full overflow-hidden">
  <Image
    src="/images/services-image/cardiology1.jpg" // double-check folder name
    alt="Cardiology Care"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-4 text-pretty">Cardiology Services</h1>
      <p className="text-xl text-balance">
        Advanced cardiac care for a healthier heart
      </p>
    </div>
  </div>
</section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Services Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3 text-pretty">
              Our Cardiology Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive cardiac care from diagnosis to treatment and prevention
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
              Cardiac Symptoms & When to Seek Care
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding warning signs helps you get timely treatment
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
              Why Choose Our Cardiology Center
            </h2>
            <p className="text-lg text-muted-foreground">
              Excellence in cardiac care and patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border-none shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  {index % 4 === 0 && <Heart className="w-8 h-8 text-primary" />}
                  {index % 4 === 1 && <Activity className="w-8 h-8 text-primary" />}
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
