const About = () => {
    // Lucide icons for Core Principles
    const MissionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-amber-500"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    );
    const VisionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-amber-500"><path d="M2 12s3-4 8-4 8 4 8 4-3 4-8 4-8-4-8-4Z"/><circle cx="10" cy="12" r="3"/></svg>
    );
    const ValuesIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-amber-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    );

    return (
        <section className="py-16 bg-gray-900 rounded-xl shadow-2xl p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                {/* Header and Core Narrative */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Our <span className="text-amber-400">Commitment</span> to Industry
                    </h2>
                    <div className="max-w-3xl mx-auto text-left">
                        <p className="text-lg text-gray-300 leading-relaxed mb-4 border-l-4 border-amber-400 pl-4">
                            <span className="font-semibold text-white">Quality Enterprise</span> is established upon a foundation of **decades of technical leadership** and industrial expertise. Our founding partners, leveraging over **90 years of combined experience** with top-tier organizations like Unilever Bangladesh, identified a crucial need for a dedicated, solution-driven supplier in the market.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-4 border-l-4 border-amber-400 pl-4">
                            We operate as more than just a vendor; we are an **engineering partner** specializing in the precise sourcing and supply of high-performance components—from critical sealing solutions (gaskets, O-rings) to robust flow control and material handling equipment (valves, conveyor belts).
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Our dual focus on premium **product integrity** and **expert technical service** ensures that every solution we provide contributes directly to minimizing downtime, optimizing operational efficiency, and securing regulatory compliance for your facility.
                        </p>
                    </div>
                </div>

                {/* Core Principles Section */}
                <h3 className="text-3xl font-bold text-white text-center mb-10">
                    Our Core Principles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Mission */}
                    <div className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-amber-500 transition-all duration-300 shadow-xl">
                        <MissionIcon />
                        <h4 className="text-2xl font-bold text-amber-400 mt-4 mb-3">
                            Mission
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                            To empower industries by providing **reliable, high-grade products** and unparalleled engineering solutions that drastically reduce operational downtime and enhance process safety and performance.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-amber-500 transition-all duration-300 shadow-xl">
                        <VisionIcon />
                        <h4 className="text-2xl font-bold text-amber-400 mt-4 mb-3">
                            Vision
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                            To be recognized as the **nation's leading technical partner** for industrial supply and services, renowned for our commitment to quality, responsiveness, and consistent technical excellence.
                        </p>
                    </div>
                    
                    {/* Core Values (New Addition) */}
                    <div className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-amber-500 transition-all duration-300 shadow-xl">
                        <ValuesIcon />
                        <h4 className="text-2xl font-bold text-amber-400 mt-4 mb-3">
                            Core Values
                        </h4>
                        <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-1">
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