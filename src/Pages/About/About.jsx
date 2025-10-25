import React from 'react';

const About = () => {
    // --- Color and Style Constants (Matching the established theme) ---
    const PRIMARY_TEAL = '#1A364F';     // Card Background
    const DARK_NAVY = '#0F2133';        // Main Section Background
    const ORANGE_ACCENT_HEX = '#FF8C00';// Accent Color
    
    // Consistent Tailwind classes for typography
    const BODY_TEXT = 'text-gray-300';
    const ACCENT_TEXT_CLASS = 'text-white';

    // --- UPDATED CONTENT FROM THE IMAGE - Reorganized into three paragraphs ---
    const narrativeParagraphs = [
        {
            // Focus: Company Founding and Expertise
            text: `Quality Enterprise is a trusted partner in industrial equipment supply, calibration services, and operational excellence solutions, founded by a team of industry veterans with over 40+ years of combined experience. After decades of leadership in companies like Unilever Bangladesh, our founding partners created Quality Enterprise to bridge the gap between quality products and real-world industrial performance.`
        },
        {
            // Focus: Core Services and Value Proposition
            text: `We specialize in sourcing equipment and customized industrial components—ensuring reliability, compliance, and value for every operation. Through our Operational Excellence Services, we empower industries to achieve more. From Lean Six Sigma to World Class Manufacturing (WCM) practices, we help manufacturers reduce waste, optimize costs, and boost efficiency. Our integrated ISO-based methodologies ensure long-term sustainability and continuous improvement.`
        },
        {
            // Focus: Our Promise
            text: `We don't just deliver equipment—we deliver confidence, efficiency, and growth. With us, you gain a partner dedicated to keeping your operations smarter, safer, and future-ready.`
        }
    ];

    const missionText = 'To empower industries with reliable products and engineering solutions that reduce downtime, improve safety, and optimize performance.';
    const visionText = 'To become a nationwide leader in industrial equipment supply and services—known for quality, speed, technical and operational excellence.';
    // ----------------------------------------

    // Lucide icons for Core Principles
    const MissionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: ORANGE_ACCENT_HEX }}>
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
    );
    const VisionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: ORANGE_ACCENT_HEX }}>
            <path d="M2 12s3-4 8-4 8 4 8 4-3 4-8 4-8-4-8-4Z"/>
            <circle cx="10" cy="12" r="3"/>
        </svg>
    );
    const ValuesIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" style={{ color: ORANGE_ACCENT_HEX }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    );

    return (
        <section className={`py-16 shadow-2xl p-6 md:p-10`} style={{ backgroundColor: DARK_NAVY }}>
            <div className="max-w-7xl mx-auto">
                
                {/* Header and Core Narrative */}
                <div className="mb-16"> 
                    
                    {/* Title remains centered */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
                        Our <span style={{ color: ORANGE_ACCENT_HEX }}>Commitment</span> to Industry
                    </h2>
                    
                    {/* Text content block - Uses mx-auto to center the block, and text-left for content alignment */}
                    <div className="max-w-3xl mx-auto text-left">
                        
                        {/* Narrative Paragraphs - MODIFIED with text-justify */}
                        {narrativeParagraphs.map((p, index) => (
                            <p 
                                key={index}
                                // 🌟 KEY CHANGE: text-justify added here 
                                className={`text-lg ${BODY_TEXT} leading-relaxed mb-4 border-l-4 pl-4 text-justify ${index === narrativeParagraphs.length - 1 ? 'mb-0' : ''}`} 
                                style={{ borderColor: ORANGE_ACCENT_HEX }}
                            >
                                {p.text}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Core Principles Section (The Three Cards) - Headings and Cards remain centered */}
                <h3 className="text-3xl font-bold text-white text-center mb-10">
                    Our Core Principles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    
                    {/* Mission Card - Updated with the new Mission text */}
                    <div className={`p-8 rounded-xl border border-gray-700 transition-all duration-300 shadow-xl hover:border-white/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                        <MissionIcon />
                        <h4 className={`text-2xl font-bold mt-4 mb-3`} style={{ color: ORANGE_ACCENT_HEX }}>
                            Mission
                        </h4>
                        <p className={`${BODY_TEXT} leading-relaxed text-left`}>
                            {missionText}
                        </p>
                    </div>

                    {/* Vision Card - Updated with the new Vision text */}
                    <div className={`p-8 rounded-xl border border-gray-700 transition-all duration-300 shadow-xl hover:border-white/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                        <VisionIcon />
                        <h4 className={`text-2xl font-bold mt-4 mb-3`} style={{ color: ORANGE_ACCENT_HEX }}>
                            Vision
                        </h4>
                        <p className={`${BODY_TEXT} leading-relaxed text-left`}>
                            {visionText}
                        </p>
                    </div>
                    
                    {/* Core Values Card - Unchanged */}
                    <div className={`p-8 rounded-xl border border-gray-700 transition-all duration-300 shadow-xl hover:border-white/50`} style={{ backgroundColor: PRIMARY_TEAL }}>
                        <ValuesIcon />
                        <h4 className={`text-2xl font-bold mt-4 mb-3`} style={{ color: ORANGE_ACCENT_HEX }}>
                            Core Values
                        </h4>
                        <ul className={`${BODY_TEXT} leading-relaxed list-disc list-inside space-y-1 text-left`}>
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