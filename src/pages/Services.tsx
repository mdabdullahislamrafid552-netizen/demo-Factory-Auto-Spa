import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Sparkles, Droplets, Car, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'ceramic-coating',
      title: 'Ceramic Coating',
      subtitle: 'The Ultimate Paint Protection',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
      description: 'Our premium ceramic coating packages provide a semi-permanent layer of protection over your vehicle\'s clear coat. This is not a wax or sealant that washes away in a few months. It\'s a hardened, hydrophobic barrier that protects against UV rays, chemical stains, and oxidation while delivering an intense, mirror-like gloss.',
      features: [
        '3 to 5+ years of durable protection',
        'Extreme hydrophobic properties (water beads and rolls off)',
        'Makes maintenance washing significantly easier',
        'Intense, deep gloss that lasts',
        'Protection against environmental fallout and UV damage'
      ],
      price: 'Starting at $650',
      highlight: true
    },
    {
      id: 'paint-correction',
      title: 'Paint Correction',
      subtitle: 'Restore Clarity and Shine',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80',
      description: 'Over time, improper washing techniques and environmental factors cause swirl marks, scratches, and oxidation, leaving your paint looking dull. Our paint correction process safely removes these defects by leveling the clear coat, restoring a flawless, mirror-like finish.',
      features: [
        '1-Step and 2-Step correction options available',
        'Removes swirl marks, light scratches, and holograms',
        'Restores depth and clarity to dull paint',
        'Essential preparation before ceramic coating',
        'Includes thorough decontamination wash and clay bar treatment'
      ],
      price: 'Starting at $350'
    },
    {
      id: 'full-detail',
      title: 'Full Detail',
      subtitle: 'The Complete Reset',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80',
      description: 'Our signature full detail package combines our deep interior cleaning with a thorough exterior detail. This is the perfect service if you want your vehicle feeling brand new inside and out.',
      features: [
        'Complete deep interior cleaning and conditioning',
        'Thorough exterior foam wash and decontamination',
        'Wheels, tires, and wheel wells deep cleaned',
        'High-quality sealant applied for 3-6 months of protection',
        'Glass cleaned inside and out for streak-free clarity'
      ],
      price: 'Starting at $250'
    },
    {
      id: 'deep-interior',
      title: 'Deep Interior Cleaning',
      subtitle: 'Stain & Odor Removal',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1620865888258-202d08a0d0a7?auto=format&fit=crop&q=80',
      description: 'A comprehensive reset of your vehicle\'s interior. We don\'t just wipe things down; we deep clean every surface, extract carpets and seats, and condition materials to bring your interior back to its best possible condition.',
      features: [
        'Hot water extraction for carpets and cloth seats',
        'Leather deep cleaned and conditioned',
        'Steam cleaning of all hard plastics and crevices',
        'Odor treatment and stain removal',
        'Headliner spot cleaning'
      ],
      price: 'Starting at $180'
    },
    {
      id: 'wash-wax',
      title: 'Wash & Wax',
      subtitle: 'Premium Maintenance',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80',
      description: 'A step above your standard car wash. This service is designed to safely clean your vehicle while adding a layer of protection and gloss. Perfect for maintaining a well-kept vehicle.',
      features: [
        'Safe, scratch-free hand wash',
        'Wheels and tires cleaned and dressed',
        'Premium spray wax/sealant applied',
        'Light interior vacuum and wipe down',
        'Windows cleaned'
      ],
      price: 'Starting at $120'
    }
  ];

  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          Premium <span className="text-burgundy-500">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          From long-term ceramic coatings to deep interior resets, we deliver high-end results directly to your location.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative border border-white/10">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {service.highlight && (
                  <div className="absolute top-4 left-4 bg-burgundy-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                    Most Popular
                  </div>
                )}
              </div>
            </div>
            
            <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="flex items-center space-x-3 mb-4">
                <service.icon className="w-6 h-6 text-burgundy-500" />
                <span className="text-burgundy-500 font-medium tracking-wide uppercase text-sm">{service.subtitle}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{service.title}</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-burgundy-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-white/10 gap-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">Estimated Price</p>
                  <p className="text-2xl font-heading font-bold text-white">{service.price}</p>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-white text-dark-base hover:bg-gray-200 px-8 py-3 rounded-sm font-bold transition-colors w-full sm:w-auto text-center"
                >
                  Book Service
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
