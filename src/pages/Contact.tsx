import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const fromName = formData.get('from_name') as string;

    const templateParams = {
      name: fromName,
      from_name: fromName,
      from_email: formData.get('from_email'),
      from_phone: formData.get('from_phone') || 'Not Provided',
      service: formData.get('service'),
      referral_code: formData.get('referral_code') || 'None',
      message: formData.get('message'),
      time: new Date().toLocaleTimeString(),
      submitted_at: new Date().toLocaleString(),
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ste6jed';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_525flah';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ZKFzsiwVRPk6Y5yv_';

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((_result) => {
          setStatus('success');
          form.current?.reset();
      }, (_error) => {
          setStatus('error');
      });
  };

  return (
    <>
      <SEOHead
        title="Contact Us | 3Stack"
        description="Get in touch with 3Stack to discuss your next digital project. We're ready to help you grow."
        keywords="Contact 3Stack, Hire IT Agency, Web Development Quote, App Development Consultation, Digital Marketing Agency Contact"
      />

      <section className="section contact-section">
        <div className="container" style={{paddingTop : "80px"}}>
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info animate-fade-in-up">
              <h1 className="section-title">Let's talk about your project</h1>
              <p className="contact-subtitle">
                Whether you have a clear vision or need help defining it, our team is ready to bring your ideas to life. Fill out the form, and we'll get back to you within 24 hours.
              </p>

              <div className="contact-methods">
                <div className="contact-method-card">
                  <div className="contact-icon-wrapper"><Mail /></div>
                  <div>
                    <h3>Email Us</h3>
                    <a href="mailto:3stacktech@gmail.com">3stacktech@gmail.com</a>
                  </div>
                </div>
                <div className="contact-method-card">
                  <div className="contact-icon-wrapper"><Phone /></div>
                  <div>
                    <h3>Call Us</h3>
                    <a href="tel:+918306099337">+91 8306099337</a>
                  </div>
                </div>
                <div className="contact-method-card">
                  <div className="contact-icon-wrapper"><MapPin /></div>
                  <div>
                    <h3>Visit Us</h3>
                    <span>Jaipur Rajasthan, 302012</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper animate-fade-in-up delay-200">
              <div className="glass-card form-card">
                <h2>Send us a message</h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="from_name">Full Name</label>
                    <input type="text" name="from_name" id="from_name" required placeholder="John Doe" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="from_email">Email Address</label>
                    <input type="email" name="from_email" id="from_email" required placeholder="john@example.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="from_phone">Phone Number (Optional)</label>
                    <input type="tel" name="from_phone" id="from_phone" placeholder="+91 9876543210" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select name="service" id="service" required>
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="referral_code">Referral Code (Optional)</label>
                    <input type="text" name="referral_code" id="referral_code" placeholder="e.g. FRIEND10" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows={5} required placeholder="Tell us about your project..."></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    fullWidth 
                    disabled={status === 'submitting'}
                    icon={<Send size={18} />}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>

                  {status === 'success' && (
                    <div className="form-message success">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="form-message error">
                      Oops! Something went wrong. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
