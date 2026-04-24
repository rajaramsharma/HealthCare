'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Heart, Phone, MapPin, Mail, Clock } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary/5 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
            <p className="text-foreground/70">We&apos;d love to hear from you. Get in touch with us today.</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/70 text-sm">123 Health Street<br />Medical City, MC 12345</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/70 text-sm">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70 text-sm">info@healthcareclinic.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-foreground/70 text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we&apos;ll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      ✓ Thank you! Your message has been sent successfully. We&apos;ll contact you soon.
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                          className="border-border bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                          className="border-border bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-border bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="border-border bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Appointment Request"
                        required
                        className="border-border bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="border-border bg-background"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

  
    </div>
  )
}
