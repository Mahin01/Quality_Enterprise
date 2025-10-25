import React from 'react';

// --- Color and Style Constants (Consistent Theme) ---
const PRIMARY_TEAL = '#1A364F';
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-amber-400';
const ACCENT_TEXT_CLASS = 'text-gray-300';
const ACCENT_BUTTON_COLOR = ORANGE_ACCENT_HEX;

// --- Inline SVG Icon Definitions ---

// Plastic/Compound Icon (Represents Materials)
const PlasticIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
        <path d="M14 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0"></path>
    </svg>
);

// Drill/Cutting Tool Icon (Represents Fabrication/Machining)
const MachiningIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0z"></path>
        <path d="M17 14.5c.34-.14.7-.22 1.07-.22 2.89 0 5.25 2.36 5.25 5.25S20.96 24 18.07 24c-2.89 0-5.25-2.36-5.25-5.25 0-2.89 2.36-5.25 5.25-5.25z"></path>
    </svg>
);

// ChevronRightIcon (For CTA Button)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const PlasticRubberPage = () => (
    <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
        
        {/* Hero Section */}
        <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Engineering Plastic & Rubber: <span className={`${ACCENT_ORANGE_CLASS}`}>Custom Components, Superior Durability</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                    We supply and fabricate high-performance plastic and rubber components—from specialized wear parts to custom-machined prototypes—designed to reduce friction, resist chemicals, and outlast traditional materials.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto p-8 lg:p-16">
            
            {/* Core Product Offering Card */}
            <div className={`flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden mb-16 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="flex-shrink-0 flex items-center justify-center p-8 lg:p-12" style={{ backgroundColor: DARK_NAVY }}>
                    <PlasticIcon className={`w-24 h-24 ${ACCENT_ORANGE_CLASS} opacity-80`} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className={`text-4xl font-bold mb-3 ${ACCENT_ORANGE_CLASS}`}>High-Performance Engineering Polymers</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        We stock industrial-grade sheet, rod, and tube materials known for their mechanical strength, thermal stability, and low-friction properties, critical for material handling and chemical applications.
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Teflon (PTFE):**</p> 
                            <p className='text-gray-400 text-sm'>Extreme chemical and temperature resistance.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Nylon & HDPE:**</p> 
                            <p className='text-gray-400 text-sm'>Wear plates, guide rails, and durable bushings.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Polyurethane (PU):**</p> 
                            <p className='text-gray-400 text-sm'>High load-bearing capacity and abrasion resistance.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Delrin (Acetal) & PVC:**</p> 
                            <p className='text-gray-400 text-sm'>Precision machined parts and structural components.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Fabrication and Components Grid */}
            <h2 className={`text-4xl font-bold mb-10 text-center ${ACCENT_ORANGE_CLASS}`}>Custom Fabrication & Specific Parts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                
                {/* Capability 1: Custom Machining */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <MachiningIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">CNC Machining & Fabrication</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        We provide **custom cutting, routing, and turning services** to transform raw materials into precise, finished parts based on your exact engineering drawings.
                    </p>
                </div>
                
                {/* Component 2: Conveyor Parts */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <PlasticIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Specialized Conveyor Components</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Supply of engineered plastic parts for packaging lines, including **bottle handling change parts, chain guides, and custom sprockets** to reduce friction and noise.
                    </p>
                </div>
                
                {/* Component 3: Molded Rubber Goods */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <PlasticIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Molded Rubber & Custom Pucks</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Sourcing custom molded rubber items, plastic guide shoes, and specialized **pucks/star wheels** for bottling and alignment applications.
                    </p>
                </div>

            </div>
            
            {/* Call to Action - Consistent Styling */}
            <div className={`text-center mt-16 p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className={`text-3xl font-bold mb-4 ${ACCENT_ORANGE_CLASS}`}>Need a Custom Plastic or Rubber Component?</h3>
                <p className="text-lg text-gray-300 mb-6">Send us your specifications or a sample, and our team will rapidly quote the material and fabrication for your next project.</p>
                <a href="#contact" className={`transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl inline-flex items-center justify-center`} style={{ backgroundColor: ACCENT_BUTTON_COLOR, color: DARK_NAVY }}>
                    Start Custom Fabrication Inquiry
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                </a>
            </div>
        </div>
    </div>
);

export default PlasticRubberPage;