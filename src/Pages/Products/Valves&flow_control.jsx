import React from 'react';

// --- Color and Style Constants (Consistent Theme) ---
const PRIMARY_TEAL = '#1A364F';
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-amber-400'; // Using amber-400 from the NavBar
const ACCENT_TEXT_CLASS = 'text-gray-300';
const ACCENT_BUTTON_COLOR = ORANGE_ACCENT_HEX; // For CTA background

// --- Inline SVG Icon Definitions (Re-using some, adding a specific one for Flow) ---

// Pipe Valve Icon (For Flow Control)
const ValveIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10h10M7 14h10M12 2v20M17 5l5 5-5 5M7 5l-5 5 5 5"/>
    </svg>
);

// Settings/Precision Icon (For Value-Added Services)
const SettingsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
);

// ChevronRightIcon (For CTA Button)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const ValvesFlowControlPage = () => (
    <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
        
        {/* Hero Section */}
        <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Valves & Flow Control: <span className={`${ACCENT_ORANGE_CLASS}`}>Reliable Control for Every Fluid</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                    We offer reliable valves and flow control devices built for safety, precision, and durability, sourced from trusted manufacturers to fit diverse needs[cite: 65, 67, 68].
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto p-8 lg:p-16">
            
            {/* Core Products Card */}
            <div className={`flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden mb-16 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="flex-shrink-0 flex items-center justify-center p-8 lg:p-12" style={{ backgroundColor: DARK_NAVY }}>
                    <ValveIcon className={`w-24 h-24 ${ACCENT_ORANGE_CLASS} opacity-80`} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className={`text-4xl font-bold mb-3 ${ACCENT_ORANGE_CLASS}`}>Key Valve Types & Specifications</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Our solutions manage flow for mediums ranging from **steam and water to chemicals and compressed air**[cite: 68]. Pressure ratings are available from PN16 to PN40, ANSI 150/300, and JIS standards[cite: 76].
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>Gate Valves (Linear shut-off)[cite: 68]:</p> 
                            <p className='text-gray-400 text-sm'>Sizes: 1/4"–12". Materials: CI, SS, Brass[cite: 68].</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>Ball Valves (Quick shut-off)[cite: 68]:</p> 
                            <p className='text-gray-400 text-sm'>Sizes: 1/4"–6". Materials: SS304/316, Brass[cite: 68].</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>Butterfly Valves (Quarter-turn flow regulation)[cite: 68]:</p> 
                            <p className='text-gray-400 text-sm'>Sizes: 2"–24". Materials: CI, EPDM-Lined, SS[cite: 68].</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-white'>Globe Valves (Throttling control)[cite: 68]:</p> 
                            <p className='text-gray-400 text-sm'>Sizes: 1/4"–4". Materials: SS, Bronze[cite: 68].</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value-Added Services Section */}
            <h2 className={`text-4xl font-bold mb-10 text-center ${ACCENT_ORANGE_CLASS}`}>Value-Added Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                
                {/* Service 1: Sizing and Selection */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <SettingsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">On-site Sizing & Selection</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        We provide **on-site consultation** for accurate valve sizing and selection, ensuring the perfect technical fit for your system requirements[cite: 70, 71].
                    </p>
                </div>
                
                {/* Service 2: Custom Sourcing */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <SettingsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Custom & OEM Replacement Sourcing</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Need a specialized part? We handle **custom sourcing** for hard-to-find or specific OEM replacement valves to minimize procurement delays[cite: 72, 73].
                    </p>
                </div>
                
                {/* Service 3: Installation Support */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <SettingsIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Installation & Commissioning</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Full **installation support** and commissioning services are available, ensuring your new flow control equipment is correctly integrated and operational from day one[cite: 74, 75].
                    </p>
                </div>

            </div>
            
            {/* Call to Action - Consistent Styling */}
            <div className={`text-center mt-16 p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className={`text-3xl font-bold mb-4 ${ACCENT_ORANGE_CLASS}`}>Need Reliable Flow Control or Custom Sourcing?</h3>
                <p className="text-lg text-gray-300 mb-6">Contact our engineering team today to find the precise valve solution for your critical lines.</p>
                <a href="/contact" className={`transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl inline-flex items-center justify-center`} style={{ backgroundColor: ACCENT_BUTTON_COLOR, color: DARK_NAVY }}>
                    Get a Quote on Valves
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                </a>
            </div>
        </div>
    </div>
);

export default ValvesFlowControlPage;