import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your email service here
// Using Gmail or your preferred email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your app password or email password
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This email was sent from the HealthCare Clinic contact form.</em></p>
    `

    // Send email to clinic
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'labreport125@gmail.com', // Your clinic email
      replyTo: email,
      subject: `[Clinic Contact] ${subject}`,
      html: emailContent,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - HealthCare Clinic',
      html: `
        <h2>Thank you for contacting HealthCare Clinic!</h2>
        <p>Hi ${firstName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Submission Details:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Received at:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>If you have any urgent concerns, please call us at (555) 123-4567.</p>
        <p>Best regards,<br>HealthCare Clinic Team</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
