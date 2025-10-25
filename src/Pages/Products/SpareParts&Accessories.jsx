import React from 'react';

// --- Color and Style Constants (Consistent Theme) ---
const PRIMARY_TEAL = '#1A364F';
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-amber-400';
const ACCENT_TEXT_CLASS = 'text-gray-300';
const ACCENT_BUTTON_COLOR = ORANGE_ACCENT_HEX;

// --- Inline SVG Icon Definitions ---

// Spanner/Wrench Icon (Represents Parts & Maintenance)
const SpannerIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0z"></path>
        <path d="M7.78 19.46l-5.46-5.46a2 2 0 0 1 0-2.83l5.5-5.5a2 2 0 0 1 2.83 0l5.46 5.46a2 2 0 0 1 0 2.83l-5.5 5.5a2 2 0 0 1-2.83 0z"></path>
    </svg>
);

// Bearings Icon (Represents Moving Components)
const BearingsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M15.5 8.5L8.5 15.5"></path>
    </svg>
);

// ChevronRightIcon (For CTA Button)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const SparePartsPage = () => (
    <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
        
        {/* Hero Section */}
        <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Spare Parts & Critical Components: <span className={`${ACCENT_ORANGE_CLASS}`}>Minimize Downtime, Maximize Uptime</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                    We specialize in the rapid and reliable sourcing of essential mechanical and fluid handling components, ensuring your maintenance teams have the right parts to prevent costly operational halts.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto p-8 lg:p-16">
            
            {/* Core Product Offering Card */}
            <div className={`flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden mb-16 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="flex-shrink-0 flex items-center justify-center p-8 lg:p-12" style={{ backgroundColor: DARK_NAVY }}>
                    <SpannerIcon className={`w-24 h-24 ${ACCENT_ORANGE_CLASS} opacity-80`} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className={`text-4xl font-bold mb-3 ${ACCENT_ORANGE_CLASS}`}>Mechanical & Fluid System Components</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        From rotating equipment parts to critical fluid connectors, our supply chain is optimized to deliver quality, OEM-compatible spares with urgency.
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Bearings & Bushings:**</p> 
                            <p className='text-gray-400 text-sm'>Deep groove, angular contact, and self-aligning types.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Industrial Hoses & Fittings:**</p> 
                            <p className='text-gray-400 text-sm'>Hydraulic, pneumatic, and steam hoses with quick connectors.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Mechanical Seals:**</p> 
                            <p className='text-gray-400 text-sm'>For centrifugal pumps, mixers, and compressors.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Clamps, Couplings & Chain Links:**</p> 
                            <p className='text-gray-400 text-sm'>For shafts, pipelines, and transmission systems.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application and Sourcing Grid */}
            <h2 className={`text-4xl font-bold mb-10 text-center ${ACCENT_ORANGE_CLASS}`}>Specialized Sourcing & Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                
                {/* Application 1: Rotating Equipment */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <BearingsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Pumps, Motors, and Gearboxes</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Supply of spare parts specifically for **critical rotating equipment** such as centrifugal pumps, dosing units, and industrial mixers.
                    </p>
                </div>
                
                {/* Service 2: Hard-to-Find & Obsolete */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <SpannerIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Obsolete & Custom Part Sourcing</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Expert global sourcing capabilities for **obsolete or discontinued parts** and specialized, one-off components for legacy machinery.
                    </p>
                </div>
                
                {/* Application 3: Packaging Lines */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <BearingsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Packaging & Material Handling Spares</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Focus on fast-moving spares for **bottling, canning, and packaging machines**—where component failure directly halts production.
                    </p>
                </div>

            </div>
            
            {/* Call to Action - Consistent Styling */}
            <div className={`text-center mt-16 p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className={`text-3xl font-bold mb-4 ${ACCENT_ORANGE_CLASS}`}>Need a Critical Spare Part Immediately?</h3>
                <p className="text-lg text-gray-300 mb-6">Contact our rapid response team with the part number and specifications. We deliver the components that keep your plant running.</p>
                <a href="#contact" className={`transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl inline-flex items-center justify-center`} style={{ backgroundColor: ACCENT_BUTTON_COLOR, color: DARK_NAVY }}>
                    Submit Spare Part Inquiry
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                </a>
            </div>
        </div>
    </div>
);

export default SparePartsPage;