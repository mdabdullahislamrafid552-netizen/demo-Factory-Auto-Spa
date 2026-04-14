import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: 'ceramic-coating',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will contact you shortly to confirm your booking.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      service: 'ceramic-coating',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Book Your <span className="text-burgundy-500">Detail</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Ready for a reset? Fill out the form below to request an appointment, and we'll get back to you to confirm the details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-dark-surface p-8 rounded-sm border border-white/5">
              <h3 className="font-heading font-bold text-2xl mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-burgundy-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+19165550123" className="text-gray-400 hover:text-burgundy-500 transition-colors">(916) 555-0123</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-burgundy-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:booking@factoryautospa.com" className="text-gray-400 hover:text-burgundy-500 transition-colors">booking@factoryautospa.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-burgundy-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Service Area</p>
                    <p className="text-gray-400">Sacramento, Elk Grove, Roseville, Folsom, Rocklin</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-burgundy-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Hours</p>
                    <p className="text-gray-400">Mon - Sat: 8:00 AM - 6:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-dark-surface p-8 rounded-sm border border-white/5"
          >
            <h3 className="font-heading font-bold text-2xl mb-6">Request an Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-base border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-burgundy-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-base border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-burgundy-500 transition-colors"
                    placeholder="(916) 555-0123"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-base border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-burgundy-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="vehicle" className="text-sm font-medium text-gray-300">Vehicle Make & Model</label>
                  <input 
                    type="text" 
                    id="vehicle" 
                    name="vehicle" 
                    required
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full bg-dark-base border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-burgundy-500 transition-colors"
                    placeholder="e.g. 2023 Porsche 911"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-300">Primary Service Requested</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-dark-base border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-burgundy-500 transition-colors appearance-none"
                >
                  <option value="ceramic-coating">Ceramic Coating (Starting at $650)</option>
                  <option value="paint-correction">Paint Correction (Starting at $350)</option>
                  <option value="full-detail">Full Detail (Starting at $250)</option>
                  <option value="deep-interior">Deep Interior Cleaning (Starting at $180)</option>
                  <option value="wash-wax">Wash & Wax (Starting at $120)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Additional Details (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark-base border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-burgundy-500 transition-colors resize-none"
                  placeholder="Tell us about the condition of your vehicle or any specific concerns..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-burgundy-500 hover:bg-burgundy-600 text-white font-bold py-4 rounded-sm transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit Request</span>
                <Send className="w-5 h-5" />
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                This is a request for a quote/appointment. We will contact you to confirm pricing and availability.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
