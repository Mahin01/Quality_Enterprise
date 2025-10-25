import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Color and Style Constants (Consistent Theme) ---
const PRIMARY_TEAL = '#1A364F'; // Primary Block/Accent Color
const DARK_NAVY = '#0F2133'; // New darkest background color
const ORANGE_ACCENT_HEX = '#FF8C00'; // Primary Orange Accent
const ACCENT_ORANGE_CLASS = 'text-orange-400';

// Custom Colors for Form Elements
const INPUT_BG_COLOR = '#152A3F';
const INPUT_BORDER_COLOR = '#367999';

// Mock Data
const servicesData = [
    {
        title: "1. Industrial Equipment Supply",
        slug: "industrial-equipment-supply",
        description: "We source and deliver a comprehensive range of critical industrial components, from complex valve systems to specialized conveyor belts and sealing solutions.", 
        details: [
            "Gate Valves, Ball Valves, Strainers",
            "Gaskets, O-Rings, Sealing Materials",
            "Conveyor Belts (PU, PVC, Modular, Timing)",
            "Bearings, Couplings, Industrial Hoses",
            "All sourced from trusted global and local manufacturers"
        ],
        image: "service1.png"
    },
    {
        title: "2. Engineering Solutions",
        slug: "engineering-solutions",
        description: "Our experienced team provides technical expertise for system diagnosis, retrofitting, and custom component sourcing to optimize your plant's performance.", 
        details: [
            "System diagnosis & failure analysis",
            "Equipment retrofitting and replacement",
            "Custom component sourcing based on specification",
            "Process improvement consultation (based on field experience)"
        ],
        image: "service2.png"
    },
    {
        title: "3. Maintenance, Custom Fabrication & Modifications",
        slug: "maintenance-custom-fabrication-modifications",
        description: "We offer tailored maintenance support, rapid emergency supply, and custom fabrication services like gasket cutting to meet urgent and unique operational needs.", 
        details: [
            "Custom cut gaskets or belts",
            "Adaptations for process-specific challenges",
            "Vendor coordination for special fabrication jobs",
            "On-site troubleshooting & inspection",
            "Emergency supply and rapid response for critical breakdowns"
        ],
        image: "service3.png"
    },
    {
        title: "4. Calibration & Compliance Services",
        slug: "calibration-compliance-services",
        description: "Partner with our ISO/IEC 17025 accredited laboratory for expert on-site and in-lab calibration, ensuring your instruments meet critical industry compliance standards.", 
        details: [
            "ISO/IEC 17025 accredited calibration laboratory (NABL & BAB)",
            "On-site & in-lab calibration for industrial instruments",
            "Expertise in pharmaceuticals, FMCG, oil & gas, textiles, power, and healthcare sectors"
        ],
        image: "service4.png"
    },
];

const productCategories = [
    { name: "Valves & Flow Control", slug: "valves-flow-control", description: "Reliable isolation and throttling control equipment for diverse industry needs." },
    { name: "Sealing Solutions", slug: "sealing-solutions", description: "High-performance gaskets, O-rings, and seals that withstand pressure and chemicals." },
    { name: "Conveyor Belts & Accessories", slug: "conveyor-belts-accessories", description: "High-speed packaging and food-grade conveyor solutions with on-site support." },
    { name: "Plastic & Rubber Materials", slug: "plastic-rubber-materials", description: "Molded rubber, plastic pucks, and conveyor chain links for smooth conveying." },
];

const partnersData = [
    { name: "Unilever", imageUrl: "/Picture1.png" }, 
    { name: "BCIC", imageUrl: "/Picture2.png"  },
    { name: "KAFCO", imageUrl: "Picture3.png" },
    { name: "Habib Group", imageUrl: "Picture4.png" },
    { name: "Salehsteel", imageUrl: "Picture5.png"},
    { name: "ASTECH", imageUrl: "Picture6.png" },
];

// --- COMPONENTS ---

// HERO SECTION COMPONENT
const Hero = () => (
    <section className={`relative text-white pt-32 pb-24 rounded-b-3xl shadow-2xl overflow-hidden min-h-[500px]`}>
        
        {/* Video Background Container */}
        <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                poster="https://placehold.co/1920x1080/1A364F/ffffff?text=Industrial+Video+Poster"
            >
                <source src="/video_background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0" style={{ backgroundColor: DARK_NAVY, opacity: 0.7 }}></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
                    <span className={`${ACCENT_ORANGE_CLASS}`}>Engineering</span>-Driven Supply & Service
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    We provide tailored engineering solutions that solve real-world problems in industrial settings, ensuring quality and reliability for continuous operations.
                </p>
                <a href="#quote" className={`inline-block px-10 py-4 text-lg font-bold text-gray-900 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300`} style={{ backgroundColor: ORANGE_ACCENT_HEX }}>
                    Request a Quote Today
                </a>
            </div>
        </div>
    </section>
);

