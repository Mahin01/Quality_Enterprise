import React from 'react';

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
        <a href="#product-details" className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200 transition duration-300">
          View Detailed Portfolio
        </a>
      </div>
    </div>
  </section>
);


// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <main>
        <Hero />
        <ServicesSection />
        <ProductsSection />
      </main>
    </div>
  );
}
