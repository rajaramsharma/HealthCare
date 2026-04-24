'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function MentalHealthPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/images/services-image/mentalhealth1.jpg"
      alt="Mental Health Services"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-balance">
      Your Mental Health Matters
    </h1>
    <p className="text-md md:text-xl mb-6 md:mb-8 text-balance">
      Compassionate counseling and therapy services for your emotional well-being
    </p>
    <Link href="#contact">
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
        Schedule a Session
      </Button>
    </Link>
  </div>
</section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Our Mental Health Services
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of mental health and wellness services tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Individual Therapy',
                description: 'One-on-one counseling sessions to address personal challenges, anxiety, depression, and life transitions',
                image: '/images/services-image/mentalhealth2.jpg',
              },
              {
                title: 'Couples Counseling',
                description: 'Relationship therapy to improve communication, resolve conflicts, and strengthen your partnership',
                image: '/images/services-image/mentalhealth3.jpg',
              },
              {
                title: 'Family Therapy',
                description: 'Whole-family sessions to address dynamics, improve understanding, and build healthier relationships',
                image: '/images/services-image/mentalhealth4.jpg',
              },
              {
                title: 'Cognitive Behavioral Therapy',
                description: 'Evidence-based approach to change negative thought patterns and develop healthy coping strategies',
                image: '/images/services-image/mentalhealth5.jpg',
              },
              {
                title: 'Stress Management',
                description: 'Learn practical techniques to manage stress, anxiety, and improve overall mental resilience',
                image: '/images/services-image/mentalhealth6.jpg',
              },
              {
                title: 'Crisis Support',
                description: 'Immediate emotional support and crisis intervention when you need help the most',
                image: '/images/services-image/mentalhealth7.jpg',
              },
            ].map((service, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            When to Seek Mental Health Support
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            These are common reasons people reach out for professional mental health care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Persistent Anxiety',
                description: 'Feeling constant worry, panic attacks, or overwhelming stress that affects daily life',
              },
              {
                title: 'Depression',
                description: 'Experiencing prolonged sadness, loss of interest in activities, or hopelessness',
              },
              {
                title: 'Relationship Issues',
                description: 'Struggling with communication, trust, or conflicts in your relationships',
              },
              {
                title: 'Life Transitions',
                description: 'Coping with major changes like job loss, relocation, or loss of a loved one',
              },
              {
                title: 'Sleep Problems',
                description: 'Insomnia or sleep disturbances affecting your health and well-being',
              },
              {
                title: 'Self-Esteem Concerns',
                description: 'Low confidence, self-doubt, or difficulty maintaining healthy self-image',
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Benefits of Professional Mental Health Care
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Taking care of your mental health leads to lasting positive change
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Emotional Healing',
                description: 'Process past trauma and emotional pain in a safe, supportive environment',
              },
              {
                title: 'Better Coping Skills',
                description: 'Learn practical tools and techniques to handle stress and challenges more effectively',
              },
              {
                title: 'Improved Relationships',
                description: 'Develop healthier communication patterns and stronger connections with others',
              },
              {
                title: 'Increased Self-Awareness',
                description: 'Gain deeper understanding of your thoughts, feelings, and behaviors',
              },
              {
                title: 'Better Physical Health',
                description: 'Mental health improvement leads to better sleep, immunity, and overall wellness',
              },
              {
                title: 'Personal Growth',
                description: 'Build confidence, resilience, and discover your full potential',
              },
              {
                title: 'Reduced Symptoms',
                description: 'Alleviate anxiety, depression, and other mental health concerns',
              },
              {
                title: 'Quality of Life',
                description: 'Enjoy greater happiness, fulfillment, and satisfaction in your daily life',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Care of Your Mental Health?
          </h2>
          <p className="text-xl mb-8">
            Our compassionate therapists are here to support you on your mental wellness journey
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Schedule Your First Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}