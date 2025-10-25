import React from 'react';

// --- Color and Style Constants (Consistent Theme) ---
const PRIMARY_TEAL = '#1A364F';
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-orange-400';
const ACCENT_TEXT_CLASS = 'text-gray-300';
const ACCENT_BUTTON_COLOR = ORANGE_ACCENT_HEX; // For CTA background

// --- Inline SVG Icon Definitions ---

// 1. SpeedometerIcon (Replaces IoMdSpeedometer)
const SpeedometerIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
        <path d="M12 6v6l4 2"></path>
    </svg>
);

// 2. CertificateIcon (For Documentation/Traceability)
const CertificateIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 10c.84 0 1.5.66 1.5 1.5v3c0 .84-.66 1.5-1.5 1.5H9.5c-.84 0-1.5-.66-1.5-1.5v-3c0-.84.66-1.5 1.5-1.5h5z"></path>
        <path d="M4 22h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2z"></path>
        <path d="M10 12h4"></path>
        <path d="M10 15h4"></path>
    </svg>
);

// 3. IndustryIcon (For Sector Expertise - Replaces FaIndustry)
const IndustryIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18"></path>
        <path d="M3 10l9-6 9 6"></path>
        <path d="M4 14h16"></path>
        <path d="M4 18h16"></path>
        <path d="M8 22V14"></path>
        <path d="M16 22V14"></path>
    </svg>
);

// 4. ChevronRightIcon (For CTA Button)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const CalibrationCompliancePage = () => (
    <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
        
        {/* Hero Section */}
        <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Calibration, Traceability, and <span className={`${ACCENT_ORANGE_CLASS}`}>ISO/IEC 17025 Compliance</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                    Precision is paramount. Our services, provided through Quality Calibration, ensure your instruments deliver proven accuracy and meet all national and international regulatory standards.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto p-8 lg:p-16">
            
            {/* Accreditation Card - Refined Styling and Icon */}
            <div className={`flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden mb-16 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="flex-shrink-0 flex items-center justify-center p-8 lg:p-12" style={{ backgroundColor: DARK_NAVY }}>
                    <SpeedometerIcon className={`w-24 h-24 ${ACCENT_ORANGE_CLASS} opacity-80`} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className={`text-4xl font-bold mb-3 ${ACCENT_ORANGE_CLASS}`}>ISO/IEC 17025 Accredited Laboratory</h2>
                    <p className="text-lg text-gray-300">
                        Our laboratory operates under the stringent **ISO/IEC 17025** standard, making our certificates **globally recognized** and highly reliable. This accreditation ensures every measurement is traceable to national and international standards, guaranteeing the integrity of your quality system.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-5">
                        <div className={`px-4 py-1.5 text-sm font-semibold rounded-full`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>NABL Traceable</div>
                        <div className={`px-4 py-1.5 text-sm font-semibold rounded-full`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>BAB Certified</div>
                        <div className={`px-4 py-1.5 text-sm font-semibold rounded-full`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>ISO 9001 Certified</div>
                    </div>
                </div>
            </div>

            {/* Calibration Parameters Grid */}
            <h2 className={`text-4xl font-bold mb-10 text-center ${ACCENT_ORANGE_CLASS}`}>Parameters and Instruments Covered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                
                {/* Parameter 1: Temperature & Humidity */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <h3 className="card-title text-2xl text-white font-bold mb-3 border-b border-gray-600/50 pb-2">Temperature & Humidity</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1">
                        <li>**Thermal Mapping** for Ovens, Furnaces, and Incubators</li>
                        <li>Calibration of Thermometers, **RTDs**, and Thermocouples</li>
                        <li>Environmental Chambers and High-Precision Data Loggers</li>
                    </ul>
                </div>
                
                {/* Parameter 2: Pressure & Vacuum */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <h3 className="card-title text-2xl text-white font-bold mb-3 border-b border-gray-600/50 pb-2">Pressure & Vacuum</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1">
                        <li>Gauge, Absolute, and Differential Pressure Transmitters</li>
                        <li>Dead Weight Testers and Pressure Calibrators</li>
                        <li>High Vacuum Systems and Vacuum Gauges</li>
                    </ul>
                </div>
                
                {/* Parameter 3: Mass & Volume */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <h3 className="card-title text-2xl text-white font-bold mb-3 border-b border-gray-600/50 pb-2">Mass & Volume</h3>
                    <ul className="list-disc list-inside text-gray-400 mt-4 space-y-1">
                        <li>High-Capacity Weighing Balances and Industrial Scales</li>
                        <li>Standard Test Weights (**E2, F1, M1 Class**)</li>
                        <li>Micropipettes, Burettes, and Volume Dispensers</li>
                    </ul>
                </div>
                
                {/* Feature 1: Traceable Documentation */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <CertificateIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Traceable Documentation</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        All services are delivered with comprehensive, auditable certificates detailing 'As Found'/'As Left' conditions, measurement uncertainty, and required traceability standards.
                    </p>
                </div>
                
                {/* Feature 2: On-Site Calibration */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <IndustryIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">On-Site & Minimal Downtime</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        We offer specialized on-site calibration for critical or fixed equipment, scheduling services to minimize operational disruption and production halts.
                    </p>
                </div>

                {/* Feature 3: Sector Expertise (Re-using FaIndustry for diversity) */}
                <div className={`rounded-xl shadow-lg p-6 border border-gray-700/50 flex flex-col`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex items-center mb-3 border-b border-gray-600/50 pb-2">
                        <IndustryIcon className={`w-6 h-6 ${ACCENT_ORANGE_CLASS} mr-3`} />
                        <h3 className="card-title text-2xl text-white font-bold">Sector Expertise</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">
                        Deep, sector-specific knowledge in **Pharma, FMCG, Oil & Gas, and Power** ensures we meet the unique regulatory requirements of your industry.
                    </p>
                </div>

            </div>
            
            {/* Call to Action - Consistent Styling */}
            <div className={`text-center mt-16 p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className={`text-3xl font-bold mb-4 ${ACCENT_ORANGE_CLASS}`}>Ready to Ensure Measurement Accuracy?</h3>
                <p className="text-lg text-gray-300 mb-6">Partner with our accredited lab to maintain compliance and optimize the performance of your entire instrument base.</p>
                <a href="/contact" className={`transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl inline-flex items-center justify-center`} style={{ backgroundColor: ACCENT_BUTTON_COLOR, color: DARK_NAVY }}>
                    Request Calibration Service
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                </a>
            </div>
        </div>
    </div>
);

export default CalibrationCompliancePage;
