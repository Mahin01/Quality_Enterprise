import React from 'react';

// --- Color and Style Constants (Consistent Theme) ---
const PRIMARY_TEAL = '#1A364F';
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-amber-400'; // Using amber-400 from the NavBar
const ACCENT_TEXT_CLASS = 'text-gray-300';
const ACCENT_BUTTON_COLOR = ORANGE_ACCENT_HEX; // For CTA background

// --- Inline SVG Icon Definitions ---

// Gasket/Seal Icon (Represents Sealing Integrity)
const SealIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
        <path d="M12 2v20"></path>
        <path d="M16 12h-8"></path>
    </svg>
);

// Material Icon (For diverse material supply)
const MaterialIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M17 21h-10a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path>
        <path d="M9 17h6"></path>
        <path d="M9 13h6"></path>
    </svg>
);

// ChevronRightIcon (For CTA Button)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const SealingSolutionsPage = () => (
    <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
        
        {/* Hero Section */}
        <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Industrial Sealing Solutions: <span className={`${ACCENT_ORANGE_CLASS}`}>Zero Leakage, Maximum Reliability</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                    From high-pressure gaskets to chemical-resistant O-rings, we supply high-integrity sealing components to prevent leaks, minimize downtime, and ensure safe operations in challenging industrial environments.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto p-8 lg:p-16">
            
            {/* Core Product Offering Card */}
            <div className={`flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden mb-16 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="flex-shrink-0 flex items-center justify-center p-8 lg:p-12" style={{ backgroundColor: DARK_NAVY }}>
                    <SealIcon className={`w-24 h-24 ${ACCENT_ORANGE_CLASS} opacity-80`} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className={`text-4xl font-bold mb-3 ${ACCENT_ORANGE_CLASS}`}>Gaskets, O-Rings, and Sheet Materials</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        We stock and supply a comprehensive range of sealing products essential for pipelines, heat exchangers, pumps, and reactors, meeting specifications for pressure, temperature, and chemical compatibility.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-3">
                        <div className={`px-4 py-1.5 text-sm font-semibold rounded-full`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>Non-Asbestos Gaskets</div>
                        <div className={`px-4 py-1.5 text-sm font-semibold rounded-full`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>EPDM & NBR O-Rings</div>
                        <div className={`px-4 py-1.5 text-sm font-semibold rounded-full`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>Graphite & PTFE Sheets</div>
                        <div className={`px-4 py-1.5 text-sm font-semibold rounded-full`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>Hydraulic & Pneumatic Seals</div>
                    </div>
                </div>
            </div>

            {/* Custom Capabilities & Materials Grid */}
            <h2 className={`text-4xl font-bold mb-10 text-center ${ACCENT_ORANGE_CLASS}`}>Customization & Specialized Materials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                
                {/* Capability 1: Custom Gasket Cutting */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <MaterialIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Precision Gasket Cutting</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        We offer rapid **custom gasket fabrication** from a variety of sheets (e.g., Rubber, CAF, PTFE, Graphite) to non-standard dimensions and complex profiles to meet urgent plant needs.
                    </p>
                </div>
                
                {/* Capability 2: Specialized Materials (Chemical) */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <MaterialIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Chemical & High-Temp Seals</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Sourcing specialized materials like **Viton, Chemraz, and Teflon (PTFE)** for applications involving aggressive chemicals, solvents, or extreme temperatures.
                    </p>
                </div>
                
                {/* Capability 3: Food Grade & Hygienic */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <MaterialIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Hygienic & Food Grade Sealing</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Supply of **FDA-approved and food-grade** sealing components, including silicone and EPDM O-rings, crucial for the FMCG and pharmaceutical sectors.
                    </p>
                </div>

            </div>
            
            {/* Call to Action - Consistent Styling */}
            <div className={`text-center mt-16 p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className={`text-3xl font-bold mb-4 ${ACCENT_ORANGE_CLASS}`}>Need Immediate Sealing Solutions or Custom Gaskets?</h3>
                <p className="text-lg text-gray-300 mb-6">Ensure system integrity and compliance with our range of high-performance gaskets, O-rings, and seals. Fast delivery guaranteed.</p>
                <a href="/contact" className={`transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl inline-flex items-center justify-center`} style={{ backgroundColor: ACCENT_BUTTON_COLOR, color: DARK_NAVY }}>
                    Inquire About Sealing Products
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                </a>
            </div>
        </div>
    </div>
);

export default SealingSolutionsPage;