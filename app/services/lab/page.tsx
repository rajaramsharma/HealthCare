'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Microscope,
  Beaker,
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
} from 'lucide-react';

export default function LabServices() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="/images/services-image/lab1.jpg"
          alt="Professional laboratory facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4">Diagnostic Laboratory Services</h1>
            <p className="text-xl opacity-90">Accurate and reliable diagnostic testing for your health</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Our Laboratory Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive diagnostic testing for all your medical needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1: Blood Tests */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/lab2.jpg"
                alt="Blood testing service"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Beaker className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Blood Tests</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive blood analysis including CBC, metabolic panel, and specialized testing. Quick results with advanced analyzers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Complete blood count</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Chemistry panels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Lipid profiles</span>
                </li>
              </ul>
            </Card>

            {/* Service 2: Pathology Testing */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/lab3.jpg"
                alt="Pathology testing"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Microscope className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Pathology Testing</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced tissue and specimen analysis using state-of-the-art microscopy and diagnostic techniques by expert pathologists.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Histopathology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Cytology testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Biopsy analysis</span>
                </li>
              </ul>
            </Card>

            {/* Service 3: Microbiology Testing */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/lab4.jpg"
                alt="Microbiology testing"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Beaker className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Microbiology Testing</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Culture, identification, and sensitivity testing for bacterial and microbial infections. Rapid diagnostics available.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Bacterial cultures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Sensitivity testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Fungal identification</span>
                </li>
              </ul>
            </Card>

            {/* Service 4: Serological Testing */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/lab5.jpg"
                alt="Serological testing"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Serological Testing</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Antibody and antigen detection for infectious diseases. Comprehensive immunological testing with reliable results.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Viral serology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Antibody testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Immune markers</span>
                </li>
              </ul>
            </Card>

            {/* Service 5: Biochemistry Analysis */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/lab6.jpg"
                alt="Biochemistry analysis"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Biochemistry Analysis</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced chemical analysis of body fluids and enzymes. Monitoring organ function and metabolic disorders with precision.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Enzyme analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Electrolyte levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Hormone testing</span>
                </li>
              </ul>
            </Card>

            {/* Service 6: Molecular Diagnostics */}
            <Card className="p-6 border border-border hover:shadow-lg transition-shadow">
              <Image
                src="/images/services-image/lab7.jpg"
                alt="Molecular diagnostics"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-3 mb-3">
                <Microscope className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Molecular Diagnostics</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                DNA and RNA testing for genetic disorders and infections. Cutting-edge molecular techniques for accurate diagnosis.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>PCR testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Genetic screening</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Viral load detection</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Lab Symptoms Section */}
      <section id="symptoms" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">When to Get Laboratory Testing</h2>
            <p className="text-muted-foreground text-lg">Signs you may need diagnostic testing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Symptom 1 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Persistent Fever & Infection</h3>
                  <p className="text-muted-foreground mb-3">
                    Unexplained fever lasting more than a few days with signs of infection.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Why test:</strong> Blood and culture tests identify bacterial, viral, or fungal infections requiring treatment.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 2 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Fatigue & Weakness</h3>
                  <p className="text-muted-foreground mb-3">
                    Chronic fatigue, weakness, or lack of energy despite adequate rest.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Why test:</strong> CBC and biochemistry tests can detect anemia, thyroid issues, or metabolic disorders.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 3 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Abnormal Weight Changes</h3>
                  <p className="text-muted-foreground mb-3">
                    Unexplained weight gain or loss without dietary or lifestyle changes.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Why test:</strong> Thyroid, hormone, and metabolic panels reveal underlying endocrine disorders.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 4 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Chronic Inflammation</h3>
                  <p className="text-muted-foreground mb-3">
                    Joint pain, swelling, or persistent inflammatory symptoms.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Why test:</strong> Inflammatory markers and autoimmune panels identify chronic diseases early.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 5 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Digestive Issues</h3>
                  <p className="text-muted-foreground mb-3">
                    Persistent diarrhea, abdominal pain, or digestive discomfort.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Why test:</strong> Stool culture and biochemistry tests identify infections or malabsorption issues.
                  </p>
                </div>
              </div>
            </Card>

            {/* Symptom 6 */}
            <Card className="p-6 border border-border bg-background">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Routine Health Screening</h3>
                  <p className="text-muted-foreground mb-3">
                    Annual checkups and preventive health monitoring for disease prevention.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Why test:</strong> Regular blood work detects early signs of disease and monitors overall health status.
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
            <h2 className="text-4xl font-bold text-foreground mb-3">Why Choose Our Laboratory</h2>
            <p className="text-muted-foreground text-lg">Experience accurate diagnostics with professional care</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Expert Technicians</h3>
              <p className="text-muted-foreground text-sm">
                Certified laboratory professionals with years of experience in diagnostic testing.
              </p>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Advanced Equipment</h3>
              <p className="text-muted-foreground text-sm">
                State-of-the-art analyzers and technology for accurate, reliable results.
              </p>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Quick Turnaround</h3>
              <p className="text-muted-foreground text-sm">
                Fast processing and reporting with same-day results for urgent tests available.
              </p>
            </Card>

            {/* Benefit 4 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous quality control and accreditation ensuring accurate test results always.
              </p>
            </Card>

            {/* Benefit 5 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Microscope className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Advanced Testing</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive testing capabilities including rare and specialized diagnostic tests.
              </p>
            </Card>

            {/* Benefit 6 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Patient Privacy</h3>
              <p className="text-muted-foreground text-sm">
                Strict confidentiality and secure handling of all medical information and samples.
              </p>
            </Card>

            {/* Benefit 7 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Beaker className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Doctor Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Expert pathologist review and interpretation of results with detailed reports.
              </p>
            </Card>

            {/* Benefit 8 */}
            <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Extended Hours</h3>
              <p className="text-muted-foreground text-sm">
                Flexible scheduling with early morning and evening collection centers available.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
