import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Shield, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0 scale-110 origin-top"
        >
          <img 
            src="https://wynndetailing.com.au/wp-content/uploads/2024/07/Car-Detailing-A-Comprehensive-Guide-to-Pristine-Perfection.jpg" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-base/90 to-dark-base/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-burgundy-500 animate-pulse" />
              <span className="text-xs font-medium tracking-wider uppercase text-gray-300">Mobile + High-End Results</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-6"
            >
              Premium Mobile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Auto Detailing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              Ceramic coatings, paint correction, and full detailing — delivered directly to your driveway in Sacramento and surrounding areas.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link 
                to="/contact" 
                className="bg-burgundy-500 hover:bg-burgundy-600 text-white px-8 py-4 rounded-sm font-medium transition-all flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>Book Now</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-burgundy-500 font-medium transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>View Services</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Ticket Highlight */}
      <section className="py-24 bg-dark-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-burgundy-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Protect Your Investment with <span className="text-burgundy-500">Ceramic Coating</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We specialize in long-term paint protection. Our professional-grade ceramic coatings provide years of durability, extreme gloss, and unmatched hydrophobic properties. Stop waxing and start protecting.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Years of durable protection',
                  'Extreme gloss and depth',
                  'Self-cleaning hydrophobic effect',
                  'Protection against UV rays and oxidation'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-burgundy-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/services" 
                className="inline-flex items-center space-x-2 text-white font-medium border-b border-burgundy-500 pb-1 hover:text-burgundy-500 transition-colors"
              >
                <span>Learn about our coating packages</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                  alt="Ceramic coating application" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-white/10 rounded-sm" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-dark-elevated p-6 rounded-sm border border-white/10 shadow-2xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-4 mb-2">
                  <Shield className="w-8 h-8 text-burgundy-500" />
                  <span className="font-heading font-bold text-xl">5+ Years</span>
                </div>
                <p className="text-sm text-gray-400">Of guaranteed paint protection and extreme gloss.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-dark-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Premium Services</h2>
            <p className="text-gray-400 text-lg">
              We bring the detailing studio to you. High-end results without the hassle of dropping off your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Ceramic Coating',
                desc: 'Long-term protection and deep gloss that lasts for years, not weeks.',
                link: '/services'
              },
              {
                icon: Sparkles,
                title: 'Paint Correction',
                desc: 'Permanent removal of swirl marks, scratches, and oxidation to restore clarity.',
                link: '/services'
              },
              {
                icon: Droplets,
                title: 'Deep Interior Cleaning',
                desc: 'Complete reset of your interior. Stain removal, odor treatment, and deep extraction.',
                link: '/services'
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-surface border border-white/5 p-8 rounded-sm hover:border-burgundy-500/50 transition-colors group"
              >
                <service.icon className="w-10 h-10 text-burgundy-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="text-sm font-medium text-white group-hover:text-burgundy-500 transition-colors flex items-center space-x-1">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80" 
            alt="Luxury car" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-burgundy-700/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">Ready for a Reset?</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Experience the convenience of mobile detailing without compromising on quality. Book your premium detail today.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-dark-base hover:bg-gray-100 px-8 py-4 rounded-sm font-bold text-lg transition-colors"
          >
            <span>Book Your Detail</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
