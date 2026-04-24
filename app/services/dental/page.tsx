'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Heart,
  Zap,
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Smile,
} from 'lucide-react';

export default function DentalServices() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="/images/services-image/dental1.jpg"
          alt="Professional dental clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4">Professional Dental Care</h1>
            <p className="text-xl opacity-90">Experience world-class dental services with our expert team</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive dental care for all your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1: Teeth Cleaning */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/dental2.jpg"
                alt="Teeth cleaning service"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Professional Cleaning</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Remove plaque and tartar buildup with our advanced ultrasonic cleaning technology. Keeps your teeth fresh and healthy.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Removes plaque & tartar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Advanced technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Painless procedure</span>
                </li>
              </ul>
            </Card>

            {/* Service 2: Root Canal Treatment (RCT) */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/dental3.jpg"
                alt="Root canal treatment"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Root Canal (RCT)</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced endodontic treatment to save your natural tooth. Our expert endodontists use latest microscope technology for precision.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Saves natural tooth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Microscope precision</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Pain relief</span>
                </li>
              </ul>
            </Card>

            {/* Service 3: Teeth Whitening */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/dental4.jpg"
                alt="Teeth whitening"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Smile className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Teeth Whitening</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Professional whitening treatments for a brighter smile. Results visible in just one session with lasting effects.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant results</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Safe & effective</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Long lasting</span>
                </li>
              </ul>
            </Card>

            {/* Service 4: Dental Implants */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/dental5.jpg"
                alt="Dental implants"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Dental Implants</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Replace missing teeth with our state-of-the-art implant solutions. Natural-looking and fully functional prosthetics.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Natural appearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Durable & reliable</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Improved function</span>
                </li>
              </ul>
            </Card>

            {/* Service 5: Orthodontics */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/dental6.jpg"
                alt="Orthodontics and braces"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Smile className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Orthodontics & Braces</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Straighten your teeth with modern braces and aligners. Achieve the perfect smile with personalized treatment plans.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Traditional & invisible options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Proven results</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Expert orthodontists</span>
                </li>
              </ul>
            </Card>

            {/* Service 6: Fillings & Restoration */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/dental7.jpg"
                alt="Fillings and restoration"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Fillings & Restoration</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Restore damaged teeth with tooth-colored composite fillings. Aesthetic and durable solutions for dental cavities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Tooth-colored materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Long-lasting results</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Quick procedure</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Dental Symptoms Section */}
      <section id="symptoms" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Common Dental Symptoms</h2>
            <p className="text-muted-foreground text-lg">When to seek professional dental care</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Symptom 1 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Tooth Pain & Sensitivity</h3>
                  <p className="text-muted-foreground mb-3">
                    Sharp pain when eating or drinking, especially with hot/cold items.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>May indicate:</strong> Cavities, infection, exposed root, or weakened enamel. Visit us for proper diagnosis and treatment.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 2 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Gum Disease & Bleeding</h3>
                  <p className="text-muted-foreground mb-3">
                    Red, swollen gums that bleed during brushing or flossing.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>May indicate:</strong> Gingivitis or periodontitis. Early treatment prevents tooth loss.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 3 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Discolored or Stained Teeth</h3>
                  <p className="text-muted-foreground mb-3">
                    Yellow, brown, or dark spots on teeth surface.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Causes:</strong> Staining from food/drinks, smoking, aging, or enamel erosion. Professional whitening helps.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 4 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Misaligned Teeth</h3>
                  <p className="text-muted-foreground mb-3">
                    Crowded, overlapping, or uneven teeth affecting your smile.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Braces, aligners, or other orthodontic treatments for a perfect smile.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 5 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Missing Teeth</h3>
                  <p className="text-muted-foreground mb-3">
                    One or more teeth lost due to decay, accident, or age.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> Dental implants, bridges, or dentures to restore function and aesthetics.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 6 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Bad Breath</h3>
                  <p className="text-muted-foreground mb-3">
                    Persistent bad smell from mouth despite brushing regularly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>May indicate:</strong> Poor oral hygiene, gum disease, or dental decay. Professional cleaning helps.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Why Choose SmileCare Clinic</h2>
            <p className="text-muted-foreground text-lg">Experience the difference with our dedicated team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Expert Team</h3>
              <p className="text-muted-foreground text-sm">
                Experienced dentists and specialists with advanced training and certifications.
              </p>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Modern Technology</h3>
              <p className="text-muted-foreground text-sm">
                Latest dental equipment and techniques for precise, painless treatments.
              </p>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Convenient Hours</h3>
              <p className="text-muted-foreground text-sm">
                Flexible scheduling with early morning and evening appointments available.
              </p>
            </Card>

            {/* Benefit 4 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Patient Comfort</h3>
              <p className="text-muted-foreground text-sm">
                Relaxing environment with gentle care approach for stress-free dental visits.
              </p>
            </Card>

            {/* Benefit 5 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">High Hygiene Standards</h3>
              <p className="text-muted-foreground text-sm">
                Strict sterilization protocols and infection control measures for your safety.
              </p>
            </Card>

            {/* Benefit 6 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Smile className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Competitive rates with flexible payment plans to fit your budget.
              </p>
            </Card>

            {/* Benefit 7 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Personalized Care</h3>
              <p className="text-muted-foreground text-sm">
                Customized treatment plans tailored to your specific dental needs and goals.
              </p>
            </Card>

            {/* Benefit 8 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Quick Results</h3>
              <p className="text-muted-foreground text-sm">
                Efficient treatment plans with visible improvements and noticeable results.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
