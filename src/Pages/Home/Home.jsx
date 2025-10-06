import React, { useState } from 'react';

// Mock Data based on the uploaded images (IMG_0028 to IMG_0034)
const servicesData = [
  {
    title: "1. Industrial Equipment Supply",
    details: [
      "Gate Valves, Ball Valves, Strainers",
      "Gaskets, O-Rings, Sealing Materials",
      "Conveyor Belts (PU, PVC, Modular, Timing)",
      "Bearings, Couplings, Industrial Hoses",
      "All sourced from trusted global and local manufacturers"
    ],
    image: "https://placehold.co/400x300/264653/ffffff?text=Industrial+Supply"
  },
  {
    title: "2. Engineering Solutions",
    details: [
      "System diagnosis & failure analysis",
      "Equipment retrofitting and replacement",
      "Custom component sourcing based on specification",
      "Process improvement consultation (based on field experience)"
    ],
    image: "https://placehold.co/400x300/E76F51/ffffff?text=Engineering+Solutions"
  },
  {
    title: "4. Maintenance, Custom Fabrication & Modifications",
    details: [
      "Custom cut gaskets or belts",
      "Adaptations for process-specific challenges",
      "Vendor coordination for special fabrication jobs",
      "On-site troubleshooting & inspection",
      "Emergency supply and rapid response for critical breakdowns"
    ],
    image: "https://placehold.co/400x300/2A9D8F/ffffff?text=Custom+Fabrication"
  },
  {
    title: "5. Calibration & Compliance Services",
    details: [
      "ISO/IEC 17025 accredited calibration laboratory (NABL & BAB)",
      "On-site & in-lab calibration for industrial instruments",
      "Expertise in pharmaceuticals, FMCG, oil & gas, textiles, power, and healthcare sectors"
    ],
    image: "https://placehold.co/400x300/F4A261/ffffff?text=Compliance+Services"
  },
];

const productCategories = [
  { name: "Valves & Flow Control", description: "Reliable isolation and throttling control equipment for diverse industry needs." },
  { name: "Sealing Solutions", description: "High-performance gaskets, O-rings, and seals that withstand pressure and chemicals." },
  { name: "Conveyor Belts & Accessories", description: "High-speed packaging and food-grade conveyor solutions with on-site support." },
  { name: "Plastic & Rubber Materials", description: "Molded rubber, plastic pucks, and conveyor chain links for smooth conveying." },
];


// --- Sub-Components ---

// Hero Section Component
const Hero = () => (
  <section className="bg-gray-800 text-white pt-16 pb-24 rounded-b-3xl shadow-2xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-orange-400">Engineering</span>-Driven Supply & Service
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We provide tailored engineering solutions that solve real-world problems in industrial settings, ensuring quality and reliability for continuous operations.
        </p>
        <a href="#services" className="inline-block px-10 py-4 text-lg font-bold text-gray-900 bg-orange-400 rounded-xl shadow-2xl hover:bg-orange-500 transform hover:scale-105 transition duration-300">
          Explore Our Solutions
        </a>
      </div>
    </div>
  </section>
);

// Service Block Component (Alternating Layout)
const ServiceBlock = ({ data, index }) => {
  const isReverse = index % 2 !== 0; // Alternate the text/image layout
  const isAccentBg = index % 2 === 0; // Alternate the background color

  const textBg = isAccentBg ? 'bg-orange-600' : 'bg-gray-900';
  const textColor = isAccentBg ? 'text-white' : 'text-gray-100';
  const titleColor = isAccentBg ? 'text-gray-900' : 'text-orange-400';

  return (
    <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[400px] shadow-2xl rounded-xl overflow-hidden my-8`}>
      {/* Image Column */}
      <div className="md:w-1/2 flex-shrink-0">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
          // Fallback if the placeholder link breaks (though it shouldn't)
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/555/fff?text=Image+Placeholder"; }}
        />
      </div>

      {/* Content Column */}
      <div className={`md:w-1/2 p-8 sm:p-12 flex flex-col justify-center ${textBg} ${textColor}`}>
        <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColor}`}>
          {data.title}
        </h3>
        <ul className="list-none space-y-3">
          {data.details.map((detail, i) => (
            <li key={i} className="flex items-start">
              <span className={`text-xl font-extrabold mr-3 ${isAccentBg ? 'text-gray-900' : 'text-orange-500'}`}>&bull;</span>
              <p className="text-lg leading-relaxed">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Services Section Container
const ServicesSection = () => (
  <section id="services" className="py-16 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-white">Our Services</h2>
      <p className="text-center text-xl text-gray-400 mb-12">What We Offer</p>
      {servicesData.map((service, index) => (
        <ServiceBlock key={index} data={service} index={index} />
      ))}
    </div>
  </section>
);

// Product Card Component
const ProductCard = ({ name, description }) => (
  <div className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-orange-500/50 transition duration-300 border-t-4 border-orange-600 transform hover:-translate-y-1">
    <h4 className="text-2xl font-bold text-orange-400 mb-3">{name}</h4>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Product Categories Section Container
const ProductsSection = () => (
  <section id="products" className="py-20 bg-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-white">Product Categories</h2>
      <p className="text-center text-xl text-gray-300 mb-12">Essential Components for Continuous Operations</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productCategories.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="/products" className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200 transition duration-300">
          View Detailed Portfolio
        </a>
      </div>
    </div>
  </section>
);


// Quote Request Form Component
const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    quantity: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // --- Mock Submission Logic ---
    // In a real application, you would send formData to a backend API (e.g., using fetch or axios)
    // and handle success/error responses here.
    
    console.log('Quote Request Submitted:', formData);
    
    // Simulate API delay
    setTimeout(() => {
      setMessage('Thank you! Your quote request has been submitted. We will contact you shortly.');
      // Reset form or redirect after successful submission
      // setFormData({ name: '', email: '', service: '', quantity: '', description: '' }); 
    }, 1500);
    // --- End Mock Submission Logic ---
  };

  if (isSubmitted && message) {
    return (
      <section id="quote" className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-800 p-10 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-extrabold text-orange-400 mb-4">Success!</h2>
          <p className="text-xl text-white">{message}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white mb-4">Get a Quote</h2>
          <p className="text-xl text-gray-400">Tell us about your project or component needs.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 sm:p-12 rounded-xl shadow-2xl space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                placeholder="john.doe@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Product/Service of Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-orange-500 focus:border-orange-500 transition duration-300 appearance-none"
              >
                <option value="" disabled>Select a category</option>
                <option value="Industrial Equipment Supply">Industrial Equipment Supply</option>
                <option value="Engineering Solutions">Engineering Solutions</option>
                <option value="Maintenance & Fabrication">Maintenance & Fabrication</option>
                <option value="Calibration & Compliance">Calibration & Compliance</option>
                <option value="Valves & Flow Control">Valves & Flow Control</option>
                <option value="Sealing Solutions">Sealing Solutions</option>
                <option value="Custom Project">Custom Project / Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">Quantity or Size (e.g., 100 units, 4" Gasket)</label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                placeholder="Required Qty/Size"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Project Description / Detailed Requirements</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              placeholder="Describe the application, material requirements, or specific challenges..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-bold text-gray-900 bg-orange-400 rounded-xl shadow-lg hover:bg-orange-500 transform hover:scale-[1.01] transition duration-300"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </section>
  );
};


// Main App Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <main>
        <Hero />
        <ServicesSection />
        <ProductsSection />
        <QuoteRequestForm /> 
      </main>
    </div>
  );
}
