import { useState } from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'paint', name: 'Paint Correction' },
    { id: 'ceramic', name: 'Ceramic Coating' },
    { id: 'interior', name: 'Interior Reset' },
  ];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80',
      category: 'ceramic',
      title: 'Glass-like Finish',
      desc: '5-Year Ceramic Coating applied after 2-step correction.'
    },
    {
      url: 'https://images.unsplash.com/photo-1620865888258-202d08a0d0a7?auto=format&fit=crop&q=80',
      category: 'interior',
      title: 'Deep Interior Extraction',
      desc: 'Years of stains removed from cloth seats.'
    },
    {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
      category: 'paint',
      title: 'Swirl Removal',
      desc: 'Restoring depth to neglected black paint.'
    },
    {
      url: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80',
      category: 'ceramic',
      title: 'Hydrophobic Properties',
      desc: 'Water beading perfectly on a freshly coated hood.'
    },
    {
      url: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80',
      category: 'paint',
      title: 'Mirror Reflection',
      desc: 'Flawless finish after multi-stage correction.'
    },
    {
      url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80',
      category: 'interior',
      title: 'Leather Restoration',
      desc: 'Deep cleaned and conditioned leather seats.'
    }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Our <span className="text-burgundy-500">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Real results from our mobile detailing studio. We let the reflections speak for themselves.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id 
                  ? 'bg-burgundy-500 text-white' 
                  : 'bg-dark-surface text-gray-400 hover:text-white hover:bg-dark-elevated border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="group relative aspect-square rounded-sm overflow-hidden bg-dark-surface border border-white/5"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{image.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
