import React from 'react';

// --- Color and Style Constants (Copied from OperationalExcellencePage) ---
const PRIMARY_TEAL = '#1A364F'; 
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-orange-400'; 
const ACCENT_TEXT_CLASS = 'text-gray-300';

// --- Inline SVG Icon Definitions (Replacing react-icons) ---

// 1. SearchIcon (for Obsolete Parts - Replaces FaSearch)
const SearchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

// 2. WrenchIcon (for Seal Failure - Replaces FaWrench)
const WrenchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.77 3.77a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0Z"></path>
        <path d="M15.29 17.3a1 1 0 0 0-1.4 0l-4.57 4.57a1 1 0 0 0 0 1.4l.6.6a1 1 0 0 0 1.4 0l4.57-4.57a1 1 0 0 0 0-1.4l-1.6-1.6Z"></path>
    </svg>
);

// 3. ToolsIcon (for Conveyor Maintenance - Replaces FaTools)
const ToolsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15.82 20.91-11.75-9.35a1.44 1.44 0 0 1-.16-2.2l10.9-10.9a1.44 1.44 0 0 1 2.2.15l9.35 11.75a1.44 1.44 0 0 1-.15 2.2l-10.9 10.9a1.44 1.44 0 0 1-2.2-.16Z"/>
        <path d="m5 16 10-10"/>
    </svg>
);

// 4. ChevronRightIcon (for CTA Button)
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);

const StepItem = ({ number, title, description, isLast }) => (
    <li className="relative flex items-start pb-6">
        <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${!isLast ? 'bg-orange-400' : 'bg-transparent'}`} />
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-lg font-bold text-gray-900 z-10 shadow-lg">
            {number}
        </div>
        <div className="flex-grow ml-6 pt-1">
            <span className="font-bold text-xl text-white block">{title}</span>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </li>
);

const CustomEngineeringSolutionsPage = () => (
    <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
        
        {/* Hero Section */}
        <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                    Technical Expertise to <span className={`${ACCENT_ORANGE_CLASS}`}>Solve Complex Problems</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                    We go beyond supply to offer diagnostics, troubleshooting, and custom engineering support to restore and improve your critical processes.
                </p>
                {/* CTA Button - Styled to match OperationalExcellencePage */}
                <a href="/contact">
                <button className={`mt-8 transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl flex items-center justify-center mx-auto`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>
                    Request Immediate Support
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                </button>
                </a>
            </div>
        </div>

        <div className="max-w-7xl mx-auto p-8 lg:p-16">

            <div className="grid lg:grid-cols-2 gap-12 mb-20">
                
                {/* 5-Step Process - Vertical Steps (Refactored to pure Tailwind/React) */}
                <div className="lg:order-2">
                    <h2 className={`text-4xl font-bold mb-8 ${ACCENT_ORANGE_CLASS}`}>Our 5-Step Solution Process</h2>
                    <ul className="list-none p-0 m-0">
                        <StepItem 
                            number="1" 
                            title="Listen & Inspect" 
                            description="Deep dive into failure history, conduct rigorous site inspection, and gather empirical data on the failure mode and environment." 
                        />
                        <StepItem 
                            number="2" 
                            title="Diagnose" 
                            description="Determine the root cause using industrial failure analysis techniques (e.g., material fatigue, chemical incompatibility, or mechanical misalignment)." 
                        />
                        <StepItem 
                            number="3" 
                            title="Propose Solution" 
                            description="Recommend a permanent, cost-effective fix: be it material upgrade, design modification, or new equipment specification." 
                        />
                        <StepItem 
                            number="4" 
                            title="Source & Implement" 
                            description="Rapid supply of the component, facilitation of custom fabrication, or execution of specialized on-site modification and installation." 
                        />
                        <StepItem 
                            number="5" 
                            title="Follow-Up & Verify" 
                            description="Post-installation performance tracking and analysis to ensure the solution has definitively eliminated the recurrence of the problem." 
                            isLast
                        />
                    </ul>
                </div>

                {/* Common Problems Solved (Enhanced Detail and Styling) */}
                <div className="lg:order-1">
                    <h2 className={`text-4xl font-bold mb-8 ${ACCENT_ORANGE_CLASS}`}>Common Challenges We Solve</h2>
                    <div className="space-y-6">
                        
                        {/* Obsolete Parts */}
                        <div className="rounded-xl shadow-lg p-6 border border-gray-700/50" style={{ backgroundColor: PRIMARY_TEAL }}>
                            <div className="flex items-center">
                                <SearchIcon className={`w-8 h-8 ${ACCENT_ORANGE_CLASS} mr-4 flex-shrink-0`} />
                                <h3 className="text-xl font-bold text-white">Obsolete or Unbranded Parts</h3>
                            </div>
                            <p className="text-gray-400 text-base mt-3">
                                Expert **Reverse Engineering** to dimensionally map obsolete components and critical wear parts. We identify and procure superior **OEM equivalents or custom fabrications** compliant with industrial standards, ensuring seamless integration and technical dependability.
                            </p>
                        </div>
                        
                        {/* Recurring Seal or Gasket Failure */}
                        <div className="rounded-xl shadow-lg p-6 border border-gray-700/50" style={{ backgroundColor: PRIMARY_TEAL }}>
                            <div className="flex items-center">
                                <WrenchIcon className={`w-8 h-8 ${ACCENT_ORANGE_CLASS} mr-4 flex-shrink-0`} />
                                <h3 className="text-xl font-bold text-white">Recurring Seal or Gasket Failure</h3>
                            </div>
                            <p className="text-gray-400 text-base mt-3">
                                In-depth **Failure Analysis** to determine the true root cause, whether it's **chemical attack, thermal stress, improper material grade, or mechanical misalignment**. We specify and supply high-performance sealing solutions for sustained leak-free operation.
                            </p>
                        </div>
                        
                        {/* High Conveyor Maintenance */}
                        <div className="rounded-xl shadow-lg p-6 border border-gray-700/50" style={{ backgroundColor: PRIMARY_TEAL }}>
                            <div className="flex items-center">
                                <ToolsIcon className={`w-8 h-8 ${ACCENT_ORANGE_CLASS} mr-4 flex-shrink-0`} />
                                <h3 className="text-xl font-bold text-white">High Conveyor Maintenance</h3>
                            </div>
                            <p className="text-gray-400 text-base mt-3">
                                Comprehensive system diagnostics covering **belt tracking alignment, pulley wear, and material selection**. We engineer solutions using **high-abrasion resistance materials** and optimized geometry to minimize maintenance frequency and downtime losses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action - Styled to match the theme */}
            <div className={`text-center mt-16 p-10 rounded-xl shadow-2xl`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <h3 className={`text-3xl font-bold mb-4 ${ACCENT_ORANGE_CLASS}`}>Don't Let Downtime Define Your Production.</h3>
                <p className="text-lg text-gray-300 mb-6">Our technical team is ready to assist with urgent component replacement and advanced troubleshooting to restore your critical processes.</p>
                <a href="/contact" className={`transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl inline-flex items-center justify-center`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>
                    Initiate Technical Consultation
                </a>
            </div>
        </div>
    </div>
);

export default CustomEngineeringSolutionsPage;
