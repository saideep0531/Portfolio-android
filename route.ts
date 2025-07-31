// Import Next.js server utilities and email sending library
import { NextResponse } from 'next/server'; // Next.js response utility for API routes
import nodemailer from 'nodemailer'; // Library for sending emails via SMTP

/**
 * POST API Route Handler for Contact Form
 * 
 * This function handles contact form submissions from the frontend.
 * It validates the form data, checks for spam using a honeypot field,
 * and sends an email notification using nodemailer.
 * 
 * Features:
 * - Form validation (required fields, email format)
 * - Spam protection using honeypot technique
 * - Email sending via Gmail SMTP
 * - Error handling and appropriate HTTP responses
 * - Development-friendly logging
 * 
 * @param {Request} request - The incoming HTTP request object
 * @returns {Promise<NextResponse>} JSON response with success/error status
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, message, honeypot } = body;

    // Simple spam check - if honeypot is filled, it's likely a bot
    if (honeypot) {
      return NextResponse.json(
        { success: true }, // Pretend success to avoid alerting bots
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create a transporter object using the default SMTP transport
    // Note: In production, you should use environment variables for these credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // You would typically use environment variables for these
        user: process.env.EMAIL_USER || 'gsaideep4@gmail.com',
        pass: process.env.EMAIL_PASS, // You need to set up an app password in your Google account
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER || 'gsaideep4@gmail.com'}>`,
      to: 'gsaideep4@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="color: #777; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    // Log the message for debugging
    console.log('Contact form submission:', { name, email, phone, message });

    try {
      // Send email
      if (process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } else {
        console.log('Email not sent: No EMAIL_PASS environment variable set');
        // In development without credentials, we'll just log the message
      }

      // Return success response
      return NextResponse.json(
        { success: true, message: 'Your message has been sent successfully!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Even if email fails, we return success to the user
      // In a production app, you might want to handle this differently
      return NextResponse.json(
        { success: true, message: 'Your message has been received!' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}