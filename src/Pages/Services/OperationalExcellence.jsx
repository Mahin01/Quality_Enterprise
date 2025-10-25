import React from 'react';

// --- Color and Style Constants (Matching IndustrialEquipmentSupplyPage) ---
const PRIMARY_TEAL = '#1A364F'; 
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-orange-400'; 
const ACCENT_TEXT_CLASS = 'text-gray-300';
// CARD_BG_COLOR is not used directly, using PRIMARY_TEAL for blocks

// --- Inline SVG Icon Definitions (Replacing react-icons) ---

// 1. GiTargeted (Lean Six Sigma)
const TargetedIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

// 2. GiGears (WCM)
const GearsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

// 3. GiReceiveMoney (Value Engineering)
const ReceiveMoneyIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h.01"/>
        <path d="M7 20h10"/>
        <path d="M12 16V4M12 4l-4 4M12 4l4 4"/>
        <rect x="2" y="10" width="20" height="4" rx="2"/>
    </svg>
);

// 4. FaChartLine (Stats)
const ChartLineIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v3h18v-3"/>
        <path d="M18 13l-4-4L6 14"/>
        <path d="M18 13h-3.5a1.5 1.5 0 0 1-1.5-1.5V8.5"/>
        <path d="M3 3v18"/>
    </svg>
);

// Chevron Icon for CTA Button
const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);


