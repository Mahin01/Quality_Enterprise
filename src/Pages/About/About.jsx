import React from 'react';

const About = () => {
    // --- Color and Style Constants (Matching the established theme) ---
    const BG_NAVY = 'bg-gray-900';       // #111827
    const BG_CARD = 'bg-gray-800';       // #1f2937
    const ACCENT_TEXT = 'text-amber-400';// #fbbf24
    const ACCENT_ICON = 'text-amber-500';// #f59e0b (Slightly deeper amber for icons)
    const BODY_TEXT = 'text-gray-300';
    const BORDER_ACCENT = 'border-amber-400';
    const BORDER_CARD_HOVER = 'hover:border-amber-500';

    // Lucide icons for Core Principles
    const MissionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-8 h-8 ${ACCENT_ICON}`}>
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
    );
    const VisionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-8 h-8 ${ACCENT_ICON}`}>
            <path d="M2 12s3-4 8-4 8 4 8 4-3 4-8 4-8-4-8-4Z"/>
            <circle cx="10" cy="12" r="3"/>
        </svg>
    );
    const ValuesIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-8 h-8 ${ACCENT_ICON}`}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    );

    return (
        <section className={`py-16 ${BG_NAVY} shadow-2xl p-6 md:p-10`}>
            <div className="max-w-7xl mx-auto">
                
                {/* Header and Core Narrative */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Our <span className={ACCENT_TEXT}>Commitment</span> to Industry
                    </h2>
                    <div className="max-w-3xl mx-auto text-left">
                        {/* Narrative Paragraph 1 */}
                        <p className={`text-lg ${BODY_TEXT} leading-relaxed mb-4 border-l-4 ${BORDER_ACCENT} pl-4`}>
                            <span className="font-semibold text-white">Quality Enterprise</span> is established upon a foundation of **decades of technical leadership** and industrial expertise. Our founding partners, leveraging over **90 years of combined experience** with top-tier organizations like Unilever Bangladesh, identified a crucial need for a dedicated, solution-driven supplier in the market.
                        </p>
                        {/* Narrative Paragraph 2 */}
                        <p className={`text-lg ${BODY_TEXT} leading-relaxed mb-4 border-l-4 ${BORDER_ACCENT} pl-4`}>
                            We operate as more than just a vendor; we are an **engineering partner** specializing in the precise sourcing and supply of high-performance components—from critical sealing solutions (gaskets, O-rings) to robust flow control and material handling equipment (valves, conveyor belts).
                        </p>
                        {/* Narrative Paragraph 3 */}
                        <p className={`text-lg ${BODY_TEXT} leading-relaxed`}>
                            Our dual focus on premium **product integrity** and **expert technical service** ensures that every solution we provide contributes directly to minimizing downtime, optimizing operational efficiency, and securing regulatory compliance for your facility.
                        </p>
                    </div>
                </div>

                {/* Core Principles Section */}
                <h3 className="text-3xl font-bold text-white text-center mb-10">
                    Our Core Principles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    
                    {/* Mission Card */}
                    <div className={`p-8 rounded-xl ${BG_CARD} border border-gray-700 ${BORDER_CARD_HOVER} transition-all duration-300 shadow-xl`}>
                        <MissionIcon />
                        <h4 className={`text-2xl font-bold ${ACCENT_TEXT} mt-4 mb-3`}>
                            Mission
                        </h4>
                        <p className={`${BODY_TEXT} leading-relaxed`}>
                            To empower industries by providing **reliable, high-grade products** and unparalleled engineering solutions that drastically reduce operational downtime and enhance process safety and performance.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className={`p-8 rounded-xl ${BG_CARD} border border-gray-700 ${BORDER_CARD_HOVER} transition-all duration-300 shadow-xl`}>
                        <VisionIcon />
                        <h4 className={`text-2xl font-bold ${ACCENT_TEXT} mt-4 mb-3`}>
                            Vision
                        </h4>
                        <p className={`${BODY_TEXT} leading-relaxed`}>
                            To be recognized as the **nation's leading technical partner** for industrial supply and services, renowned for our commitment to quality, responsiveness, and consistent technical excellence.
                        </p>
                    </div>
                    
                    {/* Core Values Card */}
                    <div className={`p-8 rounded-xl ${BG_CARD} border border-gray-700 ${BORDER_CARD_HOVER} transition-all duration-300 shadow-xl`}>
                        <ValuesIcon />
                        <h4 className={`text-2xl font-bold ${ACCENT_TEXT} mt-4 mb-3`}>
                            Core Values
                        </h4>
                        <ul className={`${BODY_TEXT} leading-relaxed list-disc list-inside space-y-1`}>
                            <li>Integrity in Sourcing</li>
                            <li>Technical Precision</li>
                            <li>Customer-First Approach</li>
                            <li>Operational Reliability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;