const Services = () => {
    const services = [
        {
            title: 'Industrial Equipment Supply',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-500"><path fillRule="evenodd" d="M3.79 2.93A1 1 0 014.71 2h14.58a1 1 0 01.92.93l.53 5.3a1 1 0 01-.93 1.07H5.25a1 1 0 01-.93-1.07l.53-5.3zM21 11a1 1 0 011 1v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7a1 1 0 011-1h18zm-2 2H5v6h14v-6zm-4-4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" /></svg>
            ),
            items: [
                'Gate Valves, Ball Valves, Strainers',
                'Gaskets, O-Rings, Sealing Materials',
                'Conveyor Belts (PU, PVC, Modular, Timing)',
                'Bearings, Couplings, Industrial Hoses',
                'Sourced from trusted global and local manufacturers',
            ],
            description: "Precision-sourcing of mechanical, electrical, and process components to meet exact compliance and performance specifications for critical industrial assets."
        },
        {
            title: 'Engineering Solutions',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-500"><path fillRule="evenodd" d="M12.5 16.5a4 4 0 10-5.657-5.657 4 4 0 005.657 5.657zM20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 6a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" /></svg>
            ),
            items: [
                'System diagnosis & failure analysis',
                'Equipment retrofitting and replacement',
                'Custom component sourcing based on specification',
                'Process improvement consultation (field-based)',
            ],
            description: "Leveraging decades of field experience to provide expert consultation, system analysis, and specialized technical guidance to optimize operational stability."
        },
        {
            title: 'Maintenance & Modifications',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-500"><path fillRule="evenodd" d="M3.75 3.75a.75.75 0 01.75-.75h14.5a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75V3.75zM8.25 15.75h7.5V14.25h-7.5v1.5zm0-4.5h7.5V11.25h-7.5V12z" clipRule="evenodd" /></svg>
            ),
            items: [
                'Custom cut gaskets or belts',
                'Adaptations for process-specific challenges',
                'Vendor coordination for special jobs',
                'On-site troubleshooting & inspection',
                'Emergency supply and rapid response',
            ],
            description: "Agile, responsive support for critical infrastructure modifications, specialized fabrication, and rapid component deployment to minimize unexpected production halts."
        },
        {
            title: 'Calibration & Compliance',
            subtitle: '(via sister concern: Quality Calibration)',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-500"><path d="M10.875 18.75a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75H12v2.25zM12 2.25c-5.405 0-9.75 4.345-9.75 9.75s4.345 9.75 9.75 9.75 9.75-4.345 9.75-9.75S17.405 2.25 12 2.25zM12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" /></svg>
            ),
            items: [
                'ISO/IEC 17025 accredited labs (NABL & BAB)',
                'On-site & in-lab industrial calibration',
                'Expertise in pharma, FMCG, oil & gas, textiles, power, healthcare',
            ],
            description: "Ensuring regulatory adherence and metrological traceability through accredited, high-precision calibration and certification services across diverse industry sectors."
        },
    ];

    return (
        <section className="py-16 bg-gray-900 rounded-xl shadow-2xl p-6 md:p-10 max-w-7xl mx-auto">
            {/* Header Section (Updated for strategic tone) */}
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                    Our <span className="text-amber-400">Integrated Service</span> Portfolio
                </h1>
                <h2 className="text-xl font-semibold text-amber-400">
                    Strategic Solutions for Operational Excellence
                </h2>
                <p className="max-w-4xl mx-auto text-lg text-gray-400">
                    We transcend the role of a standard supplier by integrating high-quality product supply with **specialized engineering and compliance expertise**. Our portfolio is built to ensure the sustained **reliability, efficiency, and compliance** of your most critical operations.
                </p>
            </div>

            {/* Highlight Block - Changed text to be more assertive */}
            <div className="text-center max-w-5xl mx-auto mb-14 p-6 text-xl bg-gray-800 border-l-4 border-amber-400 text-gray-200 rounded-lg shadow-md">
                <span className="font-bold text-amber-200">Our promise:</span> Minimizing unexpected downtime through expert diagnostics, rapid component supply, and world-class metrological assurance.
            </div>

            {/* Services Grid (Card redesign for better visual hierarchy and professionalism) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl hover:shadow-2xl hover:border-amber-500 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="flex flex-col items-start mb-4">
                            <div className="flex-shrink-0 bg-amber-500/15 p-3 rounded-xl mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white leading-snug">
                                {service.title}
                            </h3>
                        </div>
                        
                        {service.subtitle && (
                            <p className="text-sm italic text-amber-400 mb-4">{service.subtitle}</p>
                        )}
                        
                        {/* New Description Paragraph for value proposition */}
                        <p className="text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>
                        
                        {/* Key Deliverables List with sub-header */}
                        <h4 className="text-md font-semibold text-amber-400 mt-4 mb-2 border-t border-gray-700 pt-4">Key Deliverables</h4>

                        <ul className="space-y-2 text-gray-300">
                            {service.items.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;