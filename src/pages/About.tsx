import { motion } from 'motion/react';
import { Shield, Target, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              The Standard in <br />
              <span className="text-burgundy-500">Mobile Detailing</span>
            </h1>
            
            <div className="w-20 h-1 bg-burgundy-500 mb-8" />
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              Factory Auto Spa delivers premium mobile detailing services with a focus on ceramic coatings, paint correction, and deep cleaning.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              We recognized a gap in the mobile detailing industry: too many "quick wash" services and not enough true professionals who can deliver studio-quality results in a mobile setting. We built Factory Auto Spa to bridge that gap. We bring the expertise, the high-end products, and the meticulous attention to detail directly to your driveway.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="bg-dark-surface p-6 rounded-sm border border-white/5">
                <Shield className="w-8 h-8 text-burgundy-500 mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Premium Products</h3>
                <p className="text-sm text-gray-400">We only use professional-grade chemicals and coatings that deliver proven results.</p>
              </div>
              <div className="bg-dark-surface p-6 rounded-sm border border-white/5">
                <Target className="w-8 h-8 text-burgundy-500 mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Specialized Skills</h3>
                <p className="text-sm text-gray-400">Trained specifically in advanced paint correction and ceramic coating application.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" 
                alt="Detailing professional at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-burgundy-500/30 rounded-sm z-0 hidden md:block" />
            <div className="absolute -bottom-10 -left-10 bg-dark-elevated p-8 rounded-sm border border-white/10 shadow-2xl z-20 max-w-xs hidden md:block">
              <MapPin className="w-8 h-8 text-burgundy-500 mb-4" />
              <h4 className="font-heading font-bold text-xl mb-2">Service Area</h4>
              <p className="text-sm text-gray-400">Proudly serving Sacramento, Elk Grove, Roseville, Folsom, and Rocklin.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
