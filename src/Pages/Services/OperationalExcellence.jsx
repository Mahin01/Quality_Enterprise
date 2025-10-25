import React from 'react';

// --- Color and Style Constants ---
const PRIMARY_TEAL = '#1A364F'; 
const DARK_NAVY = '#0F2133';
const ORANGE_ACCENT_HEX = '#FF8C00'; 
const ACCENT_ORANGE_CLASS = 'text-orange-400'; 
const ACCENT_TEXT_CLASS = 'text-gray-300';

// --- Inline SVG Icons ---
const TargetedIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const GearsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

const ReceiveMoneyIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h.01"/>
        <path d="M7 20h10"/>
        <path d="M12 16V4M12 4l-4 4M12 4l4 4"/>
        <rect x="2" y="10" width="20" height="4" rx="2"/>
    </svg>
);

const ChartLineIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v3h18v-3"/>
        <path d="M18 13l-4-4L6 14"/>
        <path d="M18 13h-3.5a1.5 1.5 0 0 1-1.5-1.5V8.5"/>
        <path d="M3 3v18"/>
    </svg>
);

const ChevronRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
    </svg>
);

const OperationalExcellencePage = () => {
    return (
        <div className={`min-h-screen font-inter text-white`} style={{ backgroundColor: DARK_NAVY }}>
            
            {/* Hero Section */}
            <div className={`py-28 rounded-b-[40px] shadow-2xl shadow-black/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tight">
                        Achieve <span className={`${ACCENT_ORANGE_CLASS}`}>World-Class Efficiency</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto opacity-90">
                        Implement proven methodologies like <b className='text-orange-400'>Lean Six Sigma</b> and <b className='text-orange-400'>WCM</b> to eliminate waste, optimize processes, and ensure long-term operational sustainability.
                    </p>
                    <a href='/contact'>
                        <button className={`mt-8 transition duration-300 hover:scale-[1.02] hover:shadow-lg text-lg font-semibold py-3 px-8 rounded-xl flex items-center justify-center mx-auto`} style={{ backgroundColor: ORANGE_ACCENT_HEX, color: DARK_NAVY }}>
                            Start Your Assessment
                            <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-900" />
                        </button>
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-8 lg:p-16">

                {/* Foundation Section */}
                <div className="bg-gray-800/50 p-8 mb-16 rounded-xl shadow-xl border border-gray-700">
                    <h2 className="text-3xl font-bold mb-3 text-white">Our Foundation: 40+ Years of Industrial Leadership</h2>
                    <p className="text-lg text-gray-300">
                        Founded by industry veterans with over <b className='text-orange-400'>40+ years of combined experience</b> in demanding sectors like FMCG (e.g., Unilever Bangladesh), our services are not theoretical—they're built on real-world industrial performance. We utilize <b className='text-orange-400'>integrated, ISO-based methodologies</b> to ensure process rigor, compliance, and long-term sustainability, delivering confidence and growth to your plant operations.
                    </p>
                </div>

                {/* Integrated Improvement Pillars */}
                <h2 className={`text-5xl font-bold mb-14 text-center ${ACCENT_ORANGE_CLASS} pt-8`}>
                    Integrated Improvement Pillars
                </h2>

                {/* --- WCM Section --- */}
                <div className="bg-gray-800/60 p-10 mb-12 rounded-xl shadow-xl border border-gray-700">
                    <div className="flex items-start mb-4">
                        <GearsIcon className={`w-12 h-12 ${ACCENT_ORANGE_CLASS} mr-4`} />
                        <h3 className="text-3xl font-bold text-white">World Class Manufacturing (WCM)</h3>
                    </div>
                    <p className="mb-4 text-lg text-gray-300">
                        Strengthen your operations with WCM practices that enhance <b>equipment reliability, safety, and productivity.</b> 
                        We help manufacturing plants adopt proven methodologies that <b>reduce downtime and improve efficiency.</b>
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                        <li>Preventive & autonomous maintenance practices</li>
                        <li>Loss analysis and productivity improvement</li>
                        <li>Roadmap to sustainable manufacturing excellence</li>
                    </ul>
                </div>

                {/* --- Lean Six Sigma Section --- */}
                <div className="bg-gray-800/60 p-10 mb-12 rounded-xl shadow-xl border border-gray-700">
                    <div className="flex items-start mb-4">
                        <TargetedIcon className={`w-12 h-12 ${ACCENT_ORANGE_CLASS} mr-4`} />
                        <h3 className="text-3xl font-bold text-white">Lean Six Sigma</h3>
                    </div>
                    <p className="mb-4 text-lg text-gray-300">
                        <b>Achieve process improvement and waste reduction</b> with Lean Six Sigma practices. 
                        Our training and consulting help organizations streamline workflows, improve quality, and <b>reduce costs.</b>
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                        <li>Hands-on training for teams</li>
                        <li>Problem-solving with data-driven tools</li>
                        <li>Improved productivity and reduced costs</li>
                    </ul>
                </div>

                {/* --- Value Engineering Section --- */}
                <div className="bg-gray-800/60 p-10 mb-12 rounded-xl shadow-xl border border-gray-700">
                    <div className="flex items-start mb-4">
                        <ReceiveMoneyIcon className={`w-12 h-12 ${ACCENT_ORANGE_CLASS} mr-4`} />
                        <h3 className="text-3xl font-bold text-white">Value Engineering Solutions</h3>
                    </div>
                    <p className="mb-4 text-lg text-gray-300">
                        <b>Unlock higher value at lower cost.</b> We specialize in applying value engineering strategies that balance 
                        <b>function, performance, and cost efficiency</b> — delivering smarter solutions without compromise.
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
                        <li>Functional analysis of products/processes</li>
                        <li>Redesign for efficiency & sustainability</li>
                        <li>Balance between performance and cost</li>
                    </ul>
                </div>

                {/* --- Measured Results Section --- */}
                <h2 className={`text-4xl font-bold mb-8 text-center ${ACCENT_ORANGE_CLASS}`}>
                    Measured Results & ROI
                </h2>
                
                <div className={`flex flex-col lg:flex-row shadow-2xl w-full text-white rounded-xl overflow-hidden`} style={{ backgroundColor: PRIMARY_TEAL }}>
                    <div className="flex-1 p-8 text-center border-b lg:border-b-0 lg:border-r border-gray-700/50">
                        <div className={`flex justify-center mb-2 ${ACCENT_ORANGE_CLASS}`}>
                            <ChartLineIcon className="w-10 h-10" />
                        </div>
                        <div className={`text-xl font-semibold text-gray-400 mb-1`}>OEE Improvement</div>
                        <div className={`text-5xl font-extrabold mb-1`} style={{ color: ORANGE_ACCENT_HEX }}>15%+</div>
                        <div className={`${ACCENT_TEXT_CLASS} text-sm`}>Overall Equipment Effectiveness Uplift</div>
                    </div>

                    <div className="flex-1 p-8 text-center border-b lg:border-b-0 lg:border-r border-gray-700/50">
                        <div className={`flex justify-center mb-2 ${ACCENT_ORANGE_CLASS}`}>
                            <TargetedIcon className="w-10 h-10" />
                        </div>
                        <div className={`text-xl font-semibold text-gray-400 mb-1`}>Waste Reduction</div>
                        <div className={`text-5xl font-extrabold mb-1`} style={{ color: ORANGE_ACCENT_HEX }}>20%+</div>
                        <div className={`${ACCENT_TEXT_CLASS} text-sm`}>Reduction in Non-Value Added Time & Scrap</div>
                    </div>

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
};

export default OperationalExcellencePage;