const OperationalExcellencePage = () => {
    // Unique name for radio buttons to control the tab state
    const tabName = "op-ex-tabs";

    const TabButton = ({ id, label, defaultChecked = false }) => (
        <>
            <input 
                type="radio" 
                name={tabName} 
                id={id} 
                className="hidden" 
                defaultChecked={defaultChecked} 
            />
            {/* Custom label styling to mimic tabs, using peer-checked for active state */}
            <label 
                htmlFor={id} 
                className={`flex-1 text-center py-3 px-6 cursor-pointer text-lg font-semibold transition-colors duration-200 
                            text-gray-400 bg-gray-700/50 
                            hover:bg-gray-700/80 
                            peer-checked/${id}:bg-white 
                            peer-checked/${id}:text-gray-900 
                            peer-checked/${id}:border-t-4 
                            peer-checked/${id}:border-orange-400 
                            last:rounded-tr-xl first:rounded-tl-xl
                            `}
            >
                {label}
            </label>
        </>
    );

    const TabContent = ({ id, children }) => (
        // Content container revealed by the checked radio button
        <div 
            className={`hidden w-full p-8 rounded-b-xl shadow-2xl transition-all duration-300 
                        bg-white text-gray-800
                        peer-checked/${id}:block
                        `}
        >
            {children}
        </div>
    );

    return (
        <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
            
            {/* Hero Section - Matching the IndustrialSupplyPage header */}
            <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                        Achieve <span className={`${ACCENT_ORANGE_CLASS}`}>World-Class Efficiency</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                        Implement proven methodologies like **Lean Six Sigma** and **WCM** to eliminate waste, optimize processes, and ensure long-term operational sustainability.
                    </p>
                    {/* CTA Button - Matching the IndustrialSupplyPage button style */}
                    <button className={`mt-8 transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl flex items-center justify-center mx-auto`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>
                        Start Your Assessment
                        <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-8 lg:p-16">

                {/* --- NEW: Foundation/About Section from Catalog --- */}
                <div className="bg-gray-800/50 p-8 mb-16 rounded-xl shadow-xl border border-gray-700">
                    <h2 className="text-3xl font-bold mb-3 text-white">Our Foundation: 40+ Years of Industrial Leadership</h2>
                    <p className="text-lg text-gray-300">
                        Founded by industry veterans with over **40+ years of combined experience** in demanding sectors like FMCG (e.g., Unilever Bangladesh), our services are not theoretical—they're built on real-world industrial performance. We utilize **integrated, ISO-based methodologies** to ensure process rigor, compliance, and long-term sustainability, delivering confidence and growth to your plant operations.
                    </p>
                </div>
                
                {/* Services Tabs (Custom Tailwind Implementation) */}
                <h2 className={`text-5xl font-bold mb-14 text-center ${ACCENT_ORANGE_CLASS} pt-8`}>
                    Integrated Improvement Pillars
                </h2>
                
                <div className="flex flex-col mb-16">
                    {/* Tab Navigation */}
                    <div className="flex rounded-t-xl overflow-hidden mb-[-2px] relative z-10">
                        <TabButton id="tab-lss" label="Lean Six Sigma" defaultChecked />
                        <TabButton id="tab-wcm" label="WCM Implementation" />
                        <TabButton id="tab-ve" label="Value Engineering" />
                    </div>

                    {/* Tab Content 1: Lean Six Sigma - Enhanced Detail */}
                    <TabContent id="tab-lss">
                        <div className="flex items-start mb-4">
                            <TargetedIcon className={`w-12 h-12 ${ACCENT_ORANGE_CLASS} mr-4 mt-1 flex-shrink-0`} />
                            <h3 className="text-3xl font-bold text-gray-900">Lean Six Sigma (LSS)</h3>
                        </div>
                        <p className="mb-4 text-lg text-gray-600">
                            The gold standard for process improvement: a data-driven approach to solving complex problems by eliminating waste (Lean) and drastically reducing variation (Six Sigma) across all production processes. This ensures **consistent, high-quality output and regulatory compliance.**
                        </p>
                        <ul className="list-disc list-inside space-y-3 ml-4 text-gray-700">
                            <li><span className="font-semibold text-teal-700">Process Mapping & Optimization:</span> Advanced **Value Stream Mapping (VSM)** to identify and remove all non-value-added steps with surgical precision.</li>
                            <li><span className="font-semibold text-teal-700">Variation Reduction:</span> Implementation of the **DMAIC methodology** (Define, Measure, Analyze, Improve, Control) to achieve statistical control and reliability.</li>
                            <li><span className="font-semibold text-teal-700">Team Training:</span> Comprehensive, hands-on training and mentorship for **Green Belt and Yellow Belt certification**, building internal capability and ownership.</li>
                        </ul>
                    </TabContent>

                    {/* Tab Content 2: WCM - Enhanced Detail */}
                    <TabContent id="tab-wcm">
                        <div className="flex items-start mb-4">
                            <GearsIcon className={`w-12 h-12 ${ACCENT_ORANGE_CLASS} mr-4 mt-1 flex-shrink-0`} />
                            <h3 className="text-3xl font-bold text-gray-900">World Class Manufacturing (WCM)</h3>
                        </div>
                        <p className="mb-4 text-lg text-gray-600">
                            A holistic, world-class system focused on strengthening the entire manufacturing base—equipment, human resources, and safety. WCM drives **maximum productivity and equipment reliability** in high-pressure industrial environments.
                        </p>
                        <ul className="list-disc list-inside space-y-3 ml-4 text-gray-700">
                            <li><span className="font-semibold text-teal-700">Autonomous Maintenance (AM):</span> Programs designed to empower operators to perform basic maintenance and inspection, **drastically reducing minor downtime and fostering equipment ownership.**</li>
                            <li><span className="font-semibold text-teal-700">Preventive Maintenance (PM):</span> Implementing **scheduled and predictive maintenance technologies** to maximize uptime and extend equipment life, ensuring **technical dependability**.</li>
                            <li><span className="font-semibold text-teal-700">Loss Analysis:</span> Systematic identification and elimination of the **16 major manufacturing losses** (e.g., speed losses, defects, breakdowns) through focused improvement teams.</li>
                        </ul>
                    </TabContent>

                    {/* Tab Content 3: Value Engineering - Enhanced Detail */}
                    <TabContent id="tab-ve">
                        <div className="flex items-start mb-4">
                            <ReceiveMoneyIcon className={`w-12 h-12 ${ACCENT_ORANGE_CLASS} mr-4 mt-1 flex-shrink-0`} />
                            <h3 className="text-3xl font-bold text-gray-900">Value Engineering Solutions</h3>
                        </div>
                        <p className="mb-4 text-lg text-gray-600">
                            A rigorous, structured process to improve product or process function while rigorously optimizing cost and quality. We achieve the best balance of **value, compliance, and investment** over the asset's lifecycle.
                        </p>
                        <ul className="list-disc list-inside space-y-3 ml-4 text-gray-700">
                            <li><span className="font-semibold text-teal-700">Function Analysis:</span> Systematically determine the core function of a product or process to **identify and remove non-essential costs** without compromising performance.</li>
                            <li><span className="font-semibold text-teal-700">Life-Cycle Costing:</span> Detailed evaluation of long-term operational costs (energy, maintenance, spares) against initial investment to ensure **cost optimization** and value.</li>
                            <li><span className="font-semibold text-teal-700">Material Adaptation:</span> Recommend superior, cost-effective materials and components (often through re-design) for high-wear areas, **enhancing product reliability and longevity.**</li>
                        </ul>
                    </TabContent>
                </div>
                
                
                {/* Expected Outcomes - Stats (Custom Tailwind Implementation) */}
                <h2 className={`text-4xl font-bold mb-8 text-center ${ACCENT_ORANGE_CLASS}`}>
                    Measured Results & ROI
                </h2>
                
                <div className={`flex flex-col lg:flex-row shadow-2xl w-full text-white rounded-xl overflow-hidden`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    
                    {/* Stat 1: OEE Improvement */}
                    <div className="flex-1 p-8 text-center border-b lg:border-b-0 lg:border-r border-gray-700/50">
                        <div className={`flex justify-center mb-2 ${ACCENT_ORANGE_CLASS}`}>
                            <ChartLineIcon className="w-10 h-10" />
                        </div>
                        <div className={`text-xl font-semibold text-gray-400 mb-1`}>OEE Improvement</div>
                        <div className={`text-5xl font-extrabold mb-1`} style={{ color: ORANGE_ACCENT_HEX }}>15%+</div>
                        <div className={`${ACCENT_TEXT_CLASS} text-sm`}>Overall Equipment Effectiveness Uplift</div>
                    </div>

                    {/* Stat 2: Waste Reduction */}
                    <div className="flex-1 p-8 text-center border-b lg:border-b-0 lg:border-r border-gray-700/50">
                        <div className={`flex justify-center mb-2 ${ACCENT_ORANGE_CLASS}`}>
                            <TargetedIcon className="w-10 h-10" />
                        </div>
                        <div className={`text-xl font-semibold text-gray-400 mb-1`}>Waste Reduction</div>
                        <div className={`text-5xl font-extrabold mb-1`} style={{ color: ORANGE_ACCENT_HEX }}>20%+</div>
                        <div className={`${ACCENT_TEXT_CLASS} text-sm`}>Reduction in Non-Value Added Time & Scrap</div>
                    </div>

                    {/* Stat 3: Cost Savings */}
                    <div className="flex-1 p-8 text-center">
                        <div className={`flex justify-center mb-2 ${ACCENT_ORANGE_CLASS}`}>
                            <ReceiveMoneyIcon className="w-10 h-10" />
                        </div>
                        <div className={`text-xl font-semibold text-gray-400 mb-1`}>Cost Savings</div>
                        <div className={`text-5xl font-extrabold mb-1`} style={{ color: ORANGE_ACCENT_HEX }}>Significant</div>
                        <div className={`${ACCENT_TEXT_CLASS} text-sm`}>Through streamlined process efficiency</div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default OperationalExcellencePage;
