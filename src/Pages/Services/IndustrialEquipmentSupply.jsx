import React from 'react';

// Define color constants for clarity and consistent application of the theme
const PRIMARY_TEAL = '#1A364F'; 
const DARK_NAVY = '#0F2133';
// Explicitly defining the orange accent hex for custom button and border styles
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-orange-400'; // Tailwind class for text color
const CARD_TITLE_COLOR = 'text-gray-800'; // Color for card titles against white background
// Updated text color for better contrast against dark row background
const TABLE_TEXT_COLOR_DARK_CONTRAST = 'text-gray-400'; 

// Replacement SVG Icons (using Lucide icons as inspiration, simplified for inline use)

// 1. FaValve (Flow Control)
const ValveIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 13V8M16 13L20 17M16 13L12 17M8 13V8M8 13L4 17M8 13L12 17M12 17V20M12 4V7"/>
        <rect x="2" y="7" width="20" height="4" rx="2" ry="2"/>
    </svg>
);

// 2. FaCogs (Sealing/Gears)
const CogsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

// 3. FaShippingFast (Conveyor/Shipping)
const ShippingFastIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        <path d="M17 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
    </svg>
);

// 4. FaIndustry (General Spares/Factory) - Reusing this for General Spares
const IndustryIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M10 4v16M14 4v16M2 12h20M6 12h8M10 12v4M14 12v4"/>
    </svg>
);

// 7. FaWrench (Plastic & Rubber Engineering) - New icon for custom parts
const WrenchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7l-5-5-5 5M4 15l5 5 5-5M2 22l-1-1 3-3"/>
        <path d="M17 17l-1 1M18 13l-1 1M20 11l-1 1M10 10l-1 1M6 6l-1 1M7 3l-1 1"/>
        <path d="M14 10l-4 4M10 14l-4 4"/>
    </svg>
);

// 5. FaSearch (Engineering Sourcing)
const SearchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);

