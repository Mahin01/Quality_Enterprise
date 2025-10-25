import React from 'react';

// --- Color and Style Constants (Consistent Theme) ---
const PRIMARY_TEAL = '#1A364F';
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-amber-400';
const ACCENT_TEXT_CLASS = 'text-gray-300';
const ACCENT_BUTTON_COLOR = ORANGE_ACCENT_HEX;

// --- Inline SVG Icon Definitions ---

// Conveyor Belt Icon (Represents Movement/Logistics)
const ConveyorIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h14M5 8h14M5 12h14M5 16h14M5 20h14"></path>
        <path d="M19 4l-4 4-4-4-4 4-4-4"></path>
        <path d="M19 12l-4 4-4-4-4 4-4-4"></path>
    </svg>
);

// Gears/Customization Icon (For custom services like jointing)
const GearsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path>
        <path d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        <path d="M12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        <path d="M5 12h14"></path>
        <path d="M8 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        <path d="M16 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
    </svg>
);

// ChevronRightIcon (For CTA Button)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const ConveyorBeltsPage = () => (
    <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
        
        {/* Hero Section */}
        <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Conveyor Belts & Accessories: <span className={`${ACCENT_ORANGE_CLASS}`}>Keeping Production Moving</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                    We supply a comprehensive range of high-durability conveyor belts, modular systems, and essential accessories, ensuring smooth, continuous material handling for food, packaging, and industrial lines.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto p-8 lg:p-16">
            
            {/* Core Product Offering Card */}
            <div className={`flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden mb-16 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="flex-shrink-0 flex items-center justify-center p-8 lg:p-12" style={{ backgroundColor: DARK_NAVY }}>
                    <ConveyorIcon className={`w-24 h-24 ${ACCENT_ORANGE_CLASS} opacity-80`} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className={`text-4xl font-bold mb-3 ${ACCENT_ORANGE_CLASS}`}>Belts for Every Application</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Our inventory covers standard and specialized belting for various industrial needs, focusing on high wear resistance, sanitation, and specific material handling requirements.
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Flat Conveyor Belts (PU/PVC):**</p> 
                            <p className='text-gray-400 text-sm'>Food-grade, anti-static, high-grip options.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Modular & Tabletop Chains:**</p> 
                            <p className='text-gray-400 text-sm'>For curved or high-speed bottling/packaging lines.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Specialty Belts:**</p> 
                            <p className='text-gray-400 text-sm'>Timing, Rough Top, Cleated, and Bucket Elevator belts.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>**Transmission Belts:**</p> 
                            <p className='text-gray-400 text-sm'>V-belts, Poly V-belts, and specialized drive belts.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accessories and Services Grid */}
            <h2 className={`text-4xl font-bold mb-10 text-center ${ACCENT_ORANGE_CLASS}`}>Accessories & On-Site Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                
                {/* Accessory 1: Pulleys and Rollers */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <GearsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Pulleys, Rollers & Idlers</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Supply of precision-machined rollers, guide pulleys, and impact idlers to minimize friction and prevent belt misalignment/wear.
                    </p>
                </div>
                
                {/* Accessory 2: Fasteners and Skirting */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <GearsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Mechanical Fasteners & Joints</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Quick-lacing mechanical fasteners, belt skimmers, and skirting rubber to manage spillage and ensure belt tension integrity.
                    </p>
                </div>
                
                {/* Service: On-Site Jointing & Sizing */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <GearsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">On-Site Hot/Cold Jointing</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Minimize downtime with our **on-site belt jointing and splicing services**, custom-sizing belts to precise lengths and ensuring seamless loop installation.
                    </p>
                </div>

            </div>
            
            {/* Call to Action - Consistent Styling */}
            <div className={`text-center mt-16 p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className={`text-3xl font-bold mb-4 ${ACCENT_ORANGE_CLASS}`}>Need to Replace or Upgrade Your Conveyor System?</h3>
                <p className="text-lg text-gray-300 mb-6">Contact us for quick supply of belts, or schedule an on-site jointing service to reduce production delays immediately.</p>
                <a href="/contact" className={`transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl inline-flex items-center justify-center`} style={{ backgroundColor: ACCENT_BUTTON_COLOR, color: DARK_NAVY }}>
                    Request Conveyor Solution
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                </a>
            </div>
        </div>
    </div>
);

export default ConveyorBeltsPage;