// Service Block Component
const ServiceBlock = ({ data, index }) => {
    const isReverse = index % 2 !== 0; 
    const textBgStyle = { backgroundColor: PRIMARY_TEAL, color: 'white' };
    const titleColorClass = `${ACCENT_ORANGE_CLASS}`;
    const bulletColorStyle = { color: ORANGE_ACCENT_HEX };
    
    // Uses the slug directly from the data object
    const destinationPath = `/services/${data.slug}`;

    return (
        <Link to={destinationPath} className="block group"> 
            <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[400px] shadow-2xl rounded-xl overflow-hidden my-8 cursor-pointer transform transition duration-500 ease-in-out hover:scale-[1.01] hover:shadow-orange-500/50`}>
                
                {/* Image Column */}
                <div className="md:w-1/2 flex-shrink-0">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover group-hover:opacity-90 transition duration-500"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/555/fff?text=Image+Placeholder"; }}
                    />
                </div>

                {/* Content Column */}
                <div className={`md:w-1/2 p-8 sm:p-12 flex flex-col justify-center`} style={textBgStyle}>
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColorClass} group-hover:text-white transition duration-500`}>
                        {data.title}
                    </h3>
                    
                    {/* Description paragraph */}
                    {data.description && (
                        <p className="text-lg text-gray-200 mb-6">{data.description}</p>
                    )}
                    
                    <ul className="list-none space-y-3">
                        {data.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                                <span className={`text-xl font-extrabold mr-3`} style={bulletColorStyle}>&bull;</span>
                                <p className="text-lg leading-relaxed">{detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Link>
    );
};

// Services Section Container
const ServicesSection = () => (
    <section id="services" className={`py-16`} style={{ backgroundColor: DARK_NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-extrabold text-center mb-4 ${ACCENT_ORANGE_CLASS}`}>Our Services</h2>
            <p className="text-center text-xl text-gray-400 mb-12">What We Offer</p>
            {servicesData.map((service, index) => (
                <ServiceBlock key={index} data={service} index={index} />
            ))}
        </div>
    </section>
);

// Product Card Component
const ProductCard = ({ name, description, slug }) => {
    const destinationPath = `/products/${slug}`;
    
    return (
        <Link to={destinationPath}>
            <div 
                className={`
                    p-8 rounded-xl shadow-xl 
                    hover:shadow-orange-500/50 transition duration-300 
                    border-t-4 border-orange-600 transform hover:-translate-y-1 
                    cursor-pointer
                    h-full // Ensures all cards in the grid have the same height
                    flex flex-col 
                `}
                style={{ backgroundColor: PRIMARY_TEAL }}
            >
                <h4 className={`text-2xl font-bold mb-3 ${ACCENT_ORANGE_CLASS}`}>{name}</h4>
                <p className="text-gray-300">{description}</p>
            </div>
        </Link>
    );
};

// Product Categories Section Container
const ProductsSection = () => (
    <section id="products" className={`py-20`} style={{ backgroundColor: PRIMARY_TEAL }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-extrabold text-center mb-4 ${ACCENT_ORANGE_CLASS}`}>Product Categories</h2>
            <p className="text-center text-xl text-gray-300 mb-12">Essential Components for Continuous Operations</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {productCategories.map((product, index) => (
                    <ProductCard key={index} {...product} /> 
                ))}
            </div>
            
            <div className="text-center mt-12">
                <a href="#quote" className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200 transition duration-300">
                    Request A Custom Quote
                </a>
            </div>
        </div>
    </section>
);

// Client Section
const ClientSection = () => {
    const renderPartnerContent = (partner) => {
        return (
            <img 
                src={partner.imageUrl} 
                alt={`${partner.name} Logo`}
                className="w-full h-full object-cover p-2"
                onError={(e) => { 
                    const div = e.target.closest('div');
                    e.target.onerror = null; 
                    div.classList.add('flex', 'items-center', 'justify-center', 'text-white', 'font-bold', 'text-xl', 'bg-orange-600');
                    e.target.style.display = 'none';
                    const initials = partner.name.split(' ').map(n => n[0]).join('');
                    div.innerHTML = `<span class="text-3xl">${initials}</span>`;
                }}
            />
        );
    };

    return (
        <section id="clients" className={`py-20`} style={{ backgroundColor: DARK_NAVY }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-4xl font-extrabold mb-2 ${ACCENT_ORANGE_CLASS}`}>Client List</h2>
                <p className={`text-xl mb-10 ${ACCENT_ORANGE_CLASS}`}>Trusted by Leading Industries</p>

                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-lg text-gray-300 mb-6">
                        Over the years, Quality Enterprise has built strong relationships with key players across the <span className={`font-semibold text-orange-300`}>FMCG, chemical, packaging, and utilities sectors.</span> Our reputation is based on timely delivery, accurate solutions, and technical dependability.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-center">
                        <span className="text-gray-200 border border-orange-500/50 px-3 py-1 rounded-full text-sm">FMCG & Consumer Goods</span>
                        <span className="text-gray-200 border border-orange-500/50 px-3 py-1 rounded-full text-sm">Pharmaceuticals & Personal Care</span>
                        <span className="text-gray-200 border border-orange-500/50 px-3 py-1 rounded-full text-sm">Bottling & Beverage Plants</span>
                        <span className="text-gray-200 border border-orange-500/50 px-3 py-1 rounded-full text-sm">Chemical & Fertilizer Plants</span>
                        <span className="text-gray-200 border border-orange-500/50 px-3 py-1 rounded-full text-sm">Utility and Energy Units</span>
                    </div>
                </div>

                <h3 className={`text-3xl font-extrabold mb-8 border-b-2 border-orange-500 inline-block pb-1 ${ACCENT_ORANGE_CLASS}`}>Our Partners</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
                    {partnersData.map((partner) => (
                        <div 
                            key={partner.name} 
                            title={partner.name}
                            className={`w-28 h-28 mx-auto flex items-center justify-center rounded-xl transition duration-300 shadow-xl border-4 border-orange-400 transform hover:scale-105 overflow-hidden bg-white`}
                        >
                            {renderPartnerContent(partner)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Quote Request Form Component (MODIFIED for API submission to email)
const QuoteRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', service: '', quantity: '', description: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // *** API CALL TO SEND EMAIL ***
            // Replace '/api/send-email' with the actual endpoint URL 
            // of your server or third-party email service (e.g., Formspree, EmailJS).
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    ...formData,
                    // The server will read this and use it as the recipient.
                    recipientEmail: 'info@quality-ent.com' 
                }),
            });

            if (response.ok) {
                // Success
                setIsSubmitted(true);
                setMessage('Thank you! Your quote request has been submitted. We will contact you shortly at ' + formData.email + '.');
                setFormData({ name: '', email: '', service: '', quantity: '', description: '' }); // Clear form
            } else {
                // Error from server
                throw new Error('Server failed to process the request.');
            }

        } catch (error) {
            console.error('Submission Error:', error);
            // Display an error message to the user
            setMessage('There was an error submitting your request. Please check your connection or email us directly at info@quality-ent.com.');
        }
    };

    if (isSubmitted && message) {
        return (
            <section id="quote" className={`py-20`} style={{ backgroundColor: DARK_NAVY }}>
                <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: INPUT_BG_COLOR }}>
                    <h2 className={`text-3xl font-extrabold mb-4 ${ACCENT_ORANGE_CLASS}`}>Request Sent!</h2>
                    <p className="text-xl text-white">{message}</p>
                </div>
            </section>
        );
    }

    return (
        <section id="quote" className={`py-20`} style={{ backgroundColor: DARK_NAVY }}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-10">
                    <h2 className={`text-4xl font-extrabold mb-4 ${ACCENT_ORANGE_CLASS}`}>Get a Quote</h2>
                    <p className="text-xl text-gray-400">Tell us about your project or component needs.</p>
                </div>

                <form onSubmit={handleSubmit} className={`p-8 sm:p-12 rounded-xl shadow-2xl space-y-6`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input
                                type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                className={`w-full px-4 py-3 border rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300`}
                                style={{ backgroundColor: INPUT_BG_COLOR, borderColor: INPUT_BORDER_COLOR }}
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                            <input
                                type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                className={`w-full px-4 py-3 border rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300`}
                                style={{ backgroundColor: INPUT_BG_COLOR, borderColor: INPUT_BORDER_COLOR }}
                                placeholder="john.doe@company.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Product/Service of Interest</label>
                            <select
                                id="service" name="service" value={formData.service} onChange={handleChange} required
                                className={`w-full px-4 py-3 border rounded-lg text-white focus:ring-orange-500 focus:border-orange-500 transition duration-300 appearance-none`}
                                style={{ backgroundColor: INPUT_BG_COLOR, borderColor: INPUT_BORDER_COLOR }}
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
                                type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300`}
                                style={{ backgroundColor: INPUT_BG_COLOR, borderColor: INPUT_BORDER_COLOR }}
                                placeholder="Required Qty/Size"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Project Description / Detailed Requirements</label>
                        <textarea
                            id="description" name="description" rows="4" value={formData.description} onChange={handleChange} required
                            className={`w-full px-4 py-3 border rounded-lg text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 transition duration-300`}
                            style={{ backgroundColor: INPUT_BG_COLOR, borderColor: INPUT_BORDER_COLOR }}
                            placeholder="Describe the application, material requirements, or specific challenges..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`w-full px-6 py-3 text-lg font-bold text-gray-900 rounded-xl shadow-lg hover:bg-orange-500 transform hover:scale-[1.01] transition duration-300`}
                        style={{ backgroundColor: ORANGE_ACCENT_HEX }}
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
        <div className={`min-h-screen font-sans`} style={{ backgroundColor: DARK_NAVY }}>
            <main>
                <Hero />
                <ServicesSection />
                <ProductsSection />
                <ClientSection />
                <QuoteRequestForm /> 
            </main>
        </div>
    );
}