// 6. FaChevronRight (CTA Arrow)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const IndustrialEquipmentSupplyPage = () => (
  <div className={`min-h-screen text-white font-inter`} style={{ backgroundColor: DARK_NAVY }}>
    
    {/* Hero Section - Strong Visual Header */}
    <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                Reliable Supply for <span className={`${ACCENT_ORANGE_CLASS}`}>Continuous Operations</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                We provide engineering-driven components and tailored supply solutions, ensuring quality, technical fit, and minimal downtime across your facility.
            </p>
            {/* CTA Button */}
            <button className={`mt-8 transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl flex items-center justify-center mx-auto`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>
                Get a Quote Now
                <ChevronRightIcon className="ml-2 w-5 h-5" />
            </button>
        </div>
    </div>

    <div className="max-w-7xl mx-auto p-8 lg:p-16">

      {/* Core Product Categories - Card Grid */}
      <h2 className={`text-5xl font-bold mb-14 text-center ${ACCENT_ORANGE_CLASS} pt-8`}>
        Core Product Categories
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        
        {/* Card Structure refined for professionalism - Now supporting 5 categories and spanning across the row */}
        {[
            { Icon: ValveIcon, title: "Valves & Flow Control", description: "Gate, Ball, Butterfly, Globe, Check Valves (NRV), and Y-Strainers in all industrial grades." },
            { Icon: CogsIcon, title: "Sealing Solutions", description: "High-performance Gaskets, O-Rings, and Sheets in PTFE, Viton, EPDM, and Graphite for critical applications." },
            { Icon: ShippingFastIcon, title: "Conveyor Systems", description: "Specialized PU/PVC, Modular, and Timing Belts, supported by quick, professional on-site jointing and accessories." },
            { Icon: IndustryIcon, title: "General Spares & Accessories", description: "Bearings, Bushings, Mechanical Seals, Couplings, and Industrial Hoses, ensuring minimal stock-outs." },
            { Icon: WrenchIcon, title: "Plastic & Rubber Engineering", description: "Custom pulleys, sprockets, molded pucks, Teflon, and Nylon materials fabricated to specific requirements." },
        ].map((item, index) => (
            <div 
                key={index} 
                // Set background to white (bg-white) and border/shadow colors
                className={`card shadow-xl bg-white rounded-xl border-t-4 border-transparent hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 ${index === 4 ? 'lg:col-span-2 lg:col-start-2 sm:col-span-2' : ''}`}
            >
                <div className="card-body items-center text-center p-8">
                    <item.Icon className={`w-14 h-14 ${ACCENT_ORANGE_CLASS} mb-4`} />
                    {/* Applying CARD_TITLE_COLOR (text-gray-800) to make text visible against white background */}
                    <h3 className={`card-title text-2xl font-semibold ${CARD_TITLE_COLOR}`}>{item.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                </div>
            </div>
        ))}
      </div>

      {/* Feature Highlight Block */}
      <div className={`relative p-12 mb-20 rounded-2xl overflow-hidden shadow-2xl border border-teal-700`} style={{ backgroundColor: PRIMARY_TEAL }}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-transparent opacity-50 z-0"></div>
        <div className="flex flex-col lg:flex-row items-center relative z-10">
            <SearchIcon className={`w-16 h-16 ${ACCENT_ORANGE_CLASS} lg:mr-8 mb-6 lg:mb-0 flex-shrink-0`} />
            <div className="flex-grow">
                <h3 className="font-bold text-4xl text-white mb-3">Engineering-Led Sourcing</h3>
                <p className="text-lg text-gray-200">
                    We specialize in **custom sourcing** and **technical matching**, providing quick, accurate alternatives for obsolete or hard-to-find components—not just off-the-shelf replacements. Our in-house technical team ensures you get the *right* component every time.
                </p>
            </div>
            {/* Outline Button */}
            <button className={`mt-6 lg:mt-0 lg:ml-8 flex-shrink-0 border-2 text-lg font-semibold py-2 px-6 rounded-xl transition duration-300 hover:bg-opacity-10`} style={{ borderColor: ORANGE_ACCENT_HEX, color: ORANGE_ACCENT_HEX }}>
                Discuss a Custom Requirement
            </button>
        </div>
      </div>


      {/* Materials List - Table */}
      <h2 className={`text-4xl font-bold mb-8 ${ACCENT_ORANGE_CLASS} text-center`}>
        Common Materials & Specifications
      </h2>
      <div className="overflow-x-auto rounded-xl shadow-2xl">
        <table className="table w-full">
          <thead>
            <tr>
              {/* Applied inline style to table headers */}
              <th className={`text-lg text-white/90 font-bold p-4`} style={{ backgroundColor: PRIMARY_TEAL }}>Product Type</th>
              <th className={`text-lg text-white/90 font-bold p-4`} style={{ backgroundColor: PRIMARY_TEAL }}>Materials / Specs</th>
            </tr>
          </thead>
          <tbody>
            {/* Using a darker background for the table rows to ensure the light text is visible */}
            <tr className="bg-gray-800/50 hover:bg-gray-700/70 transition duration-150 border-b border-gray-700">
              <td className={`font-semibold text-white p-4`}>Valves</td>
              {/* FIX: Applied TABLE_TEXT_COLOR_DARK_CONTRAST (text-gray-400) to the description column */}
              <td className={`${TABLE_TEXT_COLOR_DARK_CONTRAST} p-4`}>SS304/316, Cast Iron, Brass, Bronze, EPDM Lined. ANSI, DIN, and API standards.</td>
            </tr>
            <tr className="bg-gray-800/50 hover:bg-gray-700/70 transition duration-150 border-b border-gray-700">
              <td className={`font-semibold text-white p-4`}>Sealing</td>
              {/* FIX: Applied TABLE_TEXT_COLOR_DARK_CONTRAST (text-gray-400) to the description column */}
              <td className={`${TABLE_TEXT_COLOR_DARK_CONTRAST} p-4`}>PTFE, Graphite, Viton, EPDM, Silicone, Nitrile. High-temp, high-pressure ratings.</td>
            </tr>
            <tr className="bg-gray-800/50 hover:bg-gray-700/70 transition duration-150 border-b border-gray-700">
              <td className={`font-semibold text-white p-4`}>Belts & Conveyors</td>
              {/* FIX: Applied TABLE_TEXT_COLOR_DARK_CONTRAST (text-gray-400) to the description column */}
              <td className={`${TABLE_TEXT_COLOR_DARK_CONTRAST} p-4`}>Food-Grade PU/PVC, Modular, Timing (all pitches). Full range of belt fasteners.</td>
            </tr>
            <tr className="bg-gray-800/50 hover:bg-gray-700/70 transition duration-150">
              <td className={`font-semibold text-white p-4`}>Plastic & Rubber</td>
              {/* FIX: Applied TABLE_TEXT_COLOR_DARK_CONTRAST (text-gray-400) to the description column */}
              <td className={`${TABLE_TEXT_COLOR_DARK_CONTRAST} p-4`}>Teflon, Nylon, Polyurethane (PU), Silicone. Custom machining and fabrication available.</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
);

export default IndustrialEquipmentSupplyPage